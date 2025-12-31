import { describe, it, expect } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { SocketProvider, useSocket } from '../contexts/SocketContext';

describe('SocketContext', () => {
  it('初期状態では未接続', () => {
    const { result } = renderHook(() => useSocket(), {
      wrapper: SocketProvider,
    });

    expect(result.current.isConnected).toBe(false);
    expect(result.current.isAuthenticated).toBe(false);
    expect(result.current.currentRoom).toBe(null);
    expect(result.current.isInRoom).toBe(false);
    expect(result.current.socket).toBe(null);
  });

  it('logsが空配列で初期化される', () => {
    const { result } = renderHook(() => useSocket(), {
      wrapper: SocketProvider,
    });

    expect(result.current.logs).toEqual([]);
  });

  it('addLogでログが追加できる', async () => {
    const { result } = renderHook(() => useSocket(), {
      wrapper: SocketProvider,
    });

    result.current.addLog('テストログ');

    await waitFor(() => {
      expect(result.current.logs.length).toBeGreaterThan(0);
    });
    
    expect(result.current.logs[0]).toContain('テストログ');
  });

  it('必要なメソッドが存在する', () => {
    const { result } = renderHook(() => useSocket(), {
      wrapper: SocketProvider,
    });

    expect(typeof result.current.connect).toBe('function');
    expect(typeof result.current.disconnect).toBe('function');
    expect(typeof result.current.joinRoom).toBe('function');
    expect(typeof result.current.leaveRoom).toBe('function');
    expect(typeof result.current.requestAgoraToken).toBe('function');
    expect(typeof result.current.addLog).toBe('function');
  });
});

