import { Avatar }      from '../components/ui/Avatar.tsx'
import styles          from './SuccessfulBidder.module.scss'
// import { useLocation } from 'react-router-dom'
import type { SessionEntity, UserEntity } from '@types'
import type { FC } from 'react'

export interface SuccessfulBidderProps {
  sessionEntity: SessionEntity;
  organizer: UserEntity;
}

const SuccessfulBidder: FC<SuccessfulBidderProps> = ({ sessionEntity, organizer }) => {
  // const location  = useLocation()
  // const { price } = location.state || {}
  // // propsから取得するか、デフォルト値を使用
  // const displayPrice = finalPrice ?? price ?? 2500
  // const priceStr = Number(displayPrice).toLocaleString('en-US')
  // const numBids = 10; // 入札件数
  
  // // 落札者情報（デモデータをフォールバックとして使用）
  // const winnerImage = winner?.image ?? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHSTQLezhAjhf515pGBYHvboyfK5BjmZ_RZQ&s'
  // const winnerName = winner?.username ?? 'SneakerKing088'
  
  const winnerImage     = sessionEntity.winner?.image ?? ""
  const winnerName      = sessionEntity.winner?.username ?? "入札がありませんでした"
  const numBids         = sessionEntity.bids.length
  const price           = sessionEntity.currentPrice
  const priceStr        = Number(price).toLocaleString('en-US')
  const organizerName   = organizer.username
  const organizerImage  = organizer.image

  return (
    <>
      <div className={ styles.container }>
        <section className={styles.sectionProduct}>
          <div className={ styles.headerSection }>
            <div className={ styles.sellerInfo }>
              <div className="seller-details">
                <span className="seller-name">{organizerName}</span>
                <div className={ styles.rating }>
                  <div style={ { display: 'flex' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 432 408"
                    >
                      <path
                        fill="#FF1D25"
                        d="M213 328L81 408l35-150L0 157l153-13L213 3l60 141l154 13l-117 101l35 150z"
                      />
                    </svg>
                    <span className="rating-score">4.2</span>
                  </div>
                  <div style={ { display: 'flex' }}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="15"
                      height="15"
                      viewBox="0 0 64 64"
                    >
                      <path
                        fill="#ec1c24"
                        d="M64 57.1a6.9 6.9 0 0 1-6.898 6.903H6.892A6.9 6.9 0 0 1-.004 57.1V6.9A6.899 6.899 0 0 1 6.892.001h50.21A6.9 6.9 0 0 1 64 6.9v50.2"
                      />
                      <path
                        fill="#fff"
                        d="M32.579 51.825h-13.13c-1.9 0-3.253-.425-4.062-1.274c-.811-.85-1.218-2.203-1.218-4.061V14.18c0-1.896.413-3.257 1.247-4.087c.83-.83 2.174-1.247 4.03-1.247h13.925c2.052 0 3.83.13 5.337.381c1.503.256 2.852.744 4.04 1.468a10.586 10.586 0 0 1 2.699 2.301c.78.929 1.377 1.956 1.788 3.077c.407 1.125.615 2.313.615 3.564c0 4.3-2.151 7.447-6.452 9.438c5.646 1.802 8.475 5.299 8.475 10.497c0 2.403-.618 4.567-1.85 6.495a11.074 11.074 0 0 1-4.982 4.265c-1.308.547-2.814.933-4.519 1.157c-1.697.227-3.679.337-5.946.337m-9.705-36.442v11.11h7.975c2.169 0 3.845-.201 5.03-.614c1.183-.409 2.083-1.192 2.713-2.345c.487-.822.731-1.739.731-2.758c0-2.167-.771-3.611-2.313-4.324c-1.546-.712-3.9-1.07-7.07-1.07h-7.07zm9.06 17.357h-9.06v12.547h9.352c5.885 0 8.827-2.121 8.827-6.362c0-2.168-.764-3.741-2.288-4.721c-1.525-.975-3.803-1.464-6.83-1.464"
                      />
                    </svg>
                    Blonze
                  </div>
                </div>
              </div>
              <Avatar
                src={organizerImage}
                size="sm"/>
            </div>
          </div>
          <div className={ styles.productSection }>
            <div className={ styles.productImageContainer }>
              <img
                src="https://colehaan.hk/cdn/shop/files/BaseTransform1_3b6c7ac6-d20f-4bd4-af8e-840385ab375c_1200x1200.jpg?v=1747641886"
                alt="Sneakers"
                className={ styles.productImage }/>
            </div>
            
            <div className={ styles.productInfo }>
              <div className="productCategory">本オークション</div>
              <div className={ styles.numBids }>
                <span className={styles.number}>{ numBids }</span>
                <span className="currency">件</span>
              </div>
              <div className={ styles.productSubtitle }>入札がありました</div>
            </div>
          </div>
          <div className={styles.productSlogan}>Everyday Active Sneakers</div>
        </section>
        
        {/* Success Section */ }
        <section className={styles.sectionContent}>
          <div className={ styles.congratulations }>
            <div>
              <Avatar
                src={winnerImage}
                className={ styles.congratulationsImg }/>
            </div>
            <h3 style={ { fontSize: '28px', margin: 0 } }>{winnerName}</h3>
            <div className={ styles.moreInfo }>
              <div className={ styles.moreInfoContent }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 432 408"
                >
                  <path
                    fill="#FF1D25"
                    d="M213 328L81 408l35-150L0 157l153-13L213 3l60 141l154 13l-117 101l35 150z"
                  />
                </svg>
                <p>8.4</p>
              </div>
              <div className={ styles.moreInfoContent }>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="#3B30FF"
                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM5.5 4.002V12h1.283V9.164h1.668C10.033 9.164 11 8.08 11 6.586c0-1.482-.955-2.584-2.538-2.584H5.5Zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z"
                  />
                </svg>
                <p>Platinum</p>
              </div>
            </div>
            <div className={ styles.congratulationsPrice }>
              {priceStr} <span className={ styles.currency }>円</span>
            </div>
            <div className={ styles.congratulationsTxt }>
              <p>Congratulations!</p>
            </div>
            <div className={ styles.englishNotice }>
              <p>Your item got sold</p>
            </div>
            <div className={ styles.jpNotice }>
              <p>おめでとうございます！商品を落札しました</p>
            </div>
            <div className={ styles.paymentNotice }>
              <p>今から15 分以内に以下の URL から代金をお支払いください。</p>
            </div>
            <div className={ styles.urlNotice }>
              <p
                style={ { textDecoration: 'underline' } }>http://www.futurevintage.com/~ModamLightweightBackpack2025091
              </p>
            </div>
          </div>
        </section>
      </div></>
  )
}

export default SuccessfulBidder;