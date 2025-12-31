import styles                  from './AuctionResult.module.scss'
import { useEffect, useState } from 'react'
import LoadingScreen           from './Loading.tsx'

export default function AuctionResult() {
  
  const [ stage, setStage ] = useState<'result' | 'loading'>('result')
  
  useEffect(() => {
    if (stage === 'loading') {
      const loadingTimer = setTimeout(() => {
        setStage('result')
        alert('お支払いが正常に完了しました。!')
      }, 2000)
      
      return () => {
        clearTimeout(loadingTimer)
      }
    }
  }, [ stage ])
  
  if (stage === 'result')
    return (
      <div className={ styles.container }>
        <p className={ styles.header }>JORDAN 1 MID SE "PATENT BLACK
          WHITE METALLIC SILVER METALLI...</p>
        <img
          className={ styles.product }
          src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
        ></img>
        <div className={ styles.infoRow }>
          <div className={ styles.infoRowLeft }>
            <div className={ styles.avatar }>
              <img
                src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"/>
            </div>
            <span className={ styles.name }>kendra_wmfb11</span>
          </div>
          
          <div className={ styles.infoRowRight }>
            <div className={ styles.avatar }>
              <img
                src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"/>
            </div>
            <span className={ styles.name }>lennyzkickz</span>
          </div>
        </div>
        <div className={ styles.buttonArea }>
          <button onClick={ () => setStage('loading') }>¥96 決済する</button>
        </div>
      </div>
    )
  return (
    <LoadingScreen withoutBg={ true }/>
  )
}