import '../../styles/faculty/GuideDashboard.css'

export default function GuideDashboard() {
  const allowedActions = [
    'View assigned students',
    'Schedule guidance sessions',
    'Track student progress',
    'Provide academic advice',
    'Monitor attendance',
    'Generate progress reports',
    'Conduct one-on-one meetings'
  ]

  const navigationLinks = [
    { label: 'My Students', href: '#' },
    { label: 'Schedule Sessions', href: '#' },
    { label: 'Progress Reports', href: '#' },
    { label: 'Attendance Records', href: '#' },
    { label: 'Feedback Forum', href: '#' },
    { label: 'Resources', href: '#' }
  ]

  return (
    <div className="guide-dashboard">
      <div className="role-header">
        <h2>Guide Dashboard</h2>
        <p className="role-description">Academic guidance and student mentorship</p>
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
                <span className="nav-icon">📋</span>
                <span className="nav-label">{link.label}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="stats-section">
          <h3>Overview</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <span className="stat-number">12</span>
              <span className="stat-label">Students Assigned</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">8</span>
              <span className="stat-label">Sessions This Month</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">4</span>
              <span className="stat-label">Reports Pending</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">95%</span>
              <span className="stat-label">Completion Rate</span>
            </div>
          </div>
        </div>

        <div className="recent-activity-section">
          <h3>Recent Activity</h3>
          <div className="activity-list">
            <div className="activity-item">
              <span className="activity-time">Today</span>
              <span className="activity-text">Met with Priya Sharma regarding course selection</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 8</span>
              <span className="activity-text">Submitted progress report for Batch 2024</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 7</span>
              <span className="activity-text">Scheduled 5 guidance sessions for this week</span>
            </div>
            <div className="activity-item">
              <span className="activity-time">Jan 6</span>
              <span className="activity-text">Reviewed placement prospects for final year students</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
