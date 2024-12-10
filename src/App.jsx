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
