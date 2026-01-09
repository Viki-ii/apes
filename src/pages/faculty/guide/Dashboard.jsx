import { useState } from 'react'
import StudentProjectsList from '../../../components/guide/StudentProjectsList'
import ProposalReview from '../../../components/guide/ProposalReview'
import EvaluationForm from '../../../components/guide/EvaluationForm'
import '../../../styles/guide/GuideDashboard.css'

export default function GuideDashboard() {
  const [activeTab, setActiveTab] = useState('projects')
  const [selectedProject, setSelectedProject] = useState(null)

  const handleSelectProject = (project) => {
    setSelectedProject(project)
    setActiveTab('proposal')
  }

  const handleBackToProjects = () => {
    setSelectedProject(null)
    setActiveTab('projects')
  }

  return (
    <div className="guide-dashboard-container">
      <div className="dashboard-header">
        <h1>Guide Dashboard</h1>
        <p className="subtitle">Manage student projects, review proposals, and conduct evaluations</p>
      </div>

      <div className="tabs-container">
        <div className="tabs-header">
          <button
            className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
            onClick={() => setActiveTab('projects')}
          >
            <span className="tab-icon">📋</span>
            <span>Assigned Projects</span>
          </button>
          
          {selectedProject && (
            <>
              <button
                className={`tab-button ${activeTab === 'proposal' ? 'active' : ''}`}
                onClick={() => setActiveTab('proposal')}
              >
                <span className="tab-icon">📝</span>
                <span>Review Proposal</span>
              </button>
              
              <button
                className={`tab-button ${activeTab === 'evaluation' ? 'active' : ''}`}
                onClick={() => setActiveTab('evaluation')}
              >
                <span className="tab-icon">⭐</span>
                <span>Evaluation Form</span>
              </button>
            </>
          )}
        </div>

        <div className="tabs-breadcrumb">
          {selectedProject && (
            <button className="back-button" onClick={handleBackToProjects}>
              ← Back to Projects
            </button>
          )}
          {selectedProject && (
            <div className="current-project">
              <span className="project-info">
                Student: <strong>{selectedProject.studentName}</strong> | 
                Project: <strong>{selectedProject.projectTitle}</strong>
              </span>
            </div>
          )}
        </div>
      </div>

      <div className="tabs-content">
        {activeTab === 'projects' && (
          <StudentProjectsList onSelectProject={handleSelectProject} />
        )}

        {activeTab === 'proposal' && selectedProject && (
          <ProposalReview 
            project={selectedProject}
            onReviewComplete={() => alert('Review submitted! Moving to evaluation...')}
          />
        )}

        {activeTab === 'evaluation' && selectedProject && (
          <EvaluationForm 
            project={selectedProject}
            onEvaluationComplete={() => alert('Evaluation complete!')}
          />
        )}
      </div>
    </div>
  )
}
