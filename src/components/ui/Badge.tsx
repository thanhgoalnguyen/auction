import type { PropsWithChildren } from 'react'
import { cn }                     from '../../utils/cn'
import styles                     from './Badge.module.scss'

type BadgeTone = 'accent' | 'success' | 'warning' | 'neutral'

type BadgeProps = {
  tone?: BadgeTone
  soft?: boolean
  className?: string
}

export function Badge({
  children,
  tone = 'accent',
  soft = true,
  className
}: PropsWithChildren<BadgeProps>) {
  return <span
    className={ cn(styles.badge, styles[tone], soft && styles.soft, className) }>{ children }</span>
}
