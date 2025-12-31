import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import type { ReactNode } from 'react';
import { io, Socket } from 'socket.io-client';
import type { JoinRoomResponseData, StartSessionResponse, AgoraTokenResponseData } from '@types';

// 型定義
interface SocketContextValue {
  socket: Socket | null;
  isConnected: boolean;
  isAuthenticated: boolean;
  currentRoom: number | null;
  isInRoom: boolean;
  connect: (userId: number, username: string) => Promise<void>;
  disconnect: () => void;
  joinRoom: (roomId: number) => Promise<JoinRoomResponseData>;
  leaveRoom: () => Promise<void>;
  requestAgoraToken: (roomId: number) => Promise<AgoraTokenResponseData>;
  startSession: (roomId: number, itemId: number) => void;
  placeBid: (sessionId: number, amount: number) => void;
  sendChat: (roomId: number, message: string) => void;
  logs: string[];
  addLog: (message: string) => void;
}

// Context作成
const SocketContext = createContext<SocketContextValue | null>(null);

// Provider Props
interface SocketProviderProps {
  children: ReactNode;
}

// Provider Component
export const SocketProvider: React.FC<SocketProviderProps> = ({ children }) => {
  const [socket, setSocket] = useState<Socket | null>(null);
  const socketRef = useRef<Socket | null>(null);  // 即座に更新される参照
  const [isConnected, setIsConnected] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [currentRoom, setCurrentRoom] = useState<number | null>(null);
  const [logs, setLogs] = useState<string[]>([]);

  // ログ追加
  const addLog = useCallback((message: string) => {
    const timestamp = new Date().toLocaleTimeString();
    const messageToAdd = `[${timestamp}] ${message}`;
    console.log(messageToAdd);
    setLogs(prev => [...prev, messageToAdd]);
  }, []);

  // エラー付きPromiseヘルパー
  const promiseWithErrorHandler = useCallback(<T,>(
    executor: (
      resolve: (value: T | PromiseLike<T>) => void, 
      rejectWithError: (message: string) => void,
      reject: (error: Error) => void
    ) => void
  ): Promise<T> => {
    return new Promise((resolve, reject) => {
      const rejectWithError = (message: string) => {
        addLog(`エラー: ${message}`);
        reject(new Error(message));
      };
      executor(resolve, rejectWithError, reject);
    });
  }, [addLog]);

  // Socket接続
  const connect = useCallback((userId: number, username: string): Promise<void> => {
    return promiseWithErrorHandler((resolve, rejectWithError, reject) => {
      if (socketRef.current && socketRef.current.connected) {
        addLog('既に接続されています');
        resolve();
        return;
      }

      if (!userId || !username) {
        return rejectWithError('ユーザーIDとユーザー名が必要です');
      }

      addLog('接続を試行中...');

      const newSocket = io();
      const timeout = setTimeout(() => {
        newSocket.close();
        rejectWithError('接続タイムアウト');
      }, 10000); // 10秒タイムアウト

      newSocket.on('connect', () => {
        clearTimeout(timeout);
        setIsConnected(true);
        addLog('サーバーに接続しました');
        addLog(`Socket ID: ${newSocket.id}`);
        
        // 認証（callbackで結果を受け取る）
        newSocket.emit('authenticate', { userId }, (response: { success: boolean; error?: string }) => {
          if (response.success) {
            addLog(`認証成功: ${username} (${userId})`);
            setIsAuthenticated(true);
            
            // 状態とRefの両方を更新
            socketRef.current = newSocket;  // 即座に更新
            setSocket(newSocket);           // 再レンダリング用
            
            resolve();
          } else {
            clearTimeout(timeout);
            newSocket.close();
            rejectWithError(response.error || '認証失敗');
          }
        });
      });

      newSocket.on('connect_error', (error) => {
        clearTimeout(timeout);
        addLog(`接続エラー: ${error.message}`);
        reject(error);
      });

      newSocket.on('disconnect', (reason) => {
        setIsConnected(false);
        setIsAuthenticated(false);
        setCurrentRoom(null);
        socketRef.current = null;  // Refもクリア
        addLog(`切断: ${reason}`);
      });

      newSocket.on('error', (error) => {
        addLog(`Socket エラー: ${error.message || JSON.stringify(error)}`);
      });
    });
  }, [addLog, promiseWithErrorHandler]);

  // Socket切断
  const disconnect = useCallback(() => {
    if (socketRef.current) {
      addLog('切断中...');
      socketRef.current.disconnect();
      socketRef.current = null;
      setSocket(null);
      setIsConnected(false);
      setIsAuthenticated(false);
      setCurrentRoom(null);
      addLog('切断しました');
    }
  }, [addLog]);

  // Agoraトークン取得
  const requestAgoraToken = useCallback((roomId: number): Promise<AgoraTokenResponseData> => {
    return promiseWithErrorHandler((resolve, rejectWithError, reject) => {
      const currentSocket = socketRef.current;  // Refから最新のsocketを取得
      
      console.log('🎫 requestAgoraToken 開始');
      console.log('  - socketRef.current:', currentSocket);
      console.log('  - socket?.connected:', currentSocket?.connected);
      console.log('  - socket?.id:', currentSocket?.id);
      
      if (!currentSocket || !currentSocket.connected) {
        console.error('❌ Socket未接続エラー');
        return rejectWithError('Socket未接続');
      }

      if (!roomId) return rejectWithError('roomIdが必要です');

      addLog(`トークンを取得中... (room: ${roomId})`);

      const timeout = setTimeout(() => rejectWithError('トークン取得タイムアウト'), 5000);

      currentSocket.emit('request_agora_token', 
        { roomId }, 
        (response: any) => {
          clearTimeout(timeout);
          
          if (response.error || !response.success) {
            return rejectWithError(response.error || 'トークン取得失敗');
          }
          
          const data = response.data;
          addLog(`トークン取得成功: channel=${data.channel}, agoraUserId=${data.agoraUserId}`);
          resolve(data);
        }
      );
    });
  }, [addLog, promiseWithErrorHandler]);

  // ルーム参加
  const joinRoom = useCallback((roomId: number): Promise<JoinRoomResponseData> => {
    return promiseWithErrorHandler((resolve, rejectWithError, reject) => {
      const currentSocket = socketRef.current;
      
      if (!currentSocket || !currentSocket.connected) {
        return rejectWithError('Socket未接続');
      }
      
      addLog(`ルーム参加中: ${roomId}`);
      
      const timeout = setTimeout(() => rejectWithError('ルーム参加タイムアウト'), 5000);
      
      currentSocket.emit('join_room', 
        { roomId }, 
        (response: any) => {
          clearTimeout(timeout);
          
          if (response.error) {
            return rejectWithError(response.error);
          }
          
          addLog(`ルーム参加成功: ${roomId} (参加者数: ${response.data?.numParticipants})`);
          setCurrentRoom(roomId);
          resolve(response.data);
        }
      );
    });
  }, [addLog, promiseWithErrorHandler]);

  // ルーム退出
  const leaveRoom = useCallback((): Promise<void> => {
    return new Promise((resolve) => {
      const currentSocket = socketRef.current;
      
      if (!currentSocket || !currentRoom) {
        resolve();
        return;
      }
      
      addLog(`ルーム退出中: ${currentRoom}`);
      
      const timeout = setTimeout(() => {
        addLog('ルーム退出タイムアウト（続行）');
        setCurrentRoom(null);
        resolve();
      }, 3000);
      
      currentSocket.emit('leave_room', 
        { roomId: currentRoom }, 
        (response: any) => {
          clearTimeout(timeout);
          
          if (response && response.error) {
            addLog(`ルーム退出エラー: ${response.error}`);
          } else {
            addLog(`ルーム退出成功`);
          }
          setCurrentRoom(null);
          resolve();
        }
      );
    });
  }, [currentRoom, addLog]);

  // セッション開始
  const startSession = useCallback((roomId: number, itemId: number): void => {
    const currentSocket = socketRef.current;
    
    if (!currentSocket || !currentSocket.connected) {
      addLog('エラー: Socket未接続');
      return;
    }
    
    addLog(`セッション開始リクエスト送信: room=${roomId}, item=${itemId}`);
    
    currentSocket.emit('start_session', { roomId, itemId }, (response: StartSessionResponse) => {
      if (response.success) {
        addLog('セッション開始リクエスト成功');
      } else {
        // TODO: how to handle error?
        addLog(`セッション開始エラー: ${response.error || '不明なエラー'}`);
      }
    });
  }, [addLog]);

  // 入札
  const placeBid = useCallback((sessionId: number, amount: number): void => {
    const currentSocket = socketRef.current;
    
    if (!currentSocket || !currentSocket.connected) {
      addLog('エラー: Socket未接続');
      return;
    }
    
    addLog(`入札リクエスト送信: session=${sessionId}, amount=${amount}`);
    
    currentSocket.emit('place_bid', { sessionId, amount });
  }, [addLog]);

  // チャットメッセージ送信
  const sendChat = useCallback((roomId: number, message: string): void => {
    const currentSocket = socketRef.current;
    
    if (!currentSocket || !currentSocket.connected) {
      addLog('エラー: Socket未接続');
      return;
    }
    
    if (!message.trim()) {
      return;
    }
    
    addLog(`チャットメッセージ送信: room=${roomId}, message=${message}`);
    
    currentSocket.emit('send_chat', { roomId, message: message.trim() });
  }, [addLog]);

  // クリーンアップ
  useEffect(() => {
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const value: SocketContextValue = {
    socket,
    isConnected,
    isAuthenticated,
    currentRoom,
    isInRoom: currentRoom !== null,
    connect,
    disconnect,
    joinRoom,
    leaveRoom,
    requestAgoraToken,
    startSession,
    placeBid,
    sendChat,
    logs,
    addLog
  };

  return (
    <SocketContext.Provider value={value}>
      {children}
    </SocketContext.Provider>
  );
};

// Custom Hook
export const useSocket = (): SocketContextValue => {
  const context = useContext(SocketContext);
  if (!context) {
    throw new Error('useSocket must be used within a SocketProvider');
  }
  return context;
}; 