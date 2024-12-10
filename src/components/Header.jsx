import React from 'react';
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import Logo from './Logo';

const Header = ({ isLogged }) => {
  return (
    <header className="header">
     {/*  <div className="logo">
        <Logo />
      </div>
      <nav className="nav">
        <ul>
          {isLogged ? (
            <>
              <li>
                <button className="logout-button">
                  <FaSignOutAlt /> <span>Logout</span>
                </button>
              </li>
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
      </nav> */}
    </header>
  );
};

export default Header;
