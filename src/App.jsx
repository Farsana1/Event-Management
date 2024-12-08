import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wedding from './pages/Wedding'
import Birthday from './pages/Birthday'
import LoginRegister from './pages/LoginRegister'

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
    </Routes>
    <Footer/>
      
    </>
  )
}

export default App
