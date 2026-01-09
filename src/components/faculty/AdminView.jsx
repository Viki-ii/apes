import '../../styles/faculty/CoordinatorDashboard.css'

export default function CoordinatorDashboard() {
  const allowedActions = [
    'Coordinate course schedules',
    'Manage class assignments',
    'Track student registrations',
    'Handle leave and substitutions',
    'Coordinate with faculty',
    'Manage course materials distribution',
    'Generate coordination reports'
  ]

  const navigationLinks = [
    { label: 'Class Schedule', href: '#' },
    { label: 'Faculty Assignments', href: '#' },
    { label: 'Registrations', href: '#' },
    { label: 'Leave Management', href: '#' },
    { label: 'Course Materials', href: '#' },
    { label: 'Announcements', href: '#' }
  ]

  return (
    <div className="coordinator-dashboard">
      <div className="role-header">
        <h2>Coordinator Dashboard</h2>
        <p className="role-description">Academic coordination and schedule management</p>
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
                <span className="nav-icon">📅</span>
                <span className="nav-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>Overview</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">24</span>
              <span className="stat-label">Classes Coordinated</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">156</span>
              <span className="stat-label">Registered Students</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">8</span>
              <span className="stat-label">Pending Approvals</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">18</span>
              <span className="stat-label">Faculty Managed</span>
            </div>
          </div>
        </div>

        <div className="recent-activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">Today</span>
              <span className="activity-text">Approved 12 course registrations</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 8</span>
              <span className="activity-text">Updated class schedule for Spring semester</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 7</span>
              <span className="activity-text">Processed faculty leave request from Dr. Patel</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 6</span>
              <span className="activity-text">Distributed course materials to 8 classes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
