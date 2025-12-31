import {
  LocalUser,
  RemoteUser,
  useJoin,
  useLocalMicrophoneTrack,
  useLocalCameraTrack,
  usePublish,
  useRemoteUsers,
  AgoraRTCProvider,
} from "agora-rtc-react";
import AgoraRTC             from "agora-rtc-react";
import { useState }         from "react";
import { useSocket }        from "../contexts/SocketContext";
import { useAutoJoinRoom }  from "../hooks/useAutoJoinRoom";

export const HostBroadcast = () => {
  const client = AgoraRTC.createClient({
    mode:  'live',
    codec: 'vp8',
    role:  'host' // 配信者として設定
  });
  
  return (
    <AgoraRTCProvider client={ client }>
      <HostBasics/>
    </AgoraRTCProvider>
  );
}

const HostBasics = () => {
  const [calling, setCalling] = useState(false);
  const [roomId] = useState(1);
  const [channel, setChannel] = useState<string>("");
  const [appId, setAppId] = useState<string>("");
  const [token, setToken] = useState<string>("");
  const [agoraUserId, setAgoraUserId] = useState<number>(0);
  const [micOn, setMic] = useState(true);
  const [cameraOn, setCamera] = useState(true);
  
  // システムのユーザー情報（デモなので固定）
  const [systemUserId] = useState(1);
  const [systemUsername] = useState("配信者1");
  
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

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);

  // Agora接続（サーバーから取得したchannel、agoraUserIdを使用）
  useJoin({appid: appId, channel: channel, token: token ? token : null, uid: agoraUserId}, calling && appId !== "" && agoraUserId !== 0);
  usePublish([localMicrophoneTrack, localCameraTrack]);

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
        <h1>配信者 (Host)</h1>
        <div>
          <div>
            <LocalUser
              audioTrack={localMicrophoneTrack}
              cameraOn={cameraOn}
              micOn={micOn}
              playAudio={false}
              videoTrack={localCameraTrack}
              style={{width: '640px', height: '360px'}}
            >
              <samp>あなたの映像 (配信中)</samp>
            </LocalUser>
          </div>
          <div>
            <h3>視聴者一覧 ({remoteUsers.length}人)</h3>
            {remoteUsers.map((user) => (
              <div key={user.uid}>
                <RemoteUser user={user} style={{width: '640px', height: '360px'}}>
                  <samp>視聴者 {user.uid}</samp>
                </RemoteUser>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div>
        <button onClick={() => setMic(a => !a)}>
          {micOn ? "マイク無効" : "マイク有効" }
        </button>
        <button onClick={() => setCamera(a => !a)}>
          {cameraOn ? "カメラ無効" : "カメラ有効" }
        </button>
        <button onClick={() => {
          setCalling(false);
          disconnect();
        }}>
          配信終了
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

export default HostBroadcast;