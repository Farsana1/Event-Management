import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wedding from './pages/Wedding'
import Birthday from './pages/Birthday'
import HouseWarming from './pages/HouseWarming'
import { useState } from 'react'
import Event from './pages/Event'

function App() {
  // js code
  const [isLogged ,setIsLogged]=useState(false)

  return (
    <>
      {/* jsx content */}
      <Header isLogged = {isLogged} />
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wedding' element={<Wedding/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/housewarming' element={<HouseWarming />}/>
        <Route path='/eventmanage' element={<Event/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
