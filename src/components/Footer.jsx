import React from 'react';
import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4 text-center text-md-start">
            <h2 className="text-warning">Eventify</h2>
            <p>
              Planning a full event has never been easier! We specialize in weddings, private parties, and occasions specifically for Keralites and Malayalees.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-2 mb-4 text-center">
            <h5 className="text-warning">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#home" className="text-light text-decoration-none">Home</a></li>
              <li className="mb-2"><a href="#about" className="text-light text-decoration-none">About</a></li>
              <li className="mb-2"><a href="#events" className="text-light text-decoration-none">Events</a></li>
              <li className="mb-2"><a href="#gallery" className="text-light text-decoration-none">Gallery</a></li>
              <li className="mb-2"><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4 text-center">
            <h5 className="text-warning">Services</h5>
            <ul className="list-unstyled">
              <li className="mb-2">Wedding Planner</li>
              <li className="mb-2">Birthday Planner</li>
              <li className="mb-2">House Warming</li>
            </ul>
          </div>

          {/* Stay Connected */}
          <div className="col-md-3 text-center">
            <h5 className="text-warning">Stay Connected</h5>
            <div className="social-icons d-flex justify-content-center mt-3">
              <a href="#" className="text-light mx-2" title="WhatsApp">
                <FontAwesomeIcon icon={faWhatsapp} size="2x" />
              </a>
              <a href="#" className="text-light mx-2" title="Instagram">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a href="#" className="text-light mx-2" title="YouTube">
                <FontAwesomeIcon icon={faYoutube} size="2x" />
              </a>
              <a href="#" className="text-light mx-2" title="Facebook">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="#" className="text-light mx-2" title="Twitter">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="row mt-4">
          <div className="col text-center">
            <p className="mb-0">&copy; {new Date().getFullYear()} Eventify. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
