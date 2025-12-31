import { Avatar }                                   from 'primereact/avatar'
import { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import { FaStar, FaUserFriends }                    from 'react-icons/fa'

import {
  AgoraRTCProvider,
  LocalUser,
  RemoteUser,
  useJoin,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
  useRTCClient,
  useClientEvent,
}                                 from 'agora-rtc-react'
import AgoraRTC                   from 'agora-rtc-react'
import { RxExit }                 from 'react-icons/rx'
import { useNavigate, useParams } from 'react-router-dom'
import { ButtonBid }              from '../components/ui/ButtonBid.tsx'
import { ChatMessage }            from '../components/ui/ChatMessage.tsx'
import { ProductThumbnail }       from '../components/ui/ProductThumbnail.tsx'
import { useCountdown }           from '../hooks/useCountdown.ts'
import styles                     from './RoomDetail.module.scss'
import SuccessfulBidder           from './SuccessfulBidder.tsx'
import { useAutoJoinRoom }        from '../hooks/useAutoJoinRoom'
import { useAuth }                from '../contexts/AuthContext'
import { useSocket }              from '../contexts/SocketContext'
import { useSocketEvent }         from '../hooks/useSocketEvent'
import { roomDetail }             from '../data/demo'
import type { 
  BidEvent, 
  BidEntity,
  ChatEvent,
  UserEntity,
  RoomEntity,
  SessionEntity,
  JoinRoomResponseData,
} from '@types'
import { dummyRooms } from '../data/mock-data'

const ROOM_ID = 1;
var itemID = 1;
function getItemID() {
  itemID++;
  return itemID % 3 + 1;
}

function checkIsHost(roomId: number, user: UserEntity): boolean {
  const roomEntity: RoomEntity | undefined = dummyRooms.get(roomId)
  if (!roomEntity) {
    throw new Error(`RoomEntity not found for roomId: ${roomId}`)
  }
  if (!user) {
    throw new Error('User not found')
  }
  return roomEntity.organizer.id === user.id
}

export default function RoomDetail() {
  const { user } = useAuth()
  // const params   = useParams()
  // const roomId = Number(params.roomId)
  const roomId = ROOM_ID // TODO: 固定.
  const roomEntity: RoomEntity | undefined = dummyRooms.get(roomId)
  if (!roomEntity) {
    throw new Error(`RoomEntity not found for roomId: ${roomId}`)
  }
  if (!user) {
    throw new Error('User not found')
  }

  const isHost = checkIsHost(roomId, user)
  // const isHost = user?.id === dummyRooms.get(roomId)?.organizer.id

  // AuthContextからisHostを取得してAgoraクライアントを動的に作成
  const agoraClient = useMemo(() => {
    return AgoraRTC.createClient({
      mode:  'live',
      codec: 'vp8',
      role:  isHost ? 'host' : 'audience'
    })
  }, [isHost])

  return (
    <AgoraRTCProvider client={agoraClient}>
      <RoomDetailContent />
    </AgoraRTCProvider>
  )
}

function RoomDetailContent() {
  const { user } = useAuth()
  // const roomId = roomEntity.id
  // const isHost = checkIsHost(roomEntity, user)
  const detail   = roomDetail
  // const roomId   = ROOM_ID
  const navigate = useNavigate()
  
  const { sendChat, socket, leaveRoom } = useSocket()

  const [stage, setStage] = useState('room-1')
  
  // Agora connection state
  const [calling, setCalling] = useState(false)
  const [channel, setChannel] = useState<string>('')
  const [appId, setAppId] = useState<string>('')
  const [token, setToken] = useState<string>('')
  const [agoraUserId, setAgoraUserId] = useState<number>(0)
  

  const roomId = ROOM_ID // TODO: 固定.
  const isHost = checkIsHost(roomId, user)

  // Host用のトラック（配信者の場合のみ使用）
  const [micOn, setMicOn] = useState(true)
  const [cameraOn, setCameraOn] = useState(true)
  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn && isHost)
  const { localCameraTrack } = useLocalCameraTrack(cameraOn && isHost)
  
  // 自動参加フック（AuthContextのuser情報を使用）
  const { hasJoined, roomData } = useAutoJoinRoom({
    userId:   user.id,
    username: user.username,
    roomId:   roomId,
    onSuccess: (agoraToken, agoraAppId, agoraChannel, agoraUid) => {
      setToken(agoraToken)
      setAppId(agoraAppId)
      setChannel(agoraChannel)
      setAgoraUserId(agoraUid)
      setCalling(true)
    },
    onError: (err) => {
      console.error('Agora接続エラー:', err)
    },
    enabled: !!user // userが存在する場合のみ有効化
  })
  
  // roomData.currentSessionの変化を監視してstageを変更
  useEffect(() => {
    if (roomData?.currentSession) {
      setStage('room-2')
    } else if (stage === 'room-2') {
      // セッション終了時はroom-3へ遷移
      setStage('room-3')
    }
  }, [roomData?.currentSession, stage])
  
  // Agora接続
  useJoin(
    { appid: appId, channel: channel, token: token || null, uid: agoraUserId },
    calling && appId !== '' && agoraUserId !== 0
  )
  
  // クライアントインスタンスを取得
  const agoraClient = useRTCClient()
  
  // チャンネル参加後に setClientRole で audienceLevel を set. (only audience)
  useClientEvent(agoraClient, "connection-state-change", (curState, revState, reason) => {
    console.log('Agora connection state changed:', curState, 'from:', revState, 'reason:', reason)
    if (curState === "CONNECTED") {
      if (isHost) {
        agoraClient.setClientRole("host")
          .then(() => {
            console.log(`Client role set to host`)
          })
          .catch((err) => {
            console.error(`Failed to set client role to host:`, err)
          })
      } else {
        const audienceLevel = 1; // AudienceLatencyLevelType.AUDIENCE_LEVEL_LOW_LATENCY: import できない.
        agoraClient.setClientRole("audience", { level: audienceLevel })
          .then(() => {
            console.log(`Client role set to audience with level ${audienceLevel}`)
          })
          .catch((err) => {
            console.error(`Failed to set client role to audience with level ${audienceLevel}:`, err)
          })
      }
    }
  })
  
  // Host（配信者）の場合はトラックを公開
  usePublish(isHost ? [localMicrophoneTrack, localCameraTrack] : [])
  
  const remoteUsers = useRemoteUsers()

  const handleNavigation = async () => {
    // ルームから退出
    await leaveRoom();
    navigate('/rooms');
  }

  const [value, setValue] = useState('')
  const [messages, setMessages] = useState<any[]>([])
  const chatBoxRef = useRef<HTMLDivElement>(null)
  const inputRef   = useRef<HTMLInputElement>(null)

  // チャットボックスの自動スクロール
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTo({
        top:      chatBoxRef.current.scrollHeight,
        behavior: 'smooth'
      })
    }
  }, [messages])

  // サーバーからのon_chatイベントを受信
  useSocketEvent<ChatEvent>('on_chat', (event) => {
    console.log('on_chat received:', event)
    setMessages(prev => {
      const newMsg = {
        name: event.user.username,
        text: event.message,
        avatar: event.user.image
      }
      const newMsgs = [...prev, newMsg]
      return newMsgs.slice(-30) // 最新30件のみ保持
    })
  }, [detail.host.avatar])

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && value.trim()) {
      sendChat(roomId, value)
      setValue('')
      if (inputRef.current) {
        inputRef.current.blur()
      }
    }
  }, [value, sendChat])

  return (
    <div className = {styles.container}>
      {/* 背景に配信映像を配置 */}
      <div className={styles.videoBackground}>
        {isHost ? (
          // 配信者の場合：自分の映像を背景に表示
          localCameraTrack && (
            <LocalUser
              audioTrack={localMicrophoneTrack}
              videoTrack={localCameraTrack}
              cameraOn={cameraOn}
              micOn={false}
              playAudio={false}
              cover="/images/black.png"
            />
          )
        ) : (
          // 視聴者の場合：配信者の映像を背景に表示
          remoteUsers.length > 0 && (
            <RemoteUser 
              user={remoteUsers[0]} 
              cover="/images/black.png"
            />
          )
        )}
      </div>
      
      <div className = {styles.header}>
        <div className = {styles.host}>
          <Avatar
            image     = {roomData?.organizer.image}
            imageAlt  = {roomData?.organizer.username}
            shape     = "circle"
            size      = "large"
          />
          <div className = {styles.hostInfo}>
            <div className = {styles.hostName}>
            {roomData?.organizer.username}
            </div>
            <FaStar color = {'#ff0000'}/>
            <span className = "number">
              4.8
            </span>
            &nbsp; &nbsp; &nbsp;
            <span className = {styles.ranking}>
              Bronze
            </span>
          </div>
          <div className = {styles.tagsWrapper}>
            <div className = {styles.tags}>
              <FaStar/>お気に入り
            </div>
          </div>
        </div>
        <div className = {styles.actions}>
          <div className = {styles.traffic}>
            <div className = {styles.iconWrapper}>
              <FaUserFriends
                color = {'#ff0000'}
                size  = {36}
              />
            </div>
            <span className = {styles.participantCount}>
              {roomData?.numParticipants ?? 0}
            </span>
          </div>
          <RxExit
            className = {styles.exitIcon}
            onClick   = {handleNavigation}
            size      = {40}
          />
        </div>
      </div>

      <div
        className = {styles.chatBox}
        ref = {chatBoxRef}
      >
        {messages.map((m, i) => (
          <ChatMessage
            key       = {i}
            avatarSrc = {m.avatar}
            message   = {m.text}
            name      = {m.name}/>
        ))}
      </div>
      <div style = {{padding: '0 12px', position: 'relative', zIndex: 2}}>
        <input
          ref         = {inputRef}
          className   = {styles.chatInput}
          type        = "text"
          value       = {value}
          onChange    = {e => setValue(e.target.value)}
          onKeyDown   = {handleKeyDown}
          placeholder = "Say something..."/>
      </div>

      {(() => {
        switch (stage) {
          default:
          case 'room-1':
            return <Room1 roomData={roomData} />
          case 'room-2':
            return roomData?.currentSession ? (
              <Room2 sessionEntity={roomData.currentSession} />
            ) : (
              <div className="room-detail">セッションデータを読み込み中...</div>
            )
          case 'room-3':
            return <Room3 roomData={roomData} onBackToRoom1={() => setStage('room-1')} />
        }
      })()}
    </div>
  )
}

