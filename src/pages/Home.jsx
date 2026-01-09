import '../styles/Home.css'

export default function Home() {
  return (
    <section className="home">
      <div className="hero">
        <h2>Welcome to React + Vite</h2>
        <p>A fast and modern way to build React applications</p>
        <p className="features-intro">Features:</p>
        <ul className="features-list">
          <li>⚡ Instant server start</li>
          <li>🔄 Lightning fast HMR (Hot Module Replacement)</li>
          <li>📦 Pre-configured build setup</li>
          <li>🎯 Optimal performance</li>
        </ul>
      </div>
    </section>
  )
}
