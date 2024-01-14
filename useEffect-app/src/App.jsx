import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)


  const handleCount = () => {
    setCount((prevCount) => prevCount + 1)
  }


  useEffect(() => {
    window.addEventListener('resize', () => setScreenWidth(window.innerWidth))
    console.log('useEffect called')
    return () => {
      window.removeEventListener('resize', () => setScreenWidth(window.innerWidth))
      console.log('useEffect cleanup called') 
    }
  },[screenWidth])

  
 
  return (
    <>
      <div>
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleCount}>
          count is {count}
        </button>
        <p>Screen width: {screenWidth}</p>
      </div>
    </>
  )
}

export default App
