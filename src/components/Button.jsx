import '../styles/Button.css'

export default function Button({ text, onClick, variant = 'primary' }) {
  return (
    <button className={`btn btn-${variant}`} onClick={onClick}>
      {text}
    </button>
  )
}
