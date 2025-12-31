import { Link }       from 'react-router-dom'
import PageHeader from '../components/layout/PageHeader'
import { Badge }      from '../components/ui/Badge'
import { Card }       from '../components/ui/Card'
import styles         from './Home.module.scss'

const flows = [
  { to:          '/',
    title:       'Splash',
    description: 'Intro screen auto-navigates to rooms after ~1s.'
  },
  { to:          '/rooms',
    title:       'Rooms list',
    description: 'Browse and enter mock livestream rooms.'
  },
  { to:          '/rooms/room-1',
    title:       'Room detail',
    description: 'Preview waiting, live, outbid, and ended states.'
  },
  { to:          '/auction/room-1',
    title:       'Auction room',
    description: 'Interact with bidding, notification feed, and timer.'
  },
  { to:          '/studio',
    title:       'Live studio',
    description: 'Control camera/mic and manage the queue.'
  },
  { to:          '/studio/start',
    title:       'Start auction',
    description: 'Configure a session before going live.'
  },
  { to:          '/profile',
    title:       'Profile',
    description: 'Winning history and recent activity.'
  },
  { to:          '/checkout',
    title:       'Checkout demo',
    description: 'Mock checkout flow after winning.'
  }
]

export default function Home() {
  return (
    <div className={ styles.container }>
      <PageHeader
        title="Demo mobile"
        subtitle="8 primary screens from specifications/demo.md"
      />
      
      <Card
        title="Demo scope"
        padding="lg"
      >
        <div className={ styles.blurb }>
          <Badge tone="accent">Mock data</Badge>
          <p>
            All behavior is simulated per the spec. The layout is fixed to 375px
            to mirror the mobile experience.
          </p>
        </div>
      </Card>
      
      <Card
        title="Screen flows"
        padding="lg"
      >
        <ul className={ styles.flowList }>
          { flows.map(flow => (
            <li key={ flow.to }>
              <Link to={ flow.to }>
                <h3>{ flow.title }</h3>
                <p>{ flow.description }</p>
              </Link>
            </li>
          )) }
        </ul>
      </Card>
    </div>
  )
}
