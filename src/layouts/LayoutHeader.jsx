import { Link, useNavigate } from 'react-router-dom'
import '../styles/LayoutHeader.css'

export default function LayoutHeader() {
  const navigate = useNavigate()
  const userType = localStorage.getItem('userType') || 'student'

  const handleLogout = () => {
    // Clear authentication data
    localStorage.removeItem('userType')
    localStorage.removeItem('assignedRole')
    navigate('/login')
  }

  const getUserDisplayName = () => {
    const ut = localStorage.getItem('userType')
    if (ut === 'faculty' || ut === 'admin') {
      const role = localStorage.getItem('assignedRole') || 'guide'
      const label = ut === 'admin' ? 'Admin' : 'Faculty'
      return `${label} (${role.charAt(0).toUpperCase() + role.slice(1)})`
    }
    return 'Student'
  }

  return (
    <header className="layout-header">
      <div className="header-left">
        <Link to={userType === 'student' ? '/student/dashboard' : '/faculty/dashboard'} className="header-logo">
          📚 Dashboard
        </Link>
      </div>
      <div className="header-right">
        <span className="user-info">Welcome, {getUserDisplayName()}</span>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  )
}
