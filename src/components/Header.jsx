import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <nav class="navbar navbar-expand-lg bg-body-tertiary bg-dark p-3">
    <div class="container-fluid" style={{position:'sticky'}}>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse justify-content-center" id="navbarNav" >
        <ul class="navbar-nav " >
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#" style={{color:'white' , marginRight:'70px'}}>Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'white' , marginRight:'70px'}}>Events</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'white' , marginRight:'70px'}}>Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'white' , marginRight:'70px'}}>About Us</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" style={{color:'white' , marginRight:'70px'}}>Contact</a>
          </li>
        </ul>      
      </div>
    </div>
  </nav>

  )
}

export default Header