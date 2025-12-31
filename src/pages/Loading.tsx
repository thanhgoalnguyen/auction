import styles from './Loading.module.scss'

type Props = {
  /** Tagline hiển thị phía trên ô spinner */
  tagline?: string
  /** Tùy biến class ngoài cùng (nếu cần) */
  className?: string
  withoutBg?: boolean
}

export default function LoadingScreen({
  tagline = '今、この瞬間にしか手に入らない感動を・・・',
  className,
  withoutBg = false
}: Props) {
  return (
    <section
      className={ `${ styles.wrapper } ${ className ?? '' }` }
      aria-busy="true"
      aria-live="polite"
    >
      <div
        className={ styles.bg }
        style={ { display: withoutBg ? 'none' : 'block' } }
        role="img"
        aria-label="Loading background"
      />
      
      <div className={ styles.scrim }/>
      
      <div className={ styles.center }>
        <p className={ styles.tagline }>{ tagline }</p>
        
        <div
          className={ styles.loaderCard }
          aria-hidden="true"
        >
          <div className={ styles.spinner }>
            <img
              src="/images/spinner.gif"
              alt="Loading spinner"
            />
          </div>
        </div>
        
        <p className={ styles.loadingText }>Now Loading . . .</p>
      </div>
    
    </section>
  )
}
