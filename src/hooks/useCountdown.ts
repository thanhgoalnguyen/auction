import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export type UseCountdownOptions = {
  durationMs?: number
  autoStart?: boolean
  intervalMs?: number
  onComplete?: () => void
}

const pad2 = (n: number) => (n < 10 ? `0${ n }` : `${ n }`)

export function useCountdown({
  durationMs = 120_000,
  autoStart = false,
  intervalMs = 250,
  onComplete
}: UseCountdownOptions = {}) {
  const [ deadline, setDeadline ]         = useState<number | null>(autoStart ? Date.now() + durationMs : null)
  // lưu lại thời lượng còn lại khi pause/reset
  const [ baseDuration, setBaseDuration ] = useState<number>(durationMs)
  const [ now, setNow ]                   = useState(() => Date.now())
  
  useEffect(() => {
    setBaseDuration(durationMs)
    if (autoStart) setDeadline(Date.now() + durationMs)
    
  }, [ durationMs, autoStart ])
  
  // Tick đều, nhưng remaining tính theo (deadline - Date.now()) để tránh drift
  useEffect(() => {
    if (deadline == null) return
    const id = setInterval(() => setNow(Date.now()), intervalMs)
    return () => clearInterval(id)
  }, [ deadline, intervalMs ])
  
  const remainingMs = useMemo(
    () => (deadline == null ? baseDuration : Math.max(0, deadline - now)),
    [ deadline, baseDuration, now ]
  )
  
  const running   = deadline != null && remainingMs > 0
  const isExpired = deadline != null && remainingMs === 0
  
  const doneRef = useRef(false)
  useEffect(() => {
    if (isExpired && !doneRef.current) {
      doneRef.current = true
      onComplete?.()
    }
    if (!isExpired) doneRef.current = false
  }, [ isExpired, onComplete ])
  
  const start = useCallback((ms?: number) => {
    const dur = ms ?? baseDuration
    setBaseDuration(dur)
    setDeadline(Date.now() + dur)
  }, [ baseDuration ])
  
  const pause = useCallback(() => {
    if (deadline != null) {
      setBaseDuration(Math.max(0, deadline - Date.now()))
      setDeadline(null)
    }
  }, [ deadline ])
  
  const resume = useCallback(() => {
    if (deadline == null && baseDuration > 0) {
      setDeadline(Date.now() + baseDuration)
    }
  }, [ deadline, baseDuration ])
  
  const reset = useCallback((ms?: number) => {
    const dur = ms ?? durationMs
    setBaseDuration(dur)
    setDeadline(null)
    setNow(Date.now())
  }, [ durationMs ])
  
  const setDuration = useCallback((ms: number) => {
    setBaseDuration(ms)
  }, [])
  
  const mm     = Math.floor(remainingMs / 60_000)
  const ss     = Math.floor((remainingMs % 60_000) / 1_000)
  const pretty = `${ pad2(mm) }:${ pad2(ss) }`
  
  return {
    // state
    remainingMs,
    mm, ss, pretty,
    running, isExpired,
    // điều khiển
    start, pause, resume, reset, setDuration
  }
}
