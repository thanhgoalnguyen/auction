import { useEffect } from 'react'
import { useSocket } from '../contexts/SocketContext'

/**
 * Socketイベントをリスニングするカスタムフック
 * 
 * @param eventName - リスニングするイベント名
 * @param handler - イベントハンドラー関数
 * @param deps - useEffectの依存配列（handlerを除く）
 * 
 * @example
 * useSocketEvent('on_chat', (data) => {
 *   console.log('Chat message:', data)
 *   setMessages(prev => [...prev, data])
 * }, [])
 */
export function useSocketEvent<T = any>(
  eventName: string,
  handler: (data: T) => void,
  deps: React.DependencyList = []
) {
  const { socket } = useSocket()

  useEffect(() => {
    if (!socket) return

    socket.on(eventName, handler)

    return () => {
      socket.off(eventName, handler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [socket, eventName, handler, ...deps])
}

