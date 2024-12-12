import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <>
      <div className="container-fluid w-100" style={{ backgroundColor: 'black' }}>
        <div id="carouselExampleCaptions" className="carousel slide w-100 m-0 p-0">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner w-100">
            {/* Slide 1 */}
            <div className="carousel-item active w-100">
              <iframe
                className="d-block w-100"
                style={{ height: '90vh' }}
                src="https://www.youtube.com/embed/x7BaO75lKX0?autoplay=1&mute=1&loop=1&controls=0"
                title="Wedding Highlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="carousel-caption d-none d-md-block">
                <h5>Wedding</h5>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <iframe
                className="d-block w-100"
                style={{ height: '90vh' }}
                src="https://www.youtube.com/embed/25OUU5V8yGw?autoplay=1&mute=1&loop=1&controls=0"
                title="Birthday Highlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="carousel-caption d-none d-md-block">
                <h5>Birthday</h5>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <iframe
                className="d-block w-100"
                style={{ height: '90vh' }}
                src="https://www.youtube.com/embed/3dDPklGM7Mg?autoplay=1&mute=1&loop=1&controls=0"
                title="House Warming Highlight"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <div className="carousel-caption d-none d-md-block">
                <h5>House Warming</h5>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* Events Section */}
      <div className="container-fluid mt-5" id='events'>
        <div className="row w-100">
          <div className="col-md-2"></div>

          <div className="col-md-3">
            <h2 className="text-center">WEDDING</h2>
            <Card className="mt-4 card border-none shadow">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/736x/1d/7f/fb/1d7ffb3a04caa25b01e8cc5153784b86.jpg"
                style={{ width: '100%', height: '380px', borderRadius: '5px' }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <div className='d-flex justify-content-center'><Link to={'/wedding'}><button className=' btn btn-primary'>About packages</button></Link></div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <h2 className="text-center">BIRTHDAY</h2>
            <Card className="mt-4 card border-none shadow">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU="
                style={{ width: '100%', height: '380px', borderRadius: '5px' }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <div className='d-flex justify-content-center'><Link to={'/birthday'}><button className=' btn btn-primary'>About packages</button></Link></div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <h2 className="text-center">HOUSE WARMING</h2>
            <Card className="mt-4 card border-none shadow">
              <Card.Img
                variant="top"
                src="https://images.squarespace-cdn.com/content/v1/5b953d9f70e80221c4a23ed0/ad1a5343-899c-4d80-a62d-9e327fcda5be/_C1_6363-Edit.JPG"
                style={{ width: '100%', height: '380px', borderRadius: '5px' }}
              />
              <Card.Body>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <div className='d-flex justify-content-center'><Link to={'/housewarming'}><button className=' btn btn-primary'>About packages</button></Link></div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-1"></div>
        </div>

      </div>

      {/* Contact Section */}
      <div className="container mt-5 p-5">
        <div className="row">
          <div className="col-md-6">
            <h2 id='contact'>Eventify Events</h2>
            <p className="mt-4" style={{ textAlign: 'justify' }}>
              Imagine celebrating the most special events of your life without worrying about a single thing. Eventify®
              Events is here to make your dream events come true! Our expert event management team offers professional
              event planning and management services across Kerala, using creative methods to curate perfect,
              hassle-free celebrations that will captivate your attendees.
            </p>
            <p>Contact us today to bring your vision to life and create unforgettable memories!</p>
          </div>
          <div className="col-md-6 p-5">
            <form>
              <input type="text" placeholder="Enter your name" className="form-control w-75" />
              <input type="email" placeholder="Enter your mail ID" className="form-control w-75 mt-3" />
              <select name="Event type" className="form-select w-75 mt-3">
                <option value="">Wedding</option>
                <option value="">Birthday</option>
                <option value="">House Warming</option>
                <option value="">Engagement</option>
              </select>
              <input type="date" className="form-control w-75 mt-3" />
              <input type="number" placeholder="Number of Guests" className="form-control w-75 mt-3" min={1} />
              <button type="submit" className="btn btn-primary w-25 mt-4" style={{ marginLeft: '120px' }}>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

    </>
  );
}

export default LandingPage;
