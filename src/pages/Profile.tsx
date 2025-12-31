import styles          from './Profile.module.scss'
import { TabBar }      from '../components/layout/TabBar.tsx'
import { useNavigate } from 'react-router-dom'
import { useAuth }     from '../contexts/AuthContext'
import { BiLogOut }    from 'react-icons/bi'

export default function Profile() {
  const navigate = useNavigate()
  const { logout, user } = useAuth()

  const handleLogout = () => {
    logout()
    navigate('/login', { replace: true })
  }

  if (!user) {
    return <div>ログインしてください</div>
  }

  return (
    <>
      <div className={ styles.container }>
        {/* Header host */ }
        <div className={ styles.mockHeader }>
          <button
            className={ styles.logoutButton }
            onClick={ handleLogout }
            title="ログアウト"
          >
            <BiLogOut size={ 24 }/>
          </button>
          <img
            src={ user.image }
            alt="avatar"
            className={ styles.mockHostAvatar }/>
          <div className={ styles.mockHostName }>{ user.username }</div>
        </div>
        
        <div className={ styles.mockContent }>
          <div
            className={ styles.mockProductCard }
            onClick={ () => navigate('/result') }
          >
            <img
              src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
              alt="product"
              className={ styles.mockProductThumb }/>
            <div className={ styles.mockProductInfo }>
              <div className={ styles.mockProductTitle }>
                JORDAN 1 MID SE &quot;PATENT BLACK WHITE METALLIC SILVER
                METALLI...
              </div>
              <div className={ styles.mockProductSeller }>
                <img
                  src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                  alt="seller"
                  className={ styles.mockSellerAvatar }/>
                <span className={ styles.mockSellerName }>kennyzkickz</span>
              </div>
            </div>
            <div className={ styles.mockProductPrice }>¥96</div>
          </div>
          
          <div
            className={ styles.mockContent }
            onClick={ () => navigate('/result') }
          >
            {/* Product highlight */ }
            <div className={ styles.mockProductCard }>
              <img
                src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                alt="product"
                className={ styles.mockProductThumb }/>
              <div className={ styles.mockProductInfo }>
                <div className={ styles.mockProductTitle }>
                  JORDAN 1 MID SE &quot;PATENT BLACK WHITE METALLIC SILVER
                  METALLI...
                </div>
                <div className={ styles.mockProductSeller }>
                  <img
                    src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                    alt="seller"
                    className={ styles.mockSellerAvatar }/>
                  <span className={ styles.mockSellerName }>kennyzkickz</span>
                </div>
              </div>
              <div className={ styles.mockProductPrice }>¥96</div>
            </div>
          </div>
          
          <div
            className={ styles.mockContent }
            onClick={ () => navigate('/result') }
          >
            {/* Product highlight */ }
            <div className={ styles.mockProductCard }>
              <img
                src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                alt="product"
                className={ styles.mockProductThumb }/>
              <div className={ styles.mockProductInfo }>
                <div className={ styles.mockProductTitle }>
                  JORDAN 1 MID SE &quot;PATENT BLACK WHITE METALLIC SILVER
                  METALLI...
                </div>
                <div className={ styles.mockProductSeller }>
                  <img
                    src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                    alt="seller"
                    className={ styles.mockSellerAvatar }/>
                  <span className={ styles.mockSellerName }>kennyzkickz</span>
                </div>
              </div>
              <div className={ styles.mockProductPrice }>¥96</div>
            </div>
          </div>
          
          <div
            className={ styles.mockContent }
            onClick={ () => navigate('/result') }
          >
            {/* Product highlight */ }
            <div className={ styles.mockProductCard }>
              <img
                src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                alt="product"
                className={ styles.mockProductThumb }/>
              <div className={ styles.mockProductInfo }>
                <div className={ styles.mockProductTitle }>
                  JORDAN 1 MID SE &quot;PATENT BLACK WHITE METALLIC SILVER
                  METALLI...
                </div>
                <div className={ styles.mockProductSeller }>
                  <img
                    src="https://product.hstatic.net/200000858039/product/jordan-4-military-black-trang-den-xam__4__25d24793d4764228a01db9302d05bcf7_1024x1024.jpg"
                    alt="seller"
                    className={ styles.mockSellerAvatar }/>
                  <span className={ styles.mockSellerName }>kennyzkickz</span>
                </div>
              </div>
              <div className={ styles.mockProductPrice }>¥96</div>
            </div>
          </div>
        </div>
      </div>
      <TabBar/></>
  )
}
