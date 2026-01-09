import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './layouts/Layout'
import Login from './pages/Login'
import StudentDashboard from './pages/student/Dashboard'
import FacultyDashboard from './pages/faculty/Dashboard'
import './styles/App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/student/dashboard" element={<StudentDashboard />} />
          <Route path="/faculty/dashboard" element={<FacultyDashboard />} />
        </Route>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  )
}

export default App
