import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetch('http://localhost:3000/api/message')
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
  }, [])

  return (
    <div className="app">
      <p>Backend message: {message}</p>
    </div>
  )
}

export default App