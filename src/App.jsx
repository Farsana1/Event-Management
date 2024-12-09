import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wedding from './pages/Wedding'
import Birthday from './pages/Birthday'
import LoginRegister from './pages/LoginRegister'
import BirthdayCake from './pages/birthday/BirthdayCake'
import Accessories from './pages/birthday/Accessories'
import Venue from './pages/birthday/Venue'
import Services from './pages/birthday/Services'
import Gifts from './pages/birthday/Gifts'
import Costumes from './pages/birthday/Costumes'

function App() {
  // js code

  return (
    <>
      {/* jsx content */}
      <Header/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/wedding' element={<Wedding/>}/>
        <Route path='/birthday' element={<Birthday/>}/>
        <Route path='/loginregister' element={<LoginRegister/>}/>
        <Route path='/birthday/BirthdayCake' element={<BirthdayCake/>}/>
        <Route path='/birthday/Accessories' element={<Accessories/>}/>
        <Route path='/birthday/Venue' element={<Venue/>}/>
        <Route path='/birthday/Services' element={<Services/>}/>
        <Route path='/birthday/Gifts' element={<Gifts/>}/>
        <Route path='/birthday/Costumes' element={<Costumes/>}/>
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
