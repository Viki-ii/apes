import { Link, useLocation } from 'react-router-dom'
import '../styles/Sidebar.css'

export default function Sidebar() {
  const location = useLocation()
  const userType = localStorage.getItem('userType') || 'student'
  const assignedRole = localStorage.getItem('assignedRole') || 'guide'

  const isActive = (path) => location.pathname === path

  const studentMenuItems = [
    { label: 'Dashboard', path: '/student/dashboard', icon: '📊' },
    { label: 'My Courses', path: '/student/courses', icon: '📚' },
    { label: 'Grades', path: '/student/grades', icon: '⭐' },
    { label: 'Assignments', path: '/student/assignments', icon: '📝' },
    { label: 'Schedule', path: '/student/schedule', icon: '📅' },
    { label: 'Messages', path: '/student/messages', icon: '💬' },
  ]

  const guideMenuItems = [
    { label: 'Dashboard', path: '/faculty/dashboard', icon: '📊' },
    { label: 'My Mentees', path: '/faculty/mentees', icon: '👥' },
    { label: 'Guidance Plans', path: '/faculty/guidance-plans', icon: '📋' },
    { label: 'Progress Tracking', path: '/faculty/progress', icon: '📈' },
    { label: 'Reports', path: '/faculty/reports', icon: '📄' },
  ]

  const coordinatorMenuItems = [
    { label: 'Dashboard', path: '/faculty/dashboard', icon: '📊' },
    { label: 'Course Management', path: '/faculty/courses', icon: '📚' },
    { label: 'Student Groups', path: '/faculty/groups', icon: '👫' },
    { label: 'Schedules', path: '/faculty/schedules', icon: '📅' },
    { label: 'Analytics', path: '/faculty/analytics', icon: '📊' },
    { label: 'Communications', path: '/faculty/communications', icon: '💬' },
  ]

  const hodMenuItems = [
    { label: 'Dashboard', path: '/faculty/dashboard', icon: '📊' },
    { label: 'Faculty Management', path: '/faculty/faculty-list', icon: '👔' },
    { label: 'Department Overview', path: '/faculty/department', icon: '🏢' },
    { label: 'Budget & Resources', path: '/faculty/budget', icon: '💰' },
    { label: 'Performance Reviews', path: '/faculty/reviews', icon: '⭐' },
    { label: 'Academic Planning', path: '/faculty/planning', icon: '🎯' },
    { label: 'Reports & Statistics', path: '/faculty/statistics', icon: '📈' },
  ]

  const getMenuItems = () => {
    if (userType === 'student') {
      return studentMenuItems
    } else if (userType === 'faculty' || userType === 'admin') {
      switch (assignedRole) {
        case 'guide':
          return guideMenuItems
        case 'coordinator':
          return coordinatorMenuItems
        case 'hod':
          return hodMenuItems
        default:
          return guideMenuItems
      }
    }
    return []
  }

  const getRoleLabel = () => {
    if (userType === 'student') return 'Student'
    return assignedRole.charAt(0).toUpperCase() + assignedRole.slice(1)
  }

  const menuItems = getMenuItems()

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="user-role-badge">
          <span className={`role-badge role-${userType}`}>
            {getRoleLabel()}
          </span>
        </div>
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          <h3 className="nav-title">Menu</h3>
          <ul className="nav-list">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link 
                  to={item.path} 
                  className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                  title={item.label}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section nav-footer">
          <ul className="nav-list">
            <li>
              <Link 
                to="/login" 
                className={`nav-link logout-link ${isActive('/login') ? 'active' : ''}`}
              >
                <span className="nav-icon">🚪</span>
                <span className="nav-label">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
