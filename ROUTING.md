# React Router Setup Guide

## Overview

This application uses React Router v6 with a common layout pattern featuring a header and sidebar navigation.

## Routes

### Public Routes
- **`/login`** - Login page (no layout wrapper)
  - User type selection (Student/Faculty)
  - Email and password inputs
  - Demo credentials display

### Protected Routes (with Layout)
All routes below use the common `Layout` component with header and sidebar:

- **`/student/dashboard`** - Student Dashboard
  - View enrolled courses
  - Check grades and assignments
  - View schedule and messages
  - Recent activity feed

- **`/faculty/dashboard`** - Faculty Dashboard
  - Renders different components based on `assignedRole`
  - Available roles:
    - **instructor** - Standard instructor view
    - **admin** - Administrator view
    - **departmentHead** - Department head view

## Project Structure

```
src/
├── layouts/
│   ├── Layout.jsx           # Main layout with Outlet
│   ├── LayoutHeader.jsx     # Header with navigation
│   └── Sidebar.jsx          # Sidebar navigation
├── pages/
│   ├── Login.jsx            # Login page
│   ├── student/
│   │   └── Dashboard.jsx    # Student dashboard
│   └── faculty/
│       └── Dashboard.jsx    # Faculty dashboard (role-based)
├── components/
│   ├── faculty/
│   │   ├── InstructorView.jsx      # Instructor role view
│   │   ├── AdminView.jsx           # Admin role view
│   │   └── DepartmentHeadView.jsx  # Department head role view
│   └── ... (other components)
├── styles/
│   ├── Layout.css
│   ├── LayoutHeader.css
│   ├── Sidebar.css
│   ├── Login.css
│   ├── StudentDashboard.css
│   ├── FacultyDashboard.css
│   └── faculty/
│       ├── InstructorView.css
│       ├── AdminView.css
│       └── DepartmentHeadView.css
└── App.jsx                  # Router configuration
```

## Router Configuration

The router is configured in `App.jsx`:

```jsx
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
```

## Layout System

### Layout Component (`Layout.jsx`)
- Wraps dashboard routes with consistent header and sidebar
- Uses `<Outlet />` from React Router to render nested route components
- Provides navigation structure

### LayoutHeader Component (`LayoutHeader.jsx`)
- Fixed header with gradient background
- Logo/Dashboard link
- User welcome message
- Logout button

### Sidebar Component (`Sidebar.jsx`)
- Navigation links to all dashboard routes
- Active link highlighting
- Responsive design (converts to horizontal on mobile)

## Faculty Dashboard Role-Based Rendering

The Faculty Dashboard uses a role-based rendering pattern:

```jsx
// In src/pages/faculty/Dashboard.jsx
const [assignedRole] = useState('instructor') // instructor, admin, or departmentHead

const renderRoleSpecificComponent = () => {
  switch (assignedRole) {
    case 'admin':
      return <AdminView />
    case 'departmentHead':
      return <DepartmentHeadView />
    case 'instructor':
    default:
      return <InstructorView />
  }
}
```

To change the assigned role, simply update the state in the `Dashboard.jsx` file:

```jsx
const [assignedRole] = useState('admin') // Change to 'admin' or 'departmentHead'
```

## Navigation Usage

### Using Link Component
```jsx
import { Link } from 'react-router-dom'

<Link to="/student/dashboard">Go to Student Dashboard</Link>
```

### Using useNavigate Hook
```jsx
import { useNavigate } from 'react-router-dom'

const navigate = useNavigate()
navigate('/login') // Redirect to login
```

### Using useLocation Hook
```jsx
import { useLocation } from 'react-router-dom'

const location = useLocation()
const isActive = location.pathname === '/student/dashboard'
```

## Styling

Each component has corresponding CSS files with:
- Responsive design for mobile devices
- Hover effects and transitions
- Color-coded styling for different roles:
  - **Blue** (#646cff) - Instructor/Primary
  - **Red** (#ff6b6b) - Admin
  - **Green** (#33b466) - Department Head

## Key Features

✅ **Role-Based Components** - Faculty dashboard renders different views based on assigned role  
✅ **Persistent Layout** - Header and sidebar remain consistent across dashboard routes  
✅ **Active Link Highlighting** - Sidebar links highlight current page  
✅ **Responsive Navigation** - Sidebar adapts to mobile devices  
✅ **Demo Login** - Test with different user types  
✅ **Protected Routes** - Dashboard routes wrapped in common layout  

## Testing the Routes

1. **Start development server:**
   ```bash
   npm run dev
   ```

2. **Login page:**
   - Default route `/` redirects to `/login`
   - Select user type and enter credentials
   - Click "Login" to navigate to respective dashboard

3. **Student Dashboard:**
   - Shows courses, grades, assignments, schedule
   - Sidebar navigation available
   - Logout button in header

4. **Faculty Dashboard:**
   - Shows different content based on role
   - Change role in `src/pages/faculty/Dashboard.jsx`
   - Test Instructor, Admin, and Department Head views

## Future Enhancements

- Add actual authentication logic
- Implement protected route middleware
- Add role-based access control (RBAC)
- Create more faculty role variations
- Add breadcrumb navigation
- Implement user profile page
- Add real data from API services
