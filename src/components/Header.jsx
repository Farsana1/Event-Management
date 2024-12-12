import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from './Logo';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary bg-dark p-3">
      <div className="logo">
    <Logo />
  </div>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white', marginRight: '70px' }}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/#events"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white', marginRight: '70px' }}
              >
                Events
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/#gallery"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white', marginRight: '70px' }}
              >
                Gallery
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/#about"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white', marginRight: '70px' }}
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/#contact"
                className="nav-link"
                activeClassName="active"
                style={{ color: 'white', marginRight: '70px' }}
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <div className="ms-5">
            {/* <Link to="/loginregister">
              <button className="btn btn-primary">Login</button>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;