function Room1({roomData}: {
  roomData: JoinRoomResponseData | null
}) {
  const detail                  = roomDetail
  const roomId                  = ROOM_ID
  const { user } = useAuth()
  const isHost = checkIsHost(roomId, user)
  const { startSession, socket } = useSocket()

  const [isStarting, setIsStarting] = useState(false)

  return (
    <>
      {roomData?.previousSession && (
        <div className={styles.productWrapper}>
          <ProductThumbnail
            imageSrc  = {roomData.previousSession.item.image}
            alt       = {roomData.previousSession.item.name}
            title     = {roomData.previousSession.item.name}
            subtitle  = {roomData.previousSession.item.description}
            price     = {roomData.previousSession.item.startingPrice}
            host      = {roomData.previousSession.winner || undefined}
          ></ProductThumbnail>
        </div>
      )}

      {isHost && (
        <div className = {styles.startAnewSessionWrapper}>
          <button
            onClick = {() => {
              // サーバーにstart_sessionパケットを送信
              startSession(roomId, getItemID())
            }}
            disabled = {isStarting}
            className = {styles.startAnewSession}
            style = {{opacity: isStarting ? 0.5 : 1, cursor: isStarting ? 'not-allowed' : 'pointer'}}
          >
            {isStarting ? 'Starting...' : 'Start A New Session'}
          </button>
        </div>
      )}
    </>
  )
}

