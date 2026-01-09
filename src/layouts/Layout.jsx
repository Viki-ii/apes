import { Outlet } from 'react-router-dom'
import LayoutHeader from './LayoutHeader'
import Sidebar from './Sidebar'
import '../styles/Layout.css'

export default function Layout() {
  return (
    <div className="layout-container">
      <LayoutHeader />
      <div className="layout-body">
        <Sidebar />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
