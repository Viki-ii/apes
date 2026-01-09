import '../../styles/faculty/HodDashboard.css'

export default function HodDashboard() {
  return (
    <div className="hod-dashboard">
      <div className="dashboard-header">
        <h2>HOD Dashboard</h2>
        <p className="role-subtitle">Department Leadership & Management</p>
      </div>

      <div className="dashboard-grid">
        <div className="dashboard-card">
          <div className="card-icon">👨‍💼</div>
          <h3>Faculty Management</h3>
          <p>Oversee faculty and assignments</p>
          <button>Manage Faculty</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">💰</div>
          <h3>Budget Planning</h3>
          <p>Manage department budget allocation</p>
          <button>View Budget</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">⭐</div>
          <h3>Performance Reviews</h3>
          <p>Conduct faculty evaluations</p>
          <button>View Reviews</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📖</div>
          <h3>Curriculum Planning</h3>
          <p>Design and update curriculum</p>
          <button>Manage Curriculum</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">🏆</div>
          <h3>Strategic Goals</h3>
          <p>Set and track departmental goals</p>
          <button>View Goals</button>
        </div>

        <div className="dashboard-card">
          <div className="card-icon">📊</div>
          <h3>Analytics & Reports</h3>
          <p>Comprehensive department analytics</p>
          <button>View Analytics</button>
        </div>
      </div>

      <section className="hod-actions">
        <h3>Leadership Actions</h3>
        <div className="action-list">
          <button className="action-btn">📝 Department Strategic Plan</button>
          <button className="action-btn">🎓 Faculty Development Programs</button>
          <button className="action-btn">🔍 Quality Assurance Review</button>
          <button className="action-btn">🤝 Stakeholder Engagement</button>
        </div>
      </section>

      <section className="key-metrics">
        <h3>Key Performance Metrics</h3>
        <div className="metrics-grid">
          <div className="metric-card">
            <p className="metric-label">Student Satisfaction</p>
            <p className="metric-value">4.2/5</p>
            <div className="metric-bar">
              <div className="metric-fill" style={{ width: '84%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <p className="metric-label">Faculty Performance</p>
            <p className="metric-value">4.5/5</p>
            <div className="metric-bar">
              <div className="metric-fill" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <p className="metric-label">Program Accreditation</p>
            <p className="metric-value">95%</p>
            <div className="metric-bar">
              <div className="metric-fill" style={{ width: '95%' }}></div>
            </div>
          </div>
          <div className="metric-card">
            <p className="metric-label">Budget Utilization</p>
            <p className="metric-value">78%</p>
            <div className="metric-bar">
              <div className="metric-fill" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>
      </section>

      <section className="department-highlights">
        <h3>Department Highlights</h3>
        <div className="highlights-grid">
          <div className="highlight-item">
            <h4>Faculty Count</h4>
            <p className="highlight-number">28</p>
            <p className="highlight-change">+2 new hires this year</p>
          </div>
          <div className="highlight-item">
            <h4>Student Enrollment</h4>
            <p className="highlight-number">650</p>
            <p className="highlight-change">+8% from last year</p>
          </div>
          <div className="highlight-item">
            <h4>Research Publications</h4>
            <p className="highlight-number">42</p>
            <p className="highlight-change">5 in top-tier journals</p>
          </div>
          <div className="highlight-item">
            <h4>External Funding</h4>
            <p className="highlight-number">$2.1M</p>
            <p className="highlight-change">+15% growth YoY</p>
          </div>
        </div>
      </section>

      <section className="strategic-priorities">
        <h3>Strategic Priorities for 2026</h3>
        <div className="priority-list">
          <div className="priority-item">
            <span className="priority-number">1</span>
            <div className="priority-content">
              <p className="priority-title">Enhance Industry Partnerships</p>
              <p className="priority-desc">Develop collaborations with leading tech companies</p>
            </div>
          </div>
          <div className="priority-item">
            <span className="priority-number">2</span>
            <div className="priority-content">
              <p className="priority-title">Digital Transformation</p>
              <p className="priority-desc">Implement modern teaching technologies and platforms</p>
            </div>
          </div>
          <div className="priority-item">
            <span className="priority-number">3</span>
            <div className="priority-content">
              <p className="priority-title">Faculty Excellence Program</p>
              <p className="priority-desc">Invest in professional development and research support</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
