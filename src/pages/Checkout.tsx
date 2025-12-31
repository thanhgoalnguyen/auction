import { useState }   from 'react'
import PageHeader from '../components/layout/PageHeader'
import { Badge }      from '../components/ui/Badge'
import { Button }     from '../components/ui/Button'
import { Card }       from '../components/ui/Card'
import { checkout }   from '../data/demo'
import styles         from './Checkout.module.scss'

export default function Checkout() {
  const [ status, setStatus ]     = useState(checkout.status)
  const [ isPaying, setIsPaying ] = useState(false)
  
  const handlePay = () => {
    setIsPaying(true)
    setTimeout(() => {
      setStatus('Paid')
      setIsPaying(false)
    }, 1200)
  }
  
  return (
    <div className={ styles.container }>
      <PageHeader
        title="Checkout"
        subtitle="Mock EC handoff with static data"
      />
      
      <Card
        title="Order"
        subtitle={ checkout.orderNumber }
        padding="lg"
      >
        <div className={ styles.summary }>
          <img
            src={ checkout.item.image }
            alt={ checkout.item.name }
          />
          <div>
            <p className={ styles.name }>{ checkout.item.name }</p>
            <p className={ styles.meta }>{ checkout.item.seller }</p>
            <p className={ styles.meta }>Size { checkout.item.size }</p>
          </div>
          <strong>${ checkout.item.price }</strong>
        </div>
        <div className={ styles.totals }>
          <div>
            <span>Subtotal</span>
            <span>${ checkout.item.price }</span>
          </div>
          <div>
            <span>Shipping</span>
            <span>${ checkout.shipping }</span>
          </div>
          <div className={ styles.totalRow }>
            <span>Total due</span>
            <span>${ checkout.total }</span>
          </div>
        </div>
        <div className={ styles.status }>
          <Badge
            tone={ status === 'Paid' ? 'success' : 'warning' }>{ status }</Badge>
          <span>Payment due: { checkout.paymentDue }</span>
        </div>
        <Button
          variant="primary"
          fullWidth
          disabled={ isPaying || status === 'Paid' }
          onClick={ handlePay }
        >
          { isPaying ? 'Processing…' : status === 'Paid' ? 'Completed' : 'Pay now' }
        </Button>
      </Card>
      
      <Card
        title="Keep shopping"
        padding="lg"
      >
        <div className={ styles.suggestions }>
          <div>
            <p>Return to live room</p>
            <small>Keep hunting sneaker deals with host Hiro.</small>
          </div>
          <Button
            size="sm"
            variant="secondary"
          >Open room</Button>
        </div>
      </Card>
    </div>
  )
}
