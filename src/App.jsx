import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className="card">
        <p>{count}</p>
        <button onClick={() => setCount((count) => count + 1)}>
          inc
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          dec
        </button>
        
      </div>
    </div>
  )
}

export default App
