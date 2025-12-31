import { useMemo, useState } from 'react'
import { useParams }         from 'react-router-dom'
import PageHeader        from '../components/layout/PageHeader'
import { Avatar }            from '../components/ui/Avatar'
import { Badge }             from '../components/ui/Badge'
import { Button }            from '../components/ui/Button'
import { Card }              from '../components/ui/Card'
import { rooms, roomDetail } from '../data/demo'
import styles                from './Auction.module.scss'

const increments = [5, 10, 20]

export default function Auction() {
  const { id } = useParams()
  const detail = roomDetail
  const room = useMemo(() => rooms.find(r => r.id === id) ?? rooms[0], [id])
  const [currentBid, setCurrentBid] = useState(detail.pinnedProduct.bid ?? detail.pinnedProduct.price)
  const [myBid, setMyBid] = useState<number | null>(null)
  const [countdown, setCountdown] = useState(24)

  const handleBid = (increment: number) => {
    const next = currentBid + increment
    setCurrentBid(next)
    setMyBid(next)
    setCountdown(15)
  }

  return (
    <div className={styles.container}>
      <PageHeader title={`Auction #24 · ${detail.title}`} subtitle={`Host ${detail.host.name}`} />

      <div className={styles.hero}>
        <div className={styles.heroBadge}>Live auction</div>
        <div className={styles.heroBottom}>
          <Avatar src={detail.host.avatar} alt={detail.host.name} />
          <div>
            <p>{detail.host.name}</p>
            <small>{room.viewers.toLocaleString()} watching</small>
          </div>
          <Badge tone="accent">00:{countdown.toString().padStart(2, '0')}</Badge>
        </div>
      </div>

      <Card title={detail.pinnedProduct.name} subtitle="Live bidding session" padding="lg">
        <div className={styles.productRow}>
          <img src={detail.pinnedProduct.image} alt={detail.pinnedProduct.name} />
          <div>
            <p className={styles.label}>Current bid</p>
            <h2>${currentBid}</h2>
            <p className={styles.helper}>Starting at ${detail.pinnedProduct.price}</p>
          </div>
        </div>
        <div className={styles.actions}>
          {increments.map(step => (
            <Button key={step} size="sm" variant="secondary" onClick={() => handleBid(step)}>
              +${step}
            </Button>
          ))}
          <Button variant="primary" onClick={() => handleBid(0)}>Match current bid</Button>
        </div>
        {myBid && (
          <div className={styles.myBid}>
            <Badge tone="success">You are leading</Badge>
            <span>Your bid: ${myBid}</span>
          </div>
        )}
      </Card>

      <Card title="Notification feed" padding="lg">
        <ul className={styles.timeline}>
          <li>
            <span className={styles.time}>12:04</span>
            <div>
              <strong>@sneakerboy</strong> placed a bid of ${currentBid}
            </div>
          </li>
          <li>
            <span className={styles.time}>12:03</span>
            <div>
              System will close the drop in 00:{countdown.toString().padStart(2, '0')}
            </div>
          </li>
          <li>
            <span className={styles.time}>12:01</span>
            <div>
              <strong>{detail.host.name}</strong> teased the next product
            </div>
          </li>
        </ul>
      </Card>
    </div>
  )
}
