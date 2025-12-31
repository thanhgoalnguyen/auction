import { useState }     from 'react'
import PageHeader   from '../components/layout/PageHeader'
import { Badge }        from '../components/ui/Badge'
import { Button }       from '../components/ui/Button'
import { Card }         from '../components/ui/Card'
import { TextField }    from '../components/ui/TextField'
import { hostProducts } from '../data/demo'
import styles           from './LiveStudio.module.scss'

export default function LiveStudio() {
  const [ micOn, setMicOn ] = useState(true)
  const [ camOn, setCamOn ] = useState(true)
  
  return (
    <div className={ styles.container }>
      <PageHeader
        title="Live studio"
        subtitle="Manage livestream controls and the product queue"
      />
      
      <div className={ styles.preview }>
        <div
          className={ styles.previewBadge }>{ camOn ? 'Camera preview' : 'Camera off' }</div>
        <div className={ styles.previewControls }>
          <Button
            variant={ camOn ? 'primary' : 'secondary' }
            size="sm"
            onClick={ () => setCamOn(v => !v) }
          >
            { camOn ? 'Turn camera off' : 'Turn camera on' }
          </Button>
          <Button
            variant={ micOn ? 'primary' : 'secondary' }
            size="sm"
            onClick={ () => setMicOn(v => !v) }
          >
            { micOn ? 'Mute mic' : 'Unmute' }
          </Button>
        </div>
      </div>
      
      <Card
        title="Session details"
        subtitle="Spin up a new drop with mock products"
        padding="lg"
      >
        <form className={ styles.form }>
          <TextField
            label="Session title"
            placeholder="Drop #24 - Nike Dunk Low"
            defaultValue="Drop #24 - Sneaker heat"
          />
          <TextField
            label="Starting price"
            placeholder="$100"
            defaultValue="$145"
          />
          <TextField
            label="Duration"
            placeholder="60 seconds"
            defaultValue="60 seconds"
          />
          <Button
            type="button"
            variant="primary"
          >Start countdown</Button>
        </form>
      </Card>
      
      <Card
        title="Queued products"
        padding="lg"
      >
        <div className={ styles.queue }>
          { hostProducts.map((product, index) => (
            <div
              key={ product.id }
              className={ styles.queueItem }
            >
              <img
                src={ product.image }
                alt={ product.name }
              />
              <div>
                <p>{ product.name }</p>
                <small>Starting at ${ product.price }</small>
              </div>
              <Badge
                tone={ index === 0 ? 'accent' : 'neutral' }>{ index === 0 ? 'Next' : 'Queued' }</Badge>
            </div>
          )) }
        </div>
      </Card>
      
      <Card
        title="Livestream status"
        padding="lg"
      >
        <div className={ styles.statusRow }>
          <div>
            <p className={ styles.statusLabel }>Live server</p>
            <h3>Connecting</h3>
            <p className={ styles.statusDescription }>Socket &amp; Agora mocked
              for this demo.</p>
          </div>
          <Badge tone="success">Connected</Badge>
        </div>
        <div className={ styles.statusRow }>
          <div>
            <p className={ styles.statusLabel }>Share link</p>
            <p className={ styles.statusDescription }>demo.live/hiro-drop</p>
          </div>
          <Button
            size="sm"
            variant="secondary"
          >Copy</Button>
        </div>
      </Card>
    </div>
  )
}
