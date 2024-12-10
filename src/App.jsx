import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Wedding from './pages/Wedding';
import HouseWarming from './pages/HouseWarming';
import Birthday from './pages/Birthday';
import LoginRegister from './pages/LoginRegister';
import { useState } from 'react';
import Event from './pages/Event';
import Landingpage from './pages/Landingpage';
import HomeHeader from './components/HomeHeader';
import HomeFooter from './components/HomeFooter';
import BirthdayCake from './pages/birthday/BirthdayCake'
import Accessories from './pages/birthday/Accessories'
import Venue from './pages/birthday/Venue'
import Services from './pages/birthday/Services'
import Gifts from './pages/birthday/Gifts'
import Costumes from './pages/birthday/Costumes'

function App() {
  // State for login status
  const [isLogged, setIsLogged] = useState(true);

  return (
    <>
      <div>
        <Routes>
          {/* Routes with Default Header and Footer */}
          <Route
            path='/'
            element={
              <>
                <Header />
                <Landingpage />
                <Footer />
              </>
            }
          />
          <Route
            path='/wedding'
            element={
              <>
                <Header />
                <Wedding />
                <Footer />
              </>
            }
          />
          <Route
            path='/birthday'
            element={
              <>
                <Header />
                <Birthday />
                <Footer />
              </>
            }
          />
          <Route
            path='/housewarming'
            element={
              <>
                <Header />
                <HouseWarming />
                <Footer />
              </>
            }
          />
          <Route
            path='/loginregister'
            element={
              <>
                <Header />
                <LoginRegister />
                <Footer />
              </>
            }
          />

<Route path='/birthday/BirthdayCake' element={
  <>
  <Header />
  <BirthdayCake/>
  <Footer />
</>
  }/>
        <Route path='/birthday/Accessories' element={
          <>
          <Header />
          <Accessories/>
          <Footer />
        </>
         }/>
        <Route path='/birthday/Venue' element={
          <>
          <Header />
          <Venue/>
          <Footer />
        </>
         }/>
        <Route path='/birthday/Services' element={
          <>
          <Header />
          <Services/>
          <Footer />
        </>
          }/>
        <Route path='/birthday/Gifts' element={
          <>
          <Header />
          <Gifts/>
          <Footer />
        </>
          }/>
        <Route path='/birthday/Costumes' element={
          <>
          <Header />
          <Costumes/>
          <Footer />
        </>
          }/>


          {/* Routes with HomeHeader and HomeFooter */}
          <Route
            path='/home'
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Home />
                <HomeFooter />
              </>
            }
          />
          <Route
            path='/eventmanage'
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Event />
                <HomeFooter />
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
