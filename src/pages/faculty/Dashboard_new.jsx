import GuideDashboard from '../../components/faculty/InstructorView'
import CoordinatorDashboard from '../../components/faculty/AdminView'
import HodDashboard from '../../components/faculty/DepartmentHeadView'
import '../../styles/FacultyDashboard.css'

export default function FacultyDashboard() {
  // Get assigned role from localStorage or default to 'guide'
  const assignedRole = localStorage.getItem('assignedRole') || 'guide'

  const renderRoleComponent = () => {
    switch (assignedRole.toLowerCase()) {
      case 'guide':
        return <GuideDashboard />
      case 'coordinator':
        return <CoordinatorDashboard />
      case 'hod':
        return <HodDashboard />
      default:
        return <GuideDashboard />
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
