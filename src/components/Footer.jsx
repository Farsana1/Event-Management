import { faFacebook, faInstagram, faTwitter, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


function Footer() {
  return (
    <>
      <div className='p-5 bg-dark w-100'>
        <div className="container-fluid">
          {/* logo */}
          <div className="row w-100">
            <div className="col-md-3">

            </div>
            <div className="col-md-6">
            <p className='text-light text-center'>Planning a full event has never been easier! Events is an ISO 9001:2015 Certified Event Management Company based in Kerala, India, offering various services to make your events stress-free and memorable. From premium corporate events and destination wedding planning to small-scale birthday parties and private gatherings, you can be sure we have it all covered. With offices in Kochi, Thrissur, Calicut, and Trivandrum, we specialize in weddings, corporate events, private parties, and occasions specifically for Keralites and Malayalees.</p>
            </div>
            <div className="col-md-3">

            </div>
          </div>

          <div className="row w-100">
          <div className="col-md-3 mt-5 text-light text-center">
              <h2>Quick Links</h2>
              <ul className='list-unstyled'>
                <li>Home</li>
                <li>About</li>
                <li>Events</li>
                <li>Gallery</li>
                <li>Contact</li>
              </ul>
            </div>

            <div className="col-md-3 mt-5 text-light text-center">
            <h2>Services</h2>
              <ul className='list-unstyled'>
                <li>Events</li>
                <li>wedding Planner</li>
                <li>Music & Entertainments</li>
                <li>Private Parties</li>
                <li>Destination Wedding</li>
              </ul>
            </div>

            <div className="col-md-3 mt-5 text-light text-center">
            <h2>Other Links</h2>
              <ul className='list-unstyled'>
                <li>Blog</li>
                <li>Testimonials</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>

            <div className="col-md-3 mt-5 text-light text-center">
              <h2>Stay Connected</h2>
              <div className='mt-3'>
                <form>
                  <input type="email" name='email' placeholder='Email address' className='form-control' />
                  <button type="submit" className='btn btn-success w-50 ms-4'>Submit</button>
                </form>
                <div className='mt-4 d-flex align-items-center justify-content-between'>
                <FontAwesomeIcon icon={faWhatsapp} className='fa-2x'/>
                <FontAwesomeIcon icon={faInstagram} className='fa-2x'/>
                <FontAwesomeIcon icon={faYoutube} className='fa-2x' />
                <FontAwesomeIcon icon={faFacebook} className='fa-2x'/>
                <FontAwesomeIcon icon={faTwitter} className='fa-2x'/>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer