import { Outlet }   from 'react-router-dom'
import { AppShell } from './AppShell'

export default function BareShell() {
  return (
    <AppShell>
      <Outlet/>
    </AppShell>
  )
}
