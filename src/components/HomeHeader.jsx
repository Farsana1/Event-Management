import React from 'react';
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import Logo from './Logo';
import { Link, useNavigate } from 'react-router-dom';

function HomeHeader({ isLogged }) {
  const navigate = useNavigate();
  const username = localStorage.getItem('username');
  const handleLogout = () => {
    localStorage.removeItem('username');
  };

  const handleLogin = () => {
    navigate('/loginregister#'); // Redirect to the login page
  };

  return (
    <header className="header">
      <div className="logo">
        <Logo />
      </div>
      <nav className="nav">
        <ul>
          {username ? (
            <>
              <Link to={'/'}>
                <li>
                  <button className="logout-button" onClick={handleLogout}>
                    <FaSignOutAlt /> <span>Logout</span>
                  </button>
                </li>
              </Link>
            </>
          ) : (
            <>
              <li>
                <button className="login-button" onClick={handleLogin}>
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
  );
}

export default HomeHeader;
