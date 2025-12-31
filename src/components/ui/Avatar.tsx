import type { PropsWithChildren } from 'react'
import { cn }                     from '../../utils/cn'
import styles                     from './Avatar.module.scss'

type AvatarProps = {
  size?: 'sm' | 'md' | 'lg'
  src?: string
  alt?: string
  className?: string
}

export function Avatar({ children, size = 'md', src, alt, className }: PropsWithChildren<AvatarProps>) {
  if (src) {
    return <img src={src} alt={alt} className={cn(styles.avatar, styles[size], className)} />
  }
  return (
    <span className={cn(styles.avatar, styles[size], className)} aria-hidden={!alt}>
      {children}
    </span>
  )
}
