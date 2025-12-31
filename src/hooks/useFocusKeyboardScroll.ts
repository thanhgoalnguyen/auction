import { type RefObject, useEffect } from 'react'

type Opts = {
  /** container cuộn; bỏ trống = cuộn toàn trang */
  root?: RefObject<HTMLElement | null>
  /** phần tử fixed ở đáy (bottom bar) để tự trừ chiều cao */
  fixedBottomRef?: RefObject<HTMLElement | null>
  /** đệm dưới thêm (px) */
  extraBottom?: number           // mặc định 12
  /** thời gian quan sát tối đa khi mở bàn phím (ms) */
  trackMs?: number               // mặc định 700
}

export function useFocusKeyboardScroll(
  targetRef: RefObject<HTMLElement | null>,
  opts: Opts = {}
) {
  useEffect(() => {
    const input = targetRef.current
    if (!input) return

    const rootEl = opts.root?.current ?? null
    const isWindow = !rootEl
    const extra = opts.extraBottom ?? 12
    const trackMs = opts.trackMs ?? 700

    const vv = window.visualViewport
    const getVVH = () => vv?.height ?? window.innerHeight
    const getVVTop = () => vv?.offsetTop ?? 0

    const getBottomBarH = () => {
      const el = opts.fixedBottomRef?.current
      return el ? el.getBoundingClientRect().height : 0
    }

    // Đợi viewport “ổn định”: 2 khung hình liên tiếp chênh lệch < 1px
    const waitForStableViewport = async (timeoutMs: number) => {
      const deadline = performance.now() + timeoutMs
      let prev = getVVH()
      return new Promise<void>((resolve) => {
        const tick = () => {
          const now = performance.now()
          const curr = getVVH()
          if (Math.abs(curr - prev) < 1 || now > deadline) {
            resolve()
            return
          }
          prev = curr
          requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      })
    }

    const alignOnce = () => {
      const rect = input.getBoundingClientRect()
      const bottomBarH = getBottomBarH()

      if (isWindow) {
        const visibleTop = getVVTop()
        const visibleBottom = visibleTop + getVVH() - bottomBarH - extra

        if (rect.bottom > visibleBottom || rect.top < visibleTop) {
          const current = window.pageYOffset
          const needed = current + (rect.bottom - visibleBottom)
          const target = Math.max(0, needed)

          // nếu input “vọt” lên trên:
          if (rect.top < visibleTop) {
            const neededTop = current + (rect.top - visibleTop) - 8
            // chọn phương án điều chỉnh ít dịch chuyển hơn
            const d1 = Math.abs(target - current)
            const d2 = Math.abs(neededTop - current)
            window.scrollTo({ top: d1 < d2 ? target : Math.max(0, neededTop), behavior: 'auto' })
          } else {
            window.scrollTo({ top: target, behavior: 'auto' })
          }
        }
      } else {
        const cRect = rootEl!.getBoundingClientRect()
        const visibleTop = cRect.top
        const visibleBottom = cRect.bottom - bottomBarH - extra

        if (rect.bottom > visibleBottom || rect.top < visibleTop) {
          const current = rootEl!.scrollTop
          const rectBottomInScroll = rect.bottom - cRect.top + current
          const target = Math.max(
            0,
            current + (rectBottomInScroll - (current + cRect.height - bottomBarH - extra))
          )

          // Nếu input vọt lên phía trên:
          if (rect.top < visibleTop) {
            const rectTopInScroll = rect.top - cRect.top + current
            const targetTop = Math.max(0, rectTopInScroll - 8)
            const d1 = Math.abs(target - current)
            const d2 = Math.abs(targetTop - current)
            rootEl!.scrollTo({ top: d1 < d2 ? target : targetTop, behavior: 'auto' })
          } else {
            rootEl!.scrollTo({ top: target, behavior: 'auto' })
          }
        }
      }
    }

    let cleanup: (() => void) | undefined
    let timer: number | null = null
    let running = false

    const onFocus = async () => {
      if (running) return
      running = true

      // Chờ bàn phím/viewport ổn định rồi mới align 1 lần
      await waitForStableViewport(trackMs)
      alignOnce()

      // Sau đó nghe thêm đúng 1 lần resize lớn (đổi chiều, đổi layout) rồi dừng
      const onVV = () => { alignOnce() }
      const onRz = () => { alignOnce() }

      vv?.addEventListener('resize', onVV, { once: true })
      window.addEventListener('resize', onRz, { once: true })

      timer = window.setTimeout(() => {
        vv?.removeEventListener('resize', onVV)
        window.removeEventListener('resize', onRz)
        running = false
      }, trackMs) as unknown as number

      cleanup = () => {
        vv?.removeEventListener('resize', onVV)
        window.removeEventListener('resize', onRz)
        if (timer) window.clearTimeout(timer)
        timer = null
        running = false
      }
    }

    const onBlur = () => { cleanup?.() }

    input.addEventListener('focus', onFocus)
    input.addEventListener('blur', onBlur)
    return () => {
      input.removeEventListener('focus', onFocus)
      input.removeEventListener('blur', onBlur)
      cleanup?.()
    }
  }, [targetRef, opts.root, opts.fixedBottomRef, opts.extraBottom, opts.trackMs])
}
