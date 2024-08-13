
import './App.css'
import {Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Chat from './pages/Chat'
function App() {

  return (
    <>
    <div className='App' >
<Routes>
    <Route path='/' Component={Home}  />
    <Route path='/chat' Component={Chat}  />
</Routes>
    </div>
    </>
  )
}

export default App
