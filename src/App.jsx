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
import Wedeve from "./pages/Wedeve"
import Houseve from "./pages/Houseve"
import Birtheve from "./pages/Birtheve"
import LandingPage from "./pages/LandingPage";
import HomeHeader from "./components/HomeHeader";

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
                <LoginRegister setIsLogged={setIsLogged} />
                <Footer />
              </>

            }
          />

          {/* Routes with HomeHeader and HomeFooter */}
          <Route
            path="/home"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Home setIsLogged={setIsLogged} isLogged={isLogged} />
                {/*  <HomeFooter /> */}
              </>
            }
          />
          <Route
            path="/wedeve"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Wedeve />
                {/*   <HomeFooter /> */}
              </>
            }
          />
          <Route
            path="/birtheve"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Birtheve />
                {/*   <HomeFooter /> */}
              </>
            }
          />
          <Route
            path="/houseve"
            element={
              <>
                <HomeHeader isLogged={isLogged} />
                <Houseve/>
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
