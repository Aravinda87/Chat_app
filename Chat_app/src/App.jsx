import { useState } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <MainContainer/>
        {/* <Login/> */}
      </div>
    </>
  )
}

export default App
 