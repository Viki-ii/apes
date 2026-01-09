import '../../styles/faculty/HodDashboard.css'

export default function HodDashboard() {
  const allowedActions = [
    'Oversee department operations',
    'Manage faculty performance',
    'Approve course curriculum',
    'Budget and resource allocation',
    'Handle disciplinary matters',
    'Coordinate with administration',
    'Generate department reports'
  ]

  const navigationLinks = [
    { label: 'Faculty Management', href: '#' },
    { label: 'Department Budget', href: '#' },
    { label: 'Curriculum Planning', href: '#' },
    { label: 'Performance Reviews', href: '#' },
    { label: 'Department Reports', href: '#' },
    { label: 'Administrative Tasks', href: '#' }
  ]

  return (
    <div className="hod-dashboard">
      <div className="role-header">
        <h2>HOD Dashboard</h2>
        <p className="role-description">Department head operations and strategic management</p>
      </div>

      <div className="dashboard-content">
        <div className="actions-section">
          <h3>Your Responsibilities</h3>
          <div className="actions-card">
            <ul className="actions-list">
              {allowedActions.map((action, index) => (
                <li key={index}>
                  <span className="action-icon">→</span>
                  {action}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="navigation-section">
          <h3>Quick Navigation</h3>
          <div className="nav-grid">
            {navigationLinks.map((link, index) => (
              <a key={index} href={link.href} className="nav-card">
                <span className="nav-icon">⚙️</span>
                <span className="nav-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>Department Overview</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">42</span>
              <span className="stat-label">Faculty Members</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">1,250</span>
              <span className="stat-label">Total Students</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">32</span>
              <span className="stat-label">Active Courses</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">₹8.5L</span>
              <span className="stat-label">Budget Allocated</span>
            </div>
          </div>
        </div>

        <div className="recent-activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">Today</span>
              <span className="activity-text">Approved new curriculum for AI specialization</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 8</span>
              <span className="activity-text">Reviewed performance evaluations for 8 faculty members</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 7</span>
              <span className="activity-text">Attended college administrative meeting</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 6</span>
              <span className="activity-text">Approved research project proposals</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
