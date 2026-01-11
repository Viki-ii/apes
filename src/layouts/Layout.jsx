import { Outlet } from 'react-router-dom'
import LayoutHeader from './LayoutHeader'
import Sidebar from './Sidebar'
import '../styles/Layout.css'

export default function Layout() {
  const userType = localStorage.getItem('userType') || 'student'
  const isStudent = userType === 'student'

  return (
    <div className={`layout-container ${isStudent ? 'student-layout' : ''}`}>
      {!isStudent && <LayoutHeader />}
      <div className="layout-body">
        <Sidebar />
        <main className="layout-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
