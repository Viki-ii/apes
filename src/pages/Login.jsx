import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/Login.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [userType, setUserType] = useState('student')
  const [projectType, setProjectType] = useState('main')
  const [assignedRole, setAssignedRole] = useState('guide')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Placeholder: In a real app, authenticate user here
    console.log('Login attempt:', { email, password, userType, projectType, assignedRole })
    
    // Store user info in localStorage (for demo purposes)
    localStorage.setItem('userType', userType)
    if (userType === 'faculty') {
      localStorage.setItem('projectType', projectType)
      localStorage.setItem('assignedRole', assignedRole)
    }
    
    if (userType === 'student') {
      navigate('/student/dashboard')
    } else {
      // Treat admin the same as faculty for now
      navigate('/faculty/dashboard')
    }
  }

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="userType">User Type</label>
            <select
              id="userType"
              value={userType}
              onChange={(e) => setUserType(e.target.value)}
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          {userType === 'faculty' && (
            <>
              <div className="form-group">
                <label htmlFor="projectType">Project Type</label>
                <select
                  id="projectType"
                  value={projectType}
                  onChange={(e) => setProjectType(e.target.value)}
                >
                  <option value="main">Main Project</option>
                  <option value="mini">Mini Project</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="assignedRole">Faculty Role</label>
                <select
                  id="assignedRole"
                  value={assignedRole}
                  onChange={(e) => setAssignedRole(e.target.value)}
                >
                  <option value="guide">Guide</option>
                  <option value="coordinator">Coordinator</option>
                  <option value="hod">HOD (Head of Department)</option>
                </select>
                <p className="role-info">
                  Selected Role: <span className="role-badge">{assignedRole.charAt(0).toUpperCase() + assignedRole.slice(1)}</span>
                </p>
              </div>
            </>
          )}

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="login-btn">
            Login
          </button>
        </form>

        <div className="login-demo">
          <p className="demo-note">Demo Credentials:</p>
          <p><strong>Student:</strong> student@example.com</p>
          <p><strong>Faculty:</strong> faculty@example.com</p>
          <div className="role-legend">
            <p className="legend-title">Faculty Roles:</p>
            <p>🎓 <strong>Guide:</strong> Course instructor and student guide</p>
            <p>📋 <strong>Coordinator:</strong> Program/course coordinator</p>
            <p>👔 <strong>HOD:</strong> Head of Department</p>
          </div>
        </div>
      </div>
    </div>
  )
}
