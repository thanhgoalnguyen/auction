import { Avatar }                 from 'primereact/avatar'
import type { PropsWithChildren } from 'react'
import styles                     from './ChatMessage.module.scss'

type ChatMessageProps = {
  avatarSrc?: string
  name?: string
  message?: string
}

export function ChatMessage({
  avatarSrc,
  message,
  name
}: PropsWithChildren<ChatMessageProps>) {
  return (
    <div className={ styles.messageContainer }>
      <Avatar
        image={ avatarSrc }
        imageAlt={ name }
        shape="circle"
        size="normal"
      />
      <div className={ styles.info }>
        <div className={ styles.infoName }>{ name }</div>
        <div className="number">→&nbsp;&nbsp;{ message }</div>
      </div>
    </div>
  )
}