function Room2({sessionEntity}: {
  sessionEntity: SessionEntity
}) {
  const roomId = ROOM_ID // TODO: 固定.
  const { user } = useAuth()
  const isHost = checkIsHost(roomId, user)
  const { placeBid, socket } = useSocket()
  
  // sessionData から duration と starting price を取得
  const durationMs = sessionEntity.item.sessionDuration * 1000
  
  const timer       = useCountdown({
    durationMs,
    autoStart:  true
  })
  const navigate    = useNavigate()
  const {isExpired} = timer

  const [currentPrice, setCurrentPrice] = useState(sessionEntity.currentPrice)
  const [isPriceAnimating, setIsPriceAnimating] = useState(false)
  const [highestBidder, setHighestBidder] = useState<BidEntity | undefined>(undefined)

  // マウント時に一度だけログ出力
  useEffect(() => {
    console.log('Room2 mounted with sessionData:', sessionEntity)
    console.log('Duration:', durationMs, 'ms')
    console.log('Starting price:', sessionEntity.currentPrice)
  }, []) // 空の依存配列で初回のみ実行

  // on_bid イベントを待つ
  useSocketEvent<BidEvent>('on_bid', (event) => {
    console.log('on_bid received:', event)
    if (event.sessionId === sessionEntity.id) {
      setCurrentPrice(event.bid.amount)
      // 前のアニメーションをキャンセルして新しいアニメーションを開始
      setIsPriceAnimating(false)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsPriceAnimating(true)
        })
      })
      
      // 最高落札者を表示（1秒後に非表示）
      // TODO: 連続で入札があったとき.
      setHighestBidder(event.bid)
      setTimeout(() => {
        setHighestBidder(undefined)
      }, 1000)
    }
  }, [sessionEntity.id])

  // 価格変更時のアニメーション処理
  useEffect(() => {
    if (isPriceAnimating) {
      // アニメーション時間後に状態をリセット
      const timer = setTimeout(() => {
        setIsPriceAnimating(false)
      }, 500) // 0.5秒後にアニメーション状態を解除

      return () => clearTimeout(timer)
    }
  }, [isPriceAnimating])

  // TODO: session中に server.ts が落ちたら?
  // useEffect(() => {
  //   if (isExpired) {
  //     navigate('/success', {
  //       state: {
  //         price: currentPrice
  //       }
  //     })
  //   }
  // }, [currentPrice, isExpired, navigate])

  const handleOnClick = function () {
    const newPrice = currentPrice + 1000
    placeBid(sessionEntity.id, newPrice)
  }

  return (
    <section>
      <div className = {styles.typeBidContainer}>
        <div className = {styles.timeLeft}>
          <label className = {styles.label}>TimeLeft :</label>
          <div className = {styles.timeNum}>{timer.pretty}</div>
        </div>
        <div className = {styles.currentPrice}>
          <label className = {styles.label}>Current Price :</label>
          <div
            className = {`${styles.price} ${isPriceAnimating ? styles.priceFlash : ''}`}>
              {(currentPrice).toLocaleString('en-US')}
            </div>
        </div>
      </div>
      <div className={styles.productWrapper}>
        <ProductThumbnail
          imageSrc  = {sessionEntity.item.image}
          alt       = {sessionEntity.item.name}
          title     = {sessionEntity.item.name}
          subtitle  = {sessionEntity.item.description}
          price     = {sessionEntity.currentPrice}
          highestBidder = {highestBidder}>
          {!isHost && (
            <ButtonBid
              price     = {1000}
              beat      = {{ price: currentPrice + 1000 }}
              onConfirm = {handleOnClick}
            />
          )}
        </ProductThumbnail>
      </div>
    </section>
  )
}

