import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark p-3">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav" >
        <ul class="navbar-nav " >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="./" style={{color:'white' , marginRight:'70px'}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#events" style={{color:'white' , marginRight:'70px'}}>Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery" style={{color:'white' , marginRight:'70px'}}>Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about" style={{color:'white' , marginRight:'70px'}}>About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact" style={{color:'white' , marginRight:'70px'}}>Contact</a>
          </li>
        </ul>
        <div className='ms-5'>
         <Link to={'/loginregister'}> <button className='btn btn-primary'>Login</button></Link>
        </div>
      </div>
    </div>
  </nav>

  )
}

export default Header