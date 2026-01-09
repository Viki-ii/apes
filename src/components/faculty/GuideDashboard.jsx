import '../../styles/faculty/GuideDashboard.css'

export default function GuideDashboard() {
  return (
    <div className="guide-dashboard">
      <div className="dashboard-header">
        <h2>Guide Dashboard</h2>
        <p className="role-subtitle">Student Mentorship & Guidance</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">👥</div>
          <h3>My Students</h3>
          <p>View and manage assigned students</p>
          <button>View Students</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📋</div>
          <h3>Academic Progress</h3>
          <p>Track student academic performance</p>
          <button>View Progress</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">💬</div>
          <h3>Mentorship Sessions</h3>
          <p>Schedule and manage mentoring sessions</p>
          <button>Manage Sessions</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📝</div>
          <h3>Student Feedback</h3>
          <p>Collect and review student feedback</p>
          <button>View Feedback</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🎯</div>
          <h3>Goals & Milestones</h3>
          <p>Set and track student goals</p>
          <button>Manage Goals</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Reports</h3>
          <p>Generate guidance reports and analytics</p>
          <button>View Reports</button>
        </div>
      </div>

      <section className="guide-actions">
        <h3>Quick Actions</h3>
        <div className="action-list">
          <button className="action-btn">📧 Send Message to Students</button>
          <button className="action-btn">📅 Schedule Group Session</button>
          <button className="action-btn">📌 Post Announcement</button>
          <button className="action-btn">📚 Share Resources</button>
        </div>
      </section>

      <section className="upcoming-sessions">
        <h3>Upcoming Sessions</h3>
        <div className="session-list">
          <div className="session-item">
            <div className="session-time">Today, 2:00 PM</div>
            <div className="session-info">
              <p className="session-student">Rahul Kumar</p>
              <p className="session-topic">Career Guidance</p>
            </div>
          </div>
          <div className="session-item">
            <div className="session-time">Tomorrow, 10:00 AM</div>
            <div className="session-info">
              <p className="session-student">Priya Singh</p>
              <p className="session-topic">Course Selection</p>
            </div>
          </div>
          <div className="session-item">
            <div className="session-time">Jan 11, 3:30 PM</div>
            <div className="session-info">
              <p className="session-student">Amit Patel</p>
              <p className="session-topic">Academic Performance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