function Room3({roomData, onBackToRoom1}: { 
  roomData: JoinRoomResponseData | null,
  onBackToRoom1: () => void 
}) {
  // 5秒後にRoom1に戻る
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log('5秒経過、Room1に戻ります')
      onBackToRoom1()
    }, 5000)

    return () => clearTimeout(timer)
  }, [onBackToRoom1])

  return (
    <>
      {true && (
        <div
          style = {{
            position:       'fixed',
            top:            0,
            left:           0,
            width:          '100vw',
            height:         '100vh',
            minHeight:      '100vh',
            background:     'rgba(0,0,0,0.0)',
            zIndex:         99999,
            display:        'flex',
            alignItems:     'center',
            justifyContent: 'center',
            overflow:       'hidden'
          }}>
          <SuccessfulBidder sessionEntity={roomData?.previousSession} organizer={roomData?.organizer} />
        </div>
      )}
    </>
  )
}

// function _Room3({onSuccess}: { onSuccess?: () => void }) {
//   const timer                           = useCountdown({
//     durationMs: 4_000,
//     autoStart:  true
//   })
//   const {isExpired}                     = timer
//   const detail                          = roomDetail
//   const [currentPrice, setCurrentPrice] = useState(2500)
//   const [showSuccess, setShowSuccess]   = useState(false)


