import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Wedding from "./pages/Wedding";
import HouseWarming from "./pages/HouseWarming";
import Birthday from "./pages/Birthday";
import LoginRegister from "./pages/LoginRegister";
import { useState } from "react";
import Event from "./pages/Event";
import WeddingEve from "./pages/WeddingEve";
import LandingPage from "./pages/LandingPage";
import HomeHeader from "./components/HomeHeader";
import HousewarmingEve from "./pages/HousewarmingEve";

function App() {

  // State for login status
  const [isLogged, setIsLogged] = useState(false);
  const username = localStorage.getItem('username');
 
  return (
    <>
      <div>
        <Routes>
          {/* Routes with Default Header and Footer */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <LandingPage />
                <Footer />
              </>
            }
          />
          <Route
            path="/wedding"
            element={
              <>
                <Header />
                <Wedding />
                <Footer />
              </>
            }
          />
          <Route
            path="/birthday"
            element={
              <>
                <Header />
                <Birthday />
                <Footer />
              </>
            }
          />
          <Route
            path="/housewarming"
            element={
              <>
                <Header />
                <HouseWarming />
                <Footer />
              </>
            }
          />
          <Route
            path="/loginregister"
            element={
              <>
                {/* <Header /> */}
                <LoginRegister  setIsLogged={setIsLogged}  />
                <Footer />
              </>
            }
          />


          {/* Routes with HomeHeader and HomeFooter */}
          <Route
            path="/home"
            element={
              <>
                <HomeHeader isLogged={isLogged}/>
                <Home  setIsLogged={setIsLogged} isLogged={isLogged}   />
               {/*  <HomeFooter /> */}
              </>
            }
          />
          <Route
            path="/birthdayeve"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Event />
              {/*   <HomeFooter /> */}
              </>
            }
          />
             <Route
            path="/weddingeve"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <WeddingEve/>
              {/*   <HomeFooter /> */}
              </>
            }
          />
                 <Route
            path="/housewarmingeve"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <HousewarmingEve/>
              {/*   <HomeFooter /> */}
              </>
            }
          />
        </Routes>


        
      </div>
    </>
  );
}

export default App;
