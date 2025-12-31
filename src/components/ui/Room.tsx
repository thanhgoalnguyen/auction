import type { PropsWithChildren } from 'react'
import styles                     from './Room.module.scss'
import { Avatar }                 from 'primereact/avatar'
import { FaStar }                 from 'react-icons/fa'

type Props = {
  thumbnailImageSrc?: string
  avatarImageSrc?: string
  title?: string
  subtitle?: string
  price: number
  host: {
    tags?: string[]
    rating?: number
    ranking?: 'silver' | 'gold' | 'platinum' | 'diamond' | 'bronze'
    name?: string
  }
}

export function Room({
  thumbnailImageSrc,
  avatarImageSrc,
  title,
  subtitle,
  host,
  price
}: PropsWithChildren<Props>) {
  return (
    <section className={ styles.sectionRoom }>
      <div className={ styles.roomContainer }>
        <div className={ styles.thumbnailImage }>
          <img
            src={ thumbnailImageSrc }
            alt={ title }
          />
        </div>
        
        <div className={ styles.contentContainer }>
          <div className={ styles.hostInfo }>
            <Avatar
              image={ avatarImageSrc }
              size="xlarge"
              imageAlt={ host.name }
              shape="circle"
            />
            <div className={ styles.name }>{ host.name }</div>
            <div className={ styles.hostRank }>
              <div className={ styles.rating }>
                <FaStar color={ '#ff0000' }/> <span
                  className="number">{ host.rating }</span>
              </div>
              <div className={ styles.ranking }>{ host.ranking }</div>
            </div>
            <div className={ styles.tags }>{ host.tags }</div>
          </div>
          
          <div className={ styles.sectionPrice }>
            <span className={ styles.minBitTxt }>Min bid</span>
            <span
              className={ `${ styles.priceNum } ${ price >= 1000 ? styles['priceNum--high'] : styles['priceNum--low'] }` }>
              { price?.toLocaleString('en-US') }
            </span>
          </div>
        </div>
      </div>
      <div className={ styles.mainContent }>
        <div className={ styles.title }>{ title }</div>
        <div className={ styles.subtitle }>{ subtitle }</div>
      </div>
    </section>
  )
}
