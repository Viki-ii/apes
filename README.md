# React + Vite Application!

A modern React application built with Vite for blazing fast development and optimal build performance.

## Features

- ⚡ **Vite** - Next generation frontend tooling
- ⚛️ **React 18** - Latest React with hooks
- 📦 **JavaScript** - No TypeScript complexity
- 🎨 **Organized Structure** - Components, Pages, Services, and Styles
- 🚀 **Hot Module Replacement** - Instant updates during development
- 📱 **Responsive Design** - Mobile-friendly styling

## Project Structure

```
apes/
├── public/                 # Static assets
├── src/
│   ├── components/         # Reusable React components
│   │   ├── Header.jsx
│   │   └── Button.jsx
│   ├── pages/              # Page components
│   │   └── Home.jsx
│   ├── services/           # API and utility functions
│   │   ├── api.js
│   │   └── utils.js
│   ├── styles/             # CSS stylesheets
│   │   ├── index.css
│   │   ├── App.css
│   │   ├── Header.css
│   │   ├── Home.css
│   │   └── Button.css
│   ├── App.jsx             # Root component
│   └── main.jsx            # Entry point
├── index.html              # HTML template
├── package.json            # Project dependencies
├── vite.config.js          # Vite configuration
└── README.md               # This file
```

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
   ```bash
   cd apes
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

The application will open in your browser at `http://localhost:5173`

### Build

Build for production:
```bash
npm run build
```

The optimized build will be in the `dist/` directory.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Folder Guide

### `/src/components`
Reusable React components that can be used across multiple pages.

Example:
```jsx
// Header.jsx - Navigation header component
// Button.jsx - Reusable button component
```

### `/src/pages`
Page-level components that represent different routes/views of the application.

Example:
```jsx
// Home.jsx - Home page
```

### `/src/services`
API calls and utility functions.

- `api.js` - HTTP requests (fetch, post, update, delete)
- `utils.js` - Helper functions (formatting, validation, etc.)

### `/src/styles`
CSS files for styling components and pages.

- `index.css` - Global styles
- `App.css` - App component styles
- `Header.css` - Header component styles
- `Home.css` - Home page styles
- `Button.css` - Button component styles

## How to Use

### Creating a New Component

1. Create a file in `/src/components`:
   ```jsx
   // src/components/Card.jsx
   import '../styles/Card.css'
   
   export default function Card({ title, children }) {
     return (
       <div className="card">
         <h3>{title}</h3>
         {children}
       </div>
     )
   }
   ```

2. Add corresponding styles in `/src/styles/Card.css`

3. Import and use in your app:
   ```jsx
   import Card from './components/Card'
   
   <Card title="My Card">
     <p>Content here</p>
   </Card>
   ```

### Creating a New Page

1. Create a file in `/src/pages`:
   ```jsx
   // src/pages/About.jsx
   export default function About() {
     return (
       <section className="about">
         <h2>About Us</h2>
         <p>Page content</p>
       </section>
     )
   }
   ```

2. Add styles in `/src/styles/About.css`

### Using API Services

```jsx
import { fetchData, postData } from '../services/api'

// Fetch data
const response = await fetchData('/api/users')

// Post data
const newUser = await postData('/api/users', { name: 'John' })
```

### Using Utility Functions

```jsx
import { formatDate, capitalize, debounce } from '../services/utils'

const formatted = formatDate(new Date())
const name = capitalize('john') // 'John'
const debouncedSearch = debounce(handleSearch, 500)
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling
- **JavaScript ES6+** - Programming language

## Tips

- Keep components small and focused
- Use services for API and shared logic
- Organize styles by component
- Use semantic HTML
- Keep the public folder for static assets like images and fonts

## License

This project is open source and available under the MIT License.

## Support

For questions or issues, check the official documentation:
- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
