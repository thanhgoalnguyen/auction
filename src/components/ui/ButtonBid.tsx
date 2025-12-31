import * as React                                             from 'react'
import  { type ButtonHTMLAttributes, type PropsWithChildren } from 'react'
import { useCallback, useEffect, useRef, useState }           from 'react'
import { FaArrowRight }                                       from 'react-icons/fa6'
import styles                                                 from './ButtonBid.module.scss'

type ButtonProps = {
  price: number
  beat?: { price: number }
  confirmThreshold?: number
  onConfirm?: () => void
  onCancel?: () => void
  disabled?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

export function ButtonBid({
                            price,
                            beat,
                            confirmThreshold = 1,
                            onConfirm,
                            onCancel,
                            disabled,
                            ...rest
                          }: PropsWithChildren<ButtonProps>) {
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const btnRef     = useRef<HTMLButtonElement | null>(null)

  const [dragging, setDragging]   = useState(false)
  const [percent, setPercent]     = useState(0)
  const [animating, setAnimating] = useState(false)

  const maxPx   = useRef(0)
  const startX  = useRef(0)
  const startPx = useRef(0)

  const computeMaxPx = useCallback(() => {
    const wrap = wrapperRef.current
    const btn  = btnRef.current
    if (!wrap || !btn) return
    maxPx.current = Math.max(0, wrap.clientWidth - btn.clientWidth - 4)
  }, [])

  useEffect(() => {
    computeMaxPx()
    const onResize = () => computeMaxPx()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [computeMaxPx])

  const pxFromPercent = (p: number) => p * maxPx.current

  const setTransition = (on: boolean) => {
    if (!btnRef.current) return
    btnRef.current.style.transition = on ? 'transform 220ms ease' : 'none'
  }

  const settle = (toPercent: number, cb?: () => void) => {
    setAnimating(true)
    setTransition(true)
    setPercent(toPercent)
    window.setTimeout(() => {
      setAnimating(false)
      setTransition(false)
      cb?.()
    }, 0)
  }

  // --- Pointer handlers ---
  const onPointerDown: React.PointerEventHandler = (e) => {
    if (disabled || animating) return
    (e.target as Element).setPointerCapture?.(e.pointerId)
    setDragging(true)
    setTransition(false)
    startX.current  = e.clientX
    startPx.current = pxFromPercent(percent)
  }

  const onPointerMove: React.PointerEventHandler = (e) => {
    if (!dragging) return
    const delta       = e.clientX - startX.current
    const nextPx      = Math.min(Math.max(0, startPx.current + delta), maxPx.current)
    const nextPercent = maxPx.current === 0 ? 0 : nextPx / maxPx.current
    setPercent(nextPercent)
  }

  const finish = () => {
    setDragging(false)
    const isConfirm = percent >= confirmThreshold
    if (isConfirm) {
      settle(1, () => {
        onConfirm?.()
        window.setTimeout(() => settle(0), 0)
      })
    } else {
      settle(0, () => onCancel?.())
    }
  }

  const onPointerUp: React.PointerEventHandler     = () => {
    if (!dragging) return
    finish()
  }
  const onPointerCancel: React.PointerEventHandler = () => {
    if (!dragging) return
    finish()
  }

  const tx = `translateX(${pxFromPercent(percent)}px)`

  return (
    <div
      className = {styles.buttonWrapper}
      ref = {wrapperRef}
      aria-disabled = {disabled}
    >
      <button
        ref = {btnRef}
        className = {styles.button}
        style = {{transform: tx}}
        onPointerDown = {onPointerDown}
        onPointerMove = {onPointerMove}
        onPointerUp = {onPointerUp}
        onPointerCancel = {onPointerCancel}
        disabled = {disabled}
        {...rest}
      >
        <div className={styles.buttonLabel}>
          <div className = {styles.buttonText}>
          <div
            style = {{
              display:    'flex',
              alignItems: 'baseline'
            }}>Bid
          </div>
          <div className = {styles.price}>{price.toLocaleString('en-US')}</div>
        </div>

        {beat ? (
          <div className = {styles.buttonText}>
            <div style={{ fontSize: '9px' }}>Beat.</div>
            <div className = {styles.beatPrice}>
              {(beat?.price ?? 4000).toLocaleString('en-US')}
            </div>
          </div>
        ) : null}
        </div>
        <div className={styles.buttonIcon}>
          <FaArrowRight
            className = {styles.rightIcon}
            size = {20}
          />
        </div>
      </button>

    </div>
  )
}
