import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from 'react'
import {
  cn
}                                                                  from '../../utils/cn'
import styles
  from './Button.module.scss'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'
type ButtonSize = 'md' | 'sm'

type ButtonProps = {
  variant?: ButtonVariant
  size?: ButtonSize
  fullWidth?: boolean
  icon?: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  className,
  variant = 'primary',
  size = 'md',
  fullWidth,
  icon,
  type,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button
      className={ cn(
        styles.button,
        styles[variant],
        styles[size],
        fullWidth && styles.fullWidth,
        icon && styles.withIcon,
        className
      ) }
      type={ type ?? 'button' }
      { ...rest }
    >
      { icon && <span className={ styles.icon }>{ icon }</span> }
      <span>{ children }</span>
    </button>
  )
}

export function ButtonGroup({ children }: PropsWithChildren) {
  return <div className={ styles.group }>{ children }</div>
}
