import { useEffect, useRef, useState } from 'react';
import { useSocket } from '../contexts/SocketContext';
import type { JoinRoomResponseData, UserJoinEvent, UserLeaveEvent, SessionStartEvent, SessionEndEvent } from '@types';

interface UseAutoJoinRoomOptions {
  userId: number;
  username: string;
  roomId: number;
  onSuccess: (token: string, appId: string, channel: string, agoraUserId: number) => void;
  onError: (error: Error) => void;
  enabled?: boolean; // 自動参加を有効にするかどうか
}

/**
 * ルーム自動参加フック
 * 
 * ページマウント時に自動的にSocket接続、ルーム参加、Agora配信参加を行います。
 * StrictMode対応：開発環境でuseEffectが2回呼ばれても問題なく動作します。
 * 
 * フロー: connect → authenticate → joinRoom → requestAgoraToken → 配信開始
 * 
 * @example
 * ```tsx
 * const { hasJoined, isJoining } = useAutoJoinRoom({
 *   userId: 123,
 *   username: "ユーザー名",
 *   roomId: 1,
 *   onSuccess: (token, appId, channel, agoraUserId) => {
 *     setToken(token);
 *     setAppId(appId);
 *     setChannel(channel);
 *     setAgoraUserId(agoraUserId);
 *   },
 *   onError: (error) => {
 *     console.error(error);
 *   }
 * });
 * ```
 */
export const useAutoJoinRoom = ({
  userId,
  username,
  roomId,
  onSuccess,
  onError,
  enabled = true
}: UseAutoJoinRoomOptions) => {
  const { 
    isConnected, 
    isInRoom,
    socket,
    connect, 
    joinRoom,
    leaveRoom,
    requestAgoraToken 
  } = useSocket();
  const isJoiningRef = useRef(false); // 参加処理中フラグ
  const hasJoinedRef = useRef(false); // 既に参加済みフラグ
  const [roomData, setRoomData] = useState<JoinRoomResponseData | null>(null);

  useEffect(() => {
    // 無効化されている場合は何もしない
    if (!enabled) return;

    // 既に参加処理中または参加済みの場合はスキップ（StrictMode対策）
    if (isJoiningRef.current || hasJoinedRef.current) return;

    const join = async () => {
      isJoiningRef.current = true;

      try {
        // Step 1: Socket接続 & 認証
        if (!isConnected) {
          await connect(userId, username);
        }

        // Step 2: ルーム参加（roomDataを取得するため、常に実行）
        const data = await joinRoom(roomId);
        setRoomData(data);

        // Step 3: Agoraトークン取得（roomIdを渡す）
        const { token, appId, channel, agoraUserId } = await requestAgoraToken(roomId);
        
        // Step 4: 成功コールバック
        hasJoinedRef.current = true;
        onSuccess(token, appId, channel, agoraUserId);
      } catch (error) {
        onError(error as Error);
      } finally {
        isJoiningRef.current = false;
      }
    };

    join();

    // クリーンアップ：ページ離脱時（バックボタン含む）に実行
    return () => {
      if (hasJoinedRef.current) {
        leaveRoom();
        hasJoinedRef.current = false;
      }
    };
  }, [enabled]); // enabledのみを依存配列に含める

  // イベントリスナー: on_user_join, on_user_leave, on_session_start, on_session_end
  useEffect(() => {
    if (!socket) return;

    const handleUserJoin = (event: UserJoinEvent) => {
      console.log('🟢 on_user_join イベント受信:', event);
      setRoomData((prev) => {
        if (!prev) return prev;
        return { ...prev, numParticipants: event.numParticipants };
      });
    };

    const handleUserLeave = (event: UserLeaveEvent) => {
      console.log('🟢 on_user_leave イベント受信:', event);
      setRoomData((prev) => {
        if (!prev) return prev;
        return { ...prev, numParticipants: event.numParticipants };
      });
    };

    const handleSessionStart = (event: SessionStartEvent) => {
      console.log('🟢 on_session_start イベント受信:', event);
      setRoomData((prev) => {
        if (!prev) return prev;
        return { 
          ...prev, 
          currentSession: event.data 
        };
      });
    };

    const handleSessionEnd = (event: SessionEndEvent) => {
      console.log('🟢 on_session_end イベント受信:', event);
      setRoomData((prev) => {
        if (!prev) return prev;
        return { 
          ...prev, 
          previousSession: event.data,
          currentSession: undefined 
        };
      });
    };

    socket.on('on_user_join', handleUserJoin);
    socket.on('on_user_leave', handleUserLeave);
    socket.on('on_session_start', handleSessionStart);
    socket.on('on_session_end', handleSessionEnd);

    return () => {
      socket.off('on_user_join', handleUserJoin);
      socket.off('on_user_leave', handleUserLeave);
      socket.off('on_session_start', handleSessionStart);
      socket.off('on_session_end', handleSessionEnd);
    };
  }, [socket]);

  return { 
    hasJoined: hasJoinedRef.current,
    isJoining: isJoiningRef.current,
    roomData
  };
};

