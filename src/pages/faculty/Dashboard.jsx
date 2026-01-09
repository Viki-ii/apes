import { useState, useEffect } from 'react'
import GuideDashboardComponent from './guide/Dashboard'
import CoordinatorDashboard from '../../components/faculty/AdminView'
import HodDashboard from '../../components/faculty/DepartmentHeadView'
import '../../styles/FacultyDashboard.css'

export default function FacultyDashboard() {
  // Get assigned role from localStorage (set during login)
  const [assignedRole, setAssignedRole] = useState('guide')

  useEffect(() => {
    const role = localStorage.getItem('assignedRole') || 'guide'
    setAssignedRole(role)
  }, [])

  const renderRoleComponent = () => {
    switch (assignedRole.toLowerCase()) {
      case 'guide':
        return <GuideDashboardComponent />
      case 'coordinator':
        return <CoordinatorDashboard />
      case 'hod':
        return <HodDashboard />
      default:
        return <GuideDashboardComponent />
    }
  }

  return (
    <div className="faculty-dashboard-wrapper">
      <div className="faculty-role-banner">
        <div className="role-banner-content">
          <h1>Faculty Portal</h1>
          <p className="role-badge-text">
            Your Role: <span className="role-badge">{assignedRole.charAt(0).toUpperCase() + assignedRole.slice(1)}</span>
          </p>
        </div>
      </div>

      <div className="faculty-dashboard-container">
        {renderRoleComponent()}
      </div>
    </div>
  )
}
