import { NavLink }         from 'react-router-dom'
import { FaRegUserCircle } from 'react-icons/fa'
import { BiSearchAlt }     from 'react-icons/bi'
import { cn }              from '../../utils/cn'
import styles              from './TabBar.module.scss'

const tabs = [
  { to: '/rooms', label: 'カテゴリー', icon: <BiSearchAlt/> },
  { to: '/profile', label: 'プロフィール', icon: <FaRegUserCircle/> }
]

export function TabBar() {
  return (
    <nav
      className={ styles.tabbar }
      aria-label="Main navigation"
    >
      { tabs.map(tab => (
        <NavLink
          key={ tab.to }
          to={ tab.to }
          className={ ({ isActive }) => cn(styles.tab, isActive && styles.active) }
        >
          <span className={ styles.icon }>{ tab.icon }</span>
          <span className={ styles.label }>{ tab.label }</span>
        </NavLink>
      )) }
    </nav>
  )
}
