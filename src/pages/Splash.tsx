import { useEffect, useState } from 'react'
import { useNavigate }         from 'react-router-dom'
import { useAuth }             from '../contexts/AuthContext'
import styles                  from './Splash.module.scss'
import LoadingScreen           from './Loading.tsx'

export default function Splash() {
  const navigate = useNavigate()
  const { isAuthenticated } = useAuth()
  
  const [ stage, setStage ] = useState<'splash' | 'loading'>('splash')
  
  useEffect(() => {
    const splashTimer = setTimeout(() => setStage('loading'), 1000)
    
    const loadingTimer = setTimeout(() => {
      // ログイン状態をチェック
      if (isAuthenticated) {
        navigate('/rooms', { replace: true })
      } else {
        navigate('/login', { replace: true })
      }
    }, 2000 + 3000)
    
    return () => {
      clearTimeout(splashTimer)
      clearTimeout(loadingTimer)
    }
  }, [ navigate, isAuthenticated ])
  
  if (stage === 'splash')
    return (
      <div className={ styles.splash }>
        <img
          src="/images/splash.jpeg"
          alt="Splash"
        />
      </div>
    )
  return (
    <LoadingScreen/>
  )
}
