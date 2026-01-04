import type { InputHTMLAttributes } from 'react'
import { cn }                       from '../../utils/cn'
import styles                       from './TextField.module.scss'

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  helperText?: string
}

export function TextField({
  label,
  helperText,
  className,
  ...props
}: TextFieldProps) {
  return (
    <label className={ cn(styles.wrapper, className) }>
      { label && <span className={ styles.label }>{ label }</span> }
      <input
        className={ styles.input }
        { ...props }
      />
      { helperText && <span className={ styles.helper }>{ helperText }</span> }
    </label>
  )
}
