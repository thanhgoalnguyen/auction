import { useMemo, useState } from 'react'
import { Link }              from 'react-router-dom'
import { TabBar }            from '../components/layout/TabBar.tsx'
import { rooms }             from '../data/demo'
import { cn }                from '../utils/cn'
import styles                from './Rooms.module.scss'
import { Room }              from '../components/ui/Room.tsx'

const categoryList = [ 'All', ...Array.from(new Set(rooms.map(room => room.category))) ]

export default function Rooms() {
  const [ activeCategory, setActiveCategory ] = useState<string>('All')
  
  const filteredRooms = useMemo(() => {
    if (activeCategory === 'All') return rooms
    return rooms.filter(room => room.category === activeCategory)
  }, [ activeCategory ])
  
  return (
    <div className={ styles.screen }>
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ブランドバック愛用家' ],
            rating:  4.8,
            ranking: 'silver',
            name:    'Y.Sara1985'
          } }
          price={ 1000 }
          title={ 'Modern Lightweight Backpack' }
          subtitle={ '軽くておしゃれなカジュアルバック　入手困難品' }
          avatarImageSrc={ '/images/y-sara1985.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-01.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ブランドバック愛用家' ],
            rating:  4.8,
            ranking: 'silver',
            name:    'Y.Sara1985'
          } }
          price={ 1000 }
          title={ 'Modern Lightweight Backpack' }
          subtitle={ '軽くておしゃれなカジュアルバック　入手困難品' }
          avatarImageSrc={ '/images/y-sara1985.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-01.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ブランドバック愛用家' ],
            rating:  4.8,
            ranking: 'silver',
            name:    'Y.Sara1985'
          } }
          price={ 1000 }
          title={ 'Modern Lightweight Backpack' }
          subtitle={ '軽くておしゃれなカジュアルバック　入手困難品' }
          avatarImageSrc={ '/images/y-sara1985.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-01.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      
      <Link
        className={ styles.sectionRoom }
        to={ `/rooms/room-1` }
      >
        <Room
          host={ {
            tags:    [ 'ビンテージスニーカー収集' ],
            rating:  4.2,
            ranking: 'bronze',
            name:    'Mami\'s Closet'
          } }
          price={ 500 }
          title={ 'Everyday Active Sneakers' }
          subtitle={ 'ディリーユースに最適。松尾雄エディション・新品' }
          avatarImageSrc={ '/images/mami-closet.jpeg' }
          thumbnailImageSrc={ '/images/thumbnail-02.jpeg' }
        />
      </Link>
      <TabBar/>
    </div>
  )
}
