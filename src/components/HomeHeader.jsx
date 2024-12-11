import React from 'react'
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import Logo from './Logo';
import { Link } from 'react-router-dom';


function HomeHeader({ isLogged }) {

  const HandleLogout = () => {
    localStorage.removeItem('username');
  }
 
  return (
    <header className="header">
    <div className="logo">
      <Logo />
    </div>
    <nav className="nav">
      <ul>
        {isLogged ? (
          <>
            
            <Link to={'/'}>
            <li>
                <button  className="logout-button" onClick={HandleLogout}>
                  <FaSignOutAlt /> <span>Logout</span>
                </button>
                </li>
            </Link>
           
          </>
        ) : (
          <>
            <li>
              <button className="login-button">
                <FaSignInAlt /> <span>Login</span>
              </button>
            </li>
            <li>
              <button className="register-button">
                <FaUserPlus /> <span>Register</span>
              </button>
            </li>
          </>
        )}
      </ul>
    </nav>
  </header>
  )
}


export default HomeHeader
