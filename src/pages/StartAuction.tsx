import { useState }     from 'react'
import PageHeader   from '../components/layout/PageHeader'
import { Button }       from '../components/ui/Button'
import { Card }         from '../components/ui/Card'
import { TextField }    from '../components/ui/TextField'
import { hostProducts } from '../data/demo'
import styles           from './StartAuction.module.scss'

export default function StartAuction() {
  const nextProduct                 = hostProducts[0]
  const [ title, setTitle ]         = useState('Auction #24 - Nike Dunk Low')
  const [ basePrice, setBasePrice ] = useState('145')
  const [ duration, setDuration ]   = useState('60 seconds')
  
  return (
    <div className={ styles.container }>
      <PageHeader
        title="Start auction"
        subtitle="Configure the next auction before going live"
      />
      
      <Card
        title="Session information"
        padding="lg"
      >
        <div className={ styles.form }>
          <TextField
            label="Title"
            value={ title }
            onChange={ event => setTitle(event.target.value) }
          />
          <TextField
            label="Starting price"
            value={ basePrice }
            onChange={ event => setBasePrice(event.target.value) }
          />
          <TextField
            label="Duration"
            value={ duration }
            onChange={ event => setDuration(event.target.value) }
          />
          <Button variant="primary">Launch auction</Button>
        </div>
      </Card>
      
      <Card
        title="Participant preview"
        padding="lg"
      >
        <div className={ styles.preview }>
          <img
            src={ nextProduct.image }
            alt={ nextProduct.name }
          />
          <div>
            <p className={ styles.previewLabel }>First product</p>
            <h3>{ nextProduct.name }</h3>
            <p className={ styles.previewMeta }>Starting at
              ${ nextProduct.price }</p>
            <p className={ styles.previewMeta }>Announcement: "Auction starts in
              00:20"</p>
          </div>
        </div>
      </Card>
      
      <Card
        title="Pre-flight checklist"
        padding="lg"
      >
        <ul className={ styles.checklist }>
          <li>Mic { ` ${ '✓' }` } is live and levels look good</li>
          <li>Camera { ` ${ '✓' }` } is streaming 1080p</li>
          <li>Auction socket connected successfully</li>
          <li>Demo chat loaded the latest 5 messages</li>
        </ul>
      </Card>
    </div>
  )
}
