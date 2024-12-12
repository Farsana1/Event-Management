import React from 'react'
import { FaSignInAlt, FaUserPlus, FaSignOutAlt } from 'react-icons/fa';
import './Header.css';
import Logo from './Logo';

function HomeHeader({ isLogged }) {
  return (
    <header className="header">
    <div className="logo">
      <Logo />
    </div>
    
  </header>
  )
}


export default HomeHeader
