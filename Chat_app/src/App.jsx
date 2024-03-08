import { useState } from 'react'
import './App.css'
import MainContainer from './components/MainContainer'
import Login from './components/Login'
import { Route, Routes } from 'react-router-dom'
import Welcome from './components/Welcome'
import ChatArea from './components/ChatArea'
import CreateGroups from './components/CreateGroups'
import Users from './components/Users'
import Groups from './components/Groups'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        {/* <MainContainer/> */}
        {/* <Login/> */}
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='app' element={<MainContainer/>}>
                  <Route path='welcome' element={<Welcome/>}></Route>
                  <Route path='chat' element={<ChatArea/>}></Route>
                  <Route path='users' element={<Users/>}></Route>
                  <Route path='groups' element={<Groups/>}></Route>
                  <Route path='create-groups' element={<CreateGroups/>}></Route>
            </Route>
        </Routes>
      </div>
    </>
  )
}

export default App
 