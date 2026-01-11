import { Link, useLocation } from 'react-router-dom'
import '../styles/Sidebar.css'

export default function Sidebar() {
  const location = useLocation()
  const userType = localStorage.getItem('userType') || 'student'
  const assignedRole = localStorage.getItem('assignedRole') || 'guide'

  const isActive = (path) => location.pathname === path

  const studentMenuItems = [
    { label: 'Dashboard', path: '/student/dashboard', icon: '⸬' },
    { label: 'Group members', path: '/student/group', icon: '👥' },
    { label: 'Guide request', path: '/student/guide-request', icon: '📝' },
    { label: 'Weekly progress', path: '/student/weekly-progress', icon: '📊' },
    { label: 'Meetings', path: '/student/meetings', icon: '📅' },
    { label: 'Documents', path: '/student/documents', icon: '📁' },
    { label: 'Project Status', path: '/student/status', icon: '⸬' },
    { label: 'Profile', path: '/student/profile', icon: '👤' },
    { label: 'Settings', path: '/student/settings', icon: '⚙️' },
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
    <aside className={`sidebar ${userType === 'student' ? 'student-sidebar' : ''}`}>
      <div className="sidebar-header">
        {userType === 'student' ? (
           <div className="project-hub-branding">
             <h1 className="ph-title">project <span>hub</span></h1>
             <p className="ph-subtitle">Mits</p>
           </div>
        ) : (
          <div className="user-role-badge">
            <span className={`role-badge role-${userType}`}>
              {getRoleLabel()}
            </span>
          </div>
        )}
      </div>

      <nav className="sidebar-nav">
        <div className="nav-section">
          {userType !== 'student' && <h3 className="nav-title">Menu</h3>}
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
                  {/* Add dropdown arrow for student menu items if needed, mostly decoration for now */}
                  {userType === 'student' && <span className="nav-arrow">▼</span>}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-section nav-footer">
          <ul className="nav-list">
            <li>
              {userType === 'student' ? (
                 <div className="logout-wrapper">
                    <button className="ph-logout-btn" onClick={() => localStorage.removeItem('userType') || (window.location.href = '/login')}>
                      Log Out
                    </button>
                 </div>
              ) : (
                <Link 
                  to="/login" 
                  className={`nav-link logout-link ${isActive('/login') ? 'active' : ''}`}
                >
                  <span className="nav-icon">🚪</span>
                  <span className="nav-label">Logout</span>
                </Link>
              )}
            </li>
          </ul>
        </div>
      </nav>
    </aside>
  )
}
