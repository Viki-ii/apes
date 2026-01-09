import { useState } from 'react'
import '../../styles/guide/ProposalReview.css'

export default function ProposalReview({ project, onReviewComplete }) {
  const [reviewDecision, setReviewDecision] = useState('')
  const [comments, setComments] = useState('')
  const [showEvaluation, setShowEvaluation] = useState(false)

  const handleSubmitReview = () => {
    if (!reviewDecision || !comments.trim()) {
      alert('Please provide a decision and comments')
      return
    }

    const review = {
      decision: reviewDecision,
      comments: comments,
      reviewedDate: new Date().toLocaleDateString()
    }

    console.log('Review submitted:', review)
    alert(`Proposal ${reviewDecision} successfully!`)
    
    if (onReviewComplete) {
      onReviewComplete(review)
    }
  }

  return (
    <div className="proposal-review-container">
      <div className="review-header">
        <h2>Proposal Review</h2>
        <div className="student-details">
          <p><strong>Student:</strong> {project.studentName}</p>
          <p><strong>Project Title:</strong> {project.projectTitle}</p>
        </div>
      </div>

      <div className="proposal-content">
        <section className="proposal-section">
          <h3>Project Proposal</h3>
          <div className="proposal-text">
            <p>
              This project aims to develop a comprehensive solution for managing student learning and development. 
              The system will include features for tracking progress, evaluating performance, and providing feedback.
            </p>
            <h4>Project Objectives:</h4>
            <ul>
              <li>Create an interactive learning platform</li>
              <li>Implement real-time analytics and reporting</li>
              <li>Provide personalized learning recommendations</li>
              <li>Enable seamless collaboration between students and mentors</li>
            </ul>
            <h4>Proposed Technologies:</h4>
            <ul>
              <li>Frontend: React.js, Tailwind CSS</li>
              <li>Backend: Node.js, Express.js</li>
              <li>Database: MongoDB</li>
              <li>Additional: WebSocket for real-time features</li>
            </ul>
            <h4>Timeline:</h4>
            <ul>
              <li>Phase 1 (Weeks 1-2): Design & Architecture</li>
              <li>Phase 2 (Weeks 3-6): Development</li>
              <li>Phase 3 (Weeks 7-8): Testing & Deployment</li>
            </ul>
          </div>
        </section>

        <section className="review-section">
          <h3>Your Review</h3>
          
          <div className="review-decision">
            <label>Review Decision *</label>
            <div className="decision-options">
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="decision" 
                  value="approved"
                  checked={reviewDecision === 'approved'}
                  onChange={(e) => setReviewDecision(e.target.value)}
                />
                <span className="decision-label approved">✅ Approve Proposal</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="decision" 
                  value="revision_requested"
                  checked={reviewDecision === 'revision_requested'}
                  onChange={(e) => setReviewDecision(e.target.value)}
                />
                <span className="decision-label revision">🔄 Request Revision</span>
              </label>
              <label className="radio-option">
                <input 
                  type="radio" 
                  name="decision" 
                  value="rejected"
                  checked={reviewDecision === 'rejected'}
                  onChange={(e) => setReviewDecision(e.target.value)}
                />
                <span className="decision-label rejected">❌ Reject Proposal</span>
              </label>
            </div>
          </div>

          <div className="review-comments">
            <label htmlFor="comments">Comments / Feedback *</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              placeholder="Provide detailed feedback and comments for the student..."
              rows="8"
            />
            <span className="char-count">{comments.length} / 1000 characters</span>
          </div>

          <div className="review-actions">
            <button 
              className="btn-primary"
              onClick={handleSubmitReview}
            >
              Submit Review
            </button>
            <button 
              className="btn-secondary"
              onClick={() => setShowEvaluation(!showEvaluation)}
            >
              {showEvaluation ? 'Hide' : 'Show'} Evaluation Form
            </button>
          </div>

          {showEvaluation && (
            <div className="evaluation-preview">
              <p className="info-note">Use the Evaluation Form tab to conduct rubric-based assessment</p>
            </div>
          )}
        </section>
      </div>
    </div>
  )
}
