import '../../styles/StudentDashboard.css'

import React, { useState } from 'react'
import '../../styles/StudentDashboard.css'

export default function StudentDashboard() {
  const [currentDate] = useState(new Date())

  // Mock data for weekly progress
  const weeklyProgress = [
    { week: 'Week 1', status: 'Submitted', date: 'Mar 4, 2024', remarks: 'Good start' },
    { week: 'Week 2', status: 'Submitted', date: 'Mar 11, 2024', remarks: 'Keep it going' },
    { week: 'Week 3', status: 'Submitted', date: 'Mar 18, 2024', remarks: 'Needs improvement' },
  ]

  // Mock data for calendar
  const calendarDays = Array.from({ length: 30 }, (_, i) => i + 1)
  const currentMonth = 'Sep'
  const currentYear = '2025'

  return (
    <div className="ph-dashboard-container">
      {/* Main Content Area */}
      <div className="ph-main-content">

        {/* Top Banner */}
        <div className="ph-banner">
          <div className="ph-banner-content">
            <div className="ph-banner-text">
              <h2>Project Monitoring System</h2>
              <p>Group 2</p>
            </div>
            <div className="ph-welcome-text">
              <h1>Hello Team!</h1>
            </div>
          </div>
          <button className="ph-banner-btn">View Project Details</button>
        </div>

        {/* Message Widget */}
        <div className="ph-message-widget">
          <div className="ph-message-content">
            <h3>Create Message</h3>
            <p>Create a new Message</p>
          </div>
          <button className="ph-add-btn">+</button>
        </div>

        {/* Weekly Progress */}
        <div className="ph-section-container ph-progress-section">
          <div className="ph-section-header">
            <h3>Weekly Progress</h3>
            <button className="ph-text-btn">Submit Weekly update</button>
          </div>
          <div className="ph-table-container">
            <table className="ph-table">
              <thead>
                <tr>
                  <th>Week</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Guide Remarks</th>
                </tr>
              </thead>
              <tbody>
                {weeklyProgress.map((row, index) => (
                  <tr key={index}>
                    <td>{row.week}</td>
                    <td>
                      <span className="ph-status">
                        <span className="ph-status-dot"></span> {row.status} <span className="ph-check">✓</span>
                      </span>
                    </td>
                    <td>{row.date}</td>
                    <td>{row.remarks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Project Status Timeline */}
        <div className="ph-section-container ph-timeline-section">
          <h3>Project Status Timeline</h3>
          <div className="ph-timeline">
            <div className="ph-progress-bar">
              <div className="ph-progress-fill" style={{ width: '25%' }}></div>
            </div>
            <div className="ph-timeline-steps">
              <div className="ph-step active">
                <div className="ph-step-circle"></div>
                <span>Idea Selection</span>
              </div>
              <div className="ph-step active">
                <div className="ph-step-circle"></div>
                <span>Zeroth Presentation</span>
              </div>
              <div className="ph-step">
                <div className="ph-step-circle"></div>
                <span>First Presentation</span>
              </div>
              <div className="ph-step">
                <div className="ph-step-circle"></div>
                <span>Second Presentation</span>
              </div>
              <div className="ph-step">
                <div className="ph-step-circle"></div>
                <span>HOD Approval</span>
              </div>
              <div className="ph-step">
                <div className="ph-step-circle"></div>
                <span>Final Presentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Sidebar Area */}
      <div className="ph-right-sidebar">
        {/* Calendar Widget */}
        <div className="ph-calendar-widget">
          <div className="ph-calendar-header">
            <button className="ph-cal-nav">&lt;</button>
            <div className="ph-cal-current">
              <span>{currentMonth}</span>
              <span>{currentYear}</span>
            </div>
            <button className="ph-cal-nav">&gt;</button>
          </div>
          <div className="ph-calendar-grid">
            <div className="ph-cal-day-name">Su</div>
            <div className="ph-cal-day-name">Mo</div>
            <div className="ph-cal-day-name">Tu</div>
            <div className="ph-cal-day-name">We</div>
            <div className="ph-cal-day-name">Th</div>
            <div className="ph-cal-day-name">Fr</div>
            <div className="ph-cal-day-name">Sa</div>

            {/* Simple Placeholders for calendar days */}
            {Array.from({ length: 5 }).map((_, i) => <div key={`empty-${i}`} className="ph-cal-day empty"></div>)}
            {calendarDays.slice(0, 30).map(day => (
              <div key={day} className={`ph-cal-day ${day === 9 ? 'active' : ''} ${day === 13 ? 'highlight' : ''}`}>
                {day}
              </div>
            ))}
          </div>
        </div>

        {/* Notification Widget */}
        <div className="ph-notification-widget">
          <h3>Notification</h3>
          <div className="ph-notification-area">
            {/* Empty state or list can go here */}
          </div>
        </div>
      </div>
    </div>
  )
}
