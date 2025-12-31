import type { PropsWithChildren } from 'react'
import styles                     from './AppShell.module.scss'

export function AppShell({ children }: PropsWithChildren) {
  return (
    <div className="app-shell-wrapper">
      <div className="app-shell">
        <div className={ styles.main }>{ children }</div>
      </div>
    </div>
  )
}
