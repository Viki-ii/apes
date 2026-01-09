import '../../styles/faculty/CoordinatorDashboard.css'

export default function CoordinatorDashboard() {
  return (
    <div className="coordinator-dashboard">
      <div className="dashboard-header">
        <h2>Coordinator Dashboard</h2>
        <p className="role-subtitle">Program & Course Coordination</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">📚</div>
          <h3>Program Management</h3>
          <p>Oversee programs and curricula</p>
          <button>Manage Programs</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">👨‍🎓</div>
          <h3>Course Allocation</h3>
          <p>Assign faculty to courses</p>
          <button>Allocate Courses</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📅</div>
          <h3>Schedule Management</h3>
          <p>Create and manage course schedules</p>
          <button>View Schedule</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Class Statistics</h3>
          <p>View enrollment and class metrics</p>
          <button>View Statistics</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">✅</div>
          <h3>Approvals</h3>
          <p>Review and approve course changes</p>
          <button>Pending Approvals</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📢</div>
          <h3>Announcements</h3>
          <p>Broadcast program-wide announcements</p>
          <button>Post Announcement</button>
        </div>
      </div>

      <section className="coordinator-actions">
        <h3>Administrative Tasks</h3>
        <div className="action-list">
          <button className="action-btn">📋 Course Feedback Analysis</button>
          <button className="action-btn">👥 Faculty Utilization Report</button>
          <button className="action-btn">📈 Program Performance Metrics</button>
          <button className="action-btn">🔄 Curriculum Review Cycle</button>
        </div>
      </section>

      <section className="pending-tasks">
        <h3>Pending Tasks</h3>
        <div className="task-list">
          <div className="task-item">
            <span className="task-priority priority-high">High</span>
            <div className="task-info">
              <p className="task-title">Approve new course for Spring semester</p>
              <p className="task-date">Due: Jan 12</p>
            </div>
          </div>
          <div className="task-item">
            <span className="task-priority priority-medium">Medium</span>
            <div className="task-info">
              <p className="task-title">Review faculty course preferences</p>
              <p className="task-date">Due: Jan 15</p>
            </div>
          </div>
          <div className="task-item">
            <span className="task-priority priority-medium">Medium</span>
            <div className="task-info">
              <p className="task-title">Finalize classroom assignments</p>
              <p className="task-date">Due: Jan 18</p>
            </div>
          </div>
        </div>
      </section>

      <section className="program-summary">
        <h3>Program Summary</h3>
        <div className="summary-grid">
          <div className="summary-card">
            <span className="summary-label">Active Courses</span>
            <span className="summary-value">24</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Total Students</span>
            <span className="summary-value">480</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Faculty Members</span>
            <span className="summary-value">18</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Avg Class Size</span>
            <span className="summary-value">27</span>
          </div>
        </div>
      </section>
    </div>
  )
}
