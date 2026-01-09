import { useState } from 'react'
import '../../styles/guide/EvaluationForm.css'

export default function EvaluationForm({ project, onEvaluationComplete }) {
  const [rubricScores, setRubricScores] = useState({
    clarity: 0,
    feasibility: 0,
    innovation: 0,
    technical_soundness: 0,
    documentation: 0,
    timeline: 0
  })

  const [rubricComments, setRubricComments] = useState({
    clarity: '',
    feasibility: '',
    innovation: '',
    technical_soundness: '',
    documentation: '',
    timeline: ''
  })

  const rubrics = [
    {
      id: 'clarity',
      title: 'Clarity of Objectives',
      description: 'How clearly are the project goals and objectives stated?'
    },
    {
      id: 'feasibility',
      title: 'Feasibility',
      description: 'Is the project realistic and achievable within the given timeline?'
    },
    {
      id: 'innovation',
      title: 'Innovation & Originality',
      description: 'How innovative and original is the approach?'
    },
    {
      id: 'technical_soundness',
      title: 'Technical Soundness',
      description: 'Are the proposed technologies and methodologies appropriate?'
    },
    {
      id: 'documentation',
      title: 'Documentation Quality',
      description: 'How well-documented is the proposal?'
    },
    {
      id: 'timeline',
      title: 'Timeline & Milestones',
      description: 'Are the milestones and deliverables clearly defined?'
    }
  ]

  const handleScoreChange = (rubricId, score) => {
    setRubricScores({
      ...rubricScores,
      [rubricId]: parseInt(score)
    })
  }

  const handleCommentChange = (rubricId, comment) => {
    setRubricComments({
      ...rubricComments,
      [rubricId]: comment
    })
  }

  const calculateTotalScore = () => {
    const total = Object.values(rubricScores).reduce((sum, score) => sum + score, 0)
    const average = total / Object.keys(rubricScores).length
    return {
      total: total,
      average: average.toFixed(2),
      maxScore: Object.keys(rubricScores).length * 5
    }
  }

  const handleSubmitEvaluation = () => {
    const scores = calculateTotalScore()
    const evaluation = {
      rubricScores,
      rubricComments,
      totalScore: scores.total,
      averageScore: scores.average,
      evaluatedDate: new Date().toLocaleDateString()
    }

    console.log('Evaluation submitted:', evaluation)
    alert(`Evaluation submitted! Average Score: ${scores.average}/5`)
    
    if (onEvaluationComplete) {
      onEvaluationComplete(evaluation)
    }
  }

  const scores = calculateTotalScore()

  return (
    <div className="evaluation-form-container">
      <div className="evaluation-header">
        <h2>Rubric-Based Evaluation Form</h2>
        <div className="evaluation-info">
          <p><strong>Student:</strong> {project.studentName}</p>
          <p><strong>Project:</strong> {project.projectTitle}</p>
        </div>
      </div>

      <div className="evaluation-instructions">
        <h3>📋 Evaluation Guidelines</h3>
        <p>Rate each criterion on a scale of 1-5:</p>
        <ul>
          <li><strong>1:</strong> Poor - Does not meet expectations</li>
          <li><strong>2:</strong> Below Average - Needs significant improvement</li>
          <li><strong>3:</strong> Average - Meets basic expectations</li>
          <li><strong>4:</strong> Good - Exceeds expectations</li>
          <li><strong>5:</strong> Excellent - Outstanding quality</li>
        </ul>
      </div>

      <div className="rubric-items">
        {rubrics.map((rubric) => (
          <div key={rubric.id} className="rubric-item">
            <div className="rubric-header">
              <div className="rubric-title-section">
                <h3>{rubric.title}</h3>
                <p className="rubric-description">{rubric.description}</p>
              </div>
              <div className="score-selector">
                <select 
                  value={rubricScores[rubric.id]}
                  onChange={(e) => handleScoreChange(rubric.id, e.target.value)}
                  className="score-select"
                >
                  <option value="0">Select Score</option>
                  <option value="1">1 - Poor</option>
                  <option value="2">2 - Below Average</option>
                  <option value="3">3 - Average</option>
                  <option value="4">4 - Good</option>
                  <option value="5">5 - Excellent</option>
                </select>
                {rubricScores[rubric.id] > 0 && (
                  <span className="score-display">
                    {rubricScores[rubric.id]}/5 ⭐
                  </span>
                )}
              </div>
            </div>

            <div className="rubric-comment">
              <label>Comments on {rubric.title}</label>
              <textarea
                value={rubricComments[rubric.id]}
                onChange={(e) => handleCommentChange(rubric.id, e.target.value)}
                placeholder={`Provide feedback on ${rubric.title.toLowerCase()}...`}
                rows="3"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="evaluation-summary">
        <h3>Evaluation Summary</h3>
        <div className="summary-cards">
          <div className="summary-card">
            <span className="summary-label">Total Score</span>
            <span className="summary-value">{scores.total}/{scores.maxScore}</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Average Score</span>
            <span className="summary-value">{scores.average}/5</span>
          </div>
          <div className="summary-card">
            <span className="summary-label">Overall Assessment</span>
            <span className={`summary-assessment assessment-${Math.round(scores.average)}`}>
              {scores.average >= 4.5 ? '🌟 Excellent' : 
               scores.average >= 4 ? '⭐ Good' : 
               scores.average >= 3 ? '👍 Average' : 
               scores.average >= 2 ? '⚠️ Below Average' : 
               '❌ Poor'}
            </span>
          </div>
        </div>
      </div>

      <div className="evaluation-actions">
        <button 
          className="btn-primary"
          onClick={handleSubmitEvaluation}
        >
          Submit Evaluation
        </button>
        <button className="btn-secondary">
          Save as Draft
        </button>
      </div>
    </div>
  )
}
