import '../../styles/StudentDashboard.css'

export default function StudentDashboard() {
  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Student Dashboard</h1>
        <p className="subtitle">Welcome to your academic portal</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>My Courses</h3>
          <p>View enrolled courses and course materials</p>
          <button>View Courses</button>
        </div>

        <div className="dashboard-card">
          <h3>Grades</h3>
          <p>Check your academic performance</p>
          <button>View Grades</button>
        </div>

        <div className="dashboard-card">
          <h3>Assignments</h3>
          <p>View and submit assignments</p>
          <button>View Assignments</button>
        </div>

        <div className="dashboard-card">
          <h3>Schedule</h3>
          <p>View your class schedule</p>
          <button>View Schedule</button>
        </div>

        <div className="dashboard-card">
          <h3>Messages</h3>
          <p>Communicate with instructors</p>
          <button>View Messages</button>
        </div>

        <div className="dashboard-card">
          <h3>Profile</h3>
          <p>Update your profile information</p>
          <button>Edit Profile</button>
        </div>
      </div>

      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          <div className="activity-item">
            <span className="activity-date">Jan 8</span>
            <span className="activity-text">Assignment submitted in Biology 101</span>
          </div>
          <div className="activity-item">
            <span className="activity-date">Jan 7</span>
            <span className="activity-text">New grade posted in Mathematics 201</span>
          </div>
          <div className="activity-item">
            <span className="activity-date">Jan 6</span>
            <span className="activity-text">New course material available in Physics</span>
          </div>
        </div>
      </section>
    </div>
  )
}
