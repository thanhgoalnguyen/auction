import type { HTMLAttributes, PropsWithChildren } from 'react'
import type { BidEntity, UserEntity }             from '@types'
import styles                                     from './ProductThumbnail.module.scss'
import { Avatar }                                 from 'primereact/avatar'
import { FaStar }                                 from 'react-icons/fa'
import { cn }                                     from '../../utils/cn'

type ProductThumbnailProps = HTMLAttributes<HTMLDivElement> & {
  imageSrc?: string
  alt?: string
  title?: string
  subtitle?: string
  host?: UserEntity
  price: number
  highestBidder?: BidEntity
}

export function ProductThumbnail({
  children,
  imageSrc,
  alt,
  title,
  subtitle,
  host,
  price,
  highestBidder,
  ...rest
}: PropsWithChildren<ProductThumbnailProps>) {
  const overlayClassName = cn(styles.overlay, highestBidder && styles.visible)
  
  return (
    <div
      className={ styles.productThumbnail }
      { ...rest }
    >
      <div className={ styles.productImage }>
        <img
          src={ imageSrc }
          alt={ alt }
        />
      </div>
      
      <div className={ styles.mainContent }>
        <div className={ styles.productName }>
          { title }
          <div className={ styles.productOthers }>
            { subtitle }
          </div>
        </div>
        
        { host && (
          <div className={ styles.hostContainer }>
            <div className={ styles.hostLeft }>
              <Avatar
                image={ host.image }
                size="normal"
                shape="circle"
              />
              <div className={ styles.hostInfo }>
                <div className={ styles.hostName }>
                  { host.username }
                </div>
                <span className="number">
                  <FaStar color={ '#ff0000' }/>
                  {/* TODO: Implement rating system */}
                  4.1
                </span>
              </div>
            </div>
            <div className={`${styles.purchase} number`}>
              <div>purchase</div>
              <div className={ styles.priceNum }>
                { price.toLocaleString('en-US') }
              </div>
            </div>
          </div>
        ) }
        
        { children }
      </div>
      
      <div className={overlayClassName}>
        {highestBidder && (
          <div className = {styles.otherHost}>
            <div className = {styles.host}>
              <Avatar
                image     = {highestBidder.user.image}
                imageAlt  = {highestBidder.user.username}
                shape     = "circle"
                size      = "large"
              />
              <div className = {styles.hostInfo}>
                <div className = {styles.hostName}>
                  {highestBidder.user.username}
                </div>
                <FaStar color = {'#ff0000'}/>
                <span className = "number">
                  8.4
                </span>
                &nbsp; &nbsp; &nbsp;
                <span className = {styles.ranking}>
                  Platinum
                </span>
              </div>
              <div className = {styles.tagsWrapper}>
                <div className = {styles.tags}>
                  最高落札者
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}
