import {
  RemoteUser,
  useJoin,
  useRemoteUsers,
} from "agora-rtc-react";
import { useState } from "react";
import AgoraRTC, { AgoraRTCProvider } from "agora-rtc-react";
import { useSocket } from "../contexts/SocketContext";
import { useAutoJoinRoom } from "../hooks/useAutoJoinRoom";
export const AudienceView = () => {
  const client = AgoraRTC.createClient({
    mode:  'live',
    codec: 'vp8',
    role:  'audience' // 視聴者として設定
  });
  
  return (
    <AgoraRTCProvider client={ client }>
      <AudienceBasics/>
    </AgoraRTCProvider>
  );
}

const AudienceBasics = () => {
  const [calling, setCalling] = useState(false);
  const [roomId] = useState(1);
  const [channel, setChannel] = useState<string>("");
  const [appId, setAppId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [agoraUserId, setAgoraUserId] = useState<number>(0);
  
  // システムのユーザー情報（デモなので固定）
  const [systemUserId] = useState(100);
  const [systemUsername] = useState("視聴者");
  
  const [error, setError] = useState<string | null>(null);

  // SocketContext から取得
  const { isConnected: isSocketConnected, currentRoom, disconnect } = useSocket();

  // 🎯 自動参加フックを使用（システムのユーザー情報で接続）
  const { hasJoined, isJoining } = useAutoJoinRoom({
    userId: systemUserId,
    username: systemUsername,
    roomId,
    onSuccess: (agoraToken, agoraAppId, agoraChannel, agoraUid) => {
      setToken(agoraToken);
      setAppId(agoraAppId);
      setChannel(agoraChannel);
      setAgoraUserId(agoraUid);
      setCalling(true);
      setError(null);
    },
    onError: (err) => {
      setError(err.message);
    },
    enabled: true // 自動参加を有効化
  });

  // Agora接続（サーバーから取得したchannel、agoraUserIdを使用）
  useJoin({appid: appId, channel: channel, token: token ? token : null, uid: agoraUserId}, calling && appId !== "" && agoraUserId !== 0);

  const remoteUsers = useRemoteUsers();

  // エラー画面
  if (error) {
    return (
      <div>
        <h1>接続エラー</h1>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>再試行</button>
      </div>
    );
  }

  // ローディング画面
  if (isJoining || !hasJoined) {
    return (
      <div>
        <h1>ルームに参加中...</h1>
        <p>接続を確立しています</p>
      </div>
    );
  }

  return (
    <>
      <div>
        <h1>視聴者 (Audience)</h1>
        <div>
          <div>
            <h3>配信者 ({remoteUsers.length}人)</h3>
            {remoteUsers.map((user) => (
              <div key={user.uid}>
                <RemoteUser user={user} style={{width: '640px', height: '360px'}}>
                  <samp>配信者 {user.uid}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <button onClick={() => {
          setCalling(false);
          disconnect();
        }}>
          視聴終了
        </button>
      </div>

      <div>
        <p>Socket: {isSocketConnected ? '✓ 接続済み' : '○ 未接続'}</p>
        <p>ルーム: {currentRoom ? `✓ ${currentRoom}` : '○ 未参加'}</p>
        <p>システムユーザーID: {systemUserId}</p>
        <p>システムユーザー名: {systemUsername}</p>
        <p>Agora Channel: {channel || '未取得'}</p>
        <p>Agora UID: {agoraUserId || '未取得'}</p>
      </div>
    </>
  );
};

export default AudienceView;
