import { useEffect } from 'react'

export function useKeyboardDock() {
  useEffect(() => {
    const root = document.documentElement

    const updateFromVV = () => {
      const vv = window.visualViewport
      const vh = vv ? vv.height : window.innerHeight
      const kb = vv
        ? Math.max(0, window.innerHeight - vv.height - vv.offsetTop)
        : 0

      root.style.setProperty('--kb', `${kb}px`)
      root.style.setProperty('--vvh', `${vh * 0.01}px`)
    }

    updateFromVV()

    const vv       = window.visualViewport
    const onResize = () => updateFromVV()
    const onScroll = () => updateFromVV()
    window.addEventListener('resize', onResize)
    window.addEventListener('orientationchange', onResize)
    vv?.addEventListener('resize', onResize)
    vv?.addEventListener('scroll', onScroll)

    // Virtual Keyboard API (Chrome/Android, Safari mới)
    // @ts-ignore
    const vk = navigator.virtualKeyboard
    let offVK: (() => void) | undefined

    if (vk && 'overlaysContent' in vk) {
      try { /* @ts-ignore */
        vk.overlaysContent = true
      } catch {
      }
      const onGeom = () => {
        // @ts-ignore
        const r  = vk.boundingRect // {top,height,...}
        const kb = Math.max(0, window.innerHeight - r.top)
        root.style.setProperty('--kb', `${kb}px`)
      }
      // @ts-ignore
      vk.addEventListener?.('geometrychange', onGeom)
      offVK = () => { /* @ts-ignore */
        vk.removeEventListener?.('geometrychange', onGeom)
      }
    }

    return () => {
      window.removeEventListener('resize', onResize)
      window.removeEventListener('orientationchange', onResize)
      vv?.removeEventListener('resize', onResize)
      vv?.removeEventListener('scroll', onScroll)
      offVK?.()
    }
  }, [])
}
