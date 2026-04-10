import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
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
      <img src={reactLogo} alt="React logo" className="bg-logo" />

      <div className="message-card">
        <p className="badge">React + Express</p>
        <h1>Backend Connection Test</h1>
        <p className="description">
          This page shows the message coming from the Express backend.
        </p>

        <div className="message-box">
          <span className="label">Backend message:</span>
          <p>{message || 'Loading message...'}</p>
        </div>
      </div>
    </div>
  )
}

export default App