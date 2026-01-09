import '../styles/Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">React Vite App</h1>
        <nav className="nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