//   useEffect(() => {
//     if (isExpired) {
//       setShowSuccess(true)
//       if (onSuccess) onSuccess()
//     }
//   }, [isExpired, onSuccess])


//   return (
//     <>
//       {showSuccess && (
//         <div
//           style = {{
//             position:       'fixed',
//             top:            0,
//             left:           0,
//             width:          '100vw',
//             height:         '100vh',
//             minHeight:      '100vh',
//             background:     'rgba(0,0,0,0.7)',
//             zIndex:         99999,
//             display:        'flex',
//             alignItems:     'center',
//             justifyContent: 'center',
//             overflow:       'scroll'
//           }}>
//           <SuccessfulBidder />
//         </div>
//       )}
//       <div
//         className = {styles.typeBidContainer}
//         style = {{marginTop: 'unset'}}
//       >
//         <div className = {styles.timeLeft}>
//           <label className = {styles.label}>TimeLeft :</label>
//           <div className = {styles.timeNum}>{timer.pretty}</div>
//         </div>
//         <div className = {styles.currentPrice}>
//           <div className = {styles.priceWraper}>
//             <div className = {styles.flashMessage}>最高落札者が更新されました
//             </div>
//           </div>
//           <div
//             className = {styles.price}
//             style = {{color: '#ff0000'}}
//           >
//             <span className = {styles.priceCurrency}>¥</span>{(currentPrice).toLocaleString('en-US')}
//           </div>
//         </div>
//       </div>

//       <div className = {styles.otherHost}>
//         <div className = {styles.host}>
//           <Avatar
//             image = {detail.host.avatar}
//             imageAlt = {detail.host.name}
//             shape = "circle"
//             size = "large"
//           />
//           <div className = {styles.hostInfo}>
//             <div className = {styles.hostName}>SneakerKing088</div>
//             <FaStar color = {'#ff0000'}/> <span className = "number">8.4</span>
//             &nbsp; &nbsp; &nbsp;
//             <span className = {styles.ranking}>Platinum</span>
//           </div>
//           <div className = {styles.tagsWrapper}>
//             <div className = {styles.tags}>最高落札者</div>
//           </div>
//         </div>
//       </div>

//       <div className = {styles.actionButtons}>
//         <div className = {styles.buttonWrapper}>
//           <button className = {styles.button}>
//             Custom
//           </button>
//         </div>
//         <ButtonBid
//           price = {1000}
//           beat = {{price: currentPrice + 1000}}
//           onConfirm = {() => setCurrentPrice(currentPrice + 1000)}
//         />
//       </div>
//     </>
//   )
// }