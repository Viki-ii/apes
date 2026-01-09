import { useState } from 'react'
import '../../styles/guide/StudentProjectsList.css'

export default function StudentProjectsList({ onSelectProject }) {
  const [projects] = useState([
    {
      id: 1,
      studentName: 'Rajesh Kumar',
      email: 'rajesh@example.com',
      projectTitle: 'AI-based Chat System',
      status: 'proposal_pending',
      submittedDate: '2024-01-05',
      proposalStatus: 'pending_review'
    },
    {
      id: 2,
      studentName: 'Priya Singh',
      email: 'priya@example.com',
      projectTitle: 'E-Commerce Platform',
      status: 'approved',
      submittedDate: '2024-01-02',
      proposalStatus: 'approved'
    },
    {
      id: 3,
      studentName: 'Arun Patel',
      email: 'arun@example.com',
      projectTitle: 'Mobile Learning App',
      status: 'proposal_pending',
      submittedDate: '2024-01-08',
      proposalStatus: 'pending_review'
    },
    {
      id: 4,
      studentName: 'Sneha Desai',
      email: 'sneha@example.com',
      projectTitle: 'IoT Smart Home System',
      status: 'revision_needed',
      submittedDate: '2024-01-03',
      proposalStatus: 'revision_requested'
    },
    {
      id: 5,
      studentName: 'Vikram Singh',
      email: 'vikram@example.com',
      projectTitle: 'Data Analytics Dashboard',
      status: 'approved',
      submittedDate: '2024-01-01',
      proposalStatus: 'approved'
    },
  ])

  const getStatusColor = (status) => {
    const colors = {
      'proposal_pending': 'status-pending',
      'approved': 'status-approved',
      'revision_needed': 'status-revision',
      'completed': 'status-completed'
    }
    return colors[status] || 'status-pending'
  }

  const getProposalStatusLabel = (status) => {
    const labels = {
      'pending_review': '⏳ Pending Review',
      'approved': '✅ Approved',
      'revision_requested': '🔄 Revision Needed',
      'rejected': '❌ Rejected'
    }
    return labels[status] || status
  }

  return (
    <div className="projects-list-container">
      <div className="projects-header">
        <h2>Assigned Student Projects</h2>
        <p className="projects-count">Total: {projects.length} students</p>
      </div>

      <div className="projects-table-wrapper">
        <table className="projects-table">
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Project Title</th>
              <th>Submitted Date</th>
              <th>Proposal Status</th>
              <th>Project Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id} className={getStatusColor(project.status)}>
                <td>
                  <div className="student-info">
                    <div className="student-name">{project.studentName}</div>
                    <div className="student-email">{project.email}</div>
                  </div>
                </td>
                <td className="project-title">{project.projectTitle}</td>
                <td className="submitted-date">{project.submittedDate}</td>
                <td>
                  <span className="proposal-badge">
                    {getProposalStatusLabel(project.proposalStatus)}
                  </span>
                </td>
                <td>
                  <span className={`status-badge ${project.status}`}>
                    {project.status.replace('_', ' ').toUpperCase()}
                  </span>
                </td>
                <td>
                  <button 
                    className="view-btn"
                    onClick={() => onSelectProject(project)}
                  >
                    View & Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
