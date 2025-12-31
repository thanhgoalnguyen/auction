import type { PropsWithChildren, ReactNode } from 'react'
import { cn }                                from '../../utils/cn'
import styles                                from './Card.module.scss'

type CardProps = {
  title?: ReactNode
  subtitle?: ReactNode
  padding?: 'md' | 'lg' | 'none'
  bleed?: boolean
  className?: string
}

export function Card({
  children,
  title,
  subtitle,
  padding = 'md',
  bleed,
  className
}: PropsWithChildren<CardProps>) {
  return (
    <section
      className={ cn(styles.card, styles[padding], bleed && styles.bleed, className) }>
      { (title || subtitle) && (
        <header className={ styles.header }>
          { title && <h3 className={ styles.title }>{ title }</h3> }
          { subtitle && <p className={ styles.subtitle }>{ subtitle }</p> }
        </header>
      ) }
      <div className={ styles.body }>{ children }</div>
    </section>
  )
}
