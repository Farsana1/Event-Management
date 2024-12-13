import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // We'll use an external stylesheet for custom styles.

function LandingPage() {
  return (
    <>
      <div className="container-fluid w-100" style={{ backgroundColor: '#f4f4f9' }}>
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
              <div className="carousel-image-overlay">
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
            </div>

            {/* Slide 2 */}
            <div className="carousel-item">
              <div className="carousel-image-overlay">
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
            </div>

            {/* Slide 3 */}
            <div className="carousel-item">
              <div className="carousel-image-overlay">
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
      <div className="container mt-5" id='events'>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <h2 className="text-center text-primary">Wedding</h2>
            <Card className="card-event shadow-lg">
              <Card.Img
                variant="top"
                src="https://i.pinimg.com/736x/1d/7f/fb/1d7ffb3a04caa25b01e8cc5153784b86.jpg"
                className="card-img"
              />
              <Card.Body>
                <Card.Text>
                  Your wedding day is a celebration of love, joy, and togetherness. Let us transform your dreams into a magical reality!
                </Card.Text>
                <div className='d-flex justify-content-center'>
                  <Link to={'/wedding'}>
                    <button className='btn btn-primary shadow rounded-pill'>About Packages</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <h2 className="text-center text-primary">Birthday</h2>
            <Card className="card-event shadow-lg">
              <Card.Img
                variant="top"
                src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU="
                className="card-img"
              />
              <Card.Body>
                <Card.Text>
                  Create cherished memories and laughter with your loved ones. Let us help you throw a fun and unforgettable birthday party!
                </Card.Text>
                <div className='d-flex justify-content-center'>
                  <Link to={'/birthday'}>
                    <button className='btn btn-primary shadow rounded-pill'>About Packages</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>

          <div className="col-md-3">
            <h2 className="text-center text-primary">House Warming</h2>
            <Card className="card-event shadow-lg">
              <Card.Img
                variant="top"
                src="https://images.squarespace-cdn.com/content/v1/5b953d9f70e80221c4a23ed0/ad1a5343-899c-4d80-a62d-9e327fcda5be/_C1_6363-Edit.JPG"
                className="card-img"
              />
              <Card.Body>
                <Card.Text>
                  Celebrate the start of new memories in your dream home. Let us create a cherished housewarming moment for you.
                </Card.Text>
                <div className='d-flex justify-content-center'>
                  <Link to={'/housewarming'}>
                    <button className='btn btn-primary shadow rounded-pill'>About Packages</button>
                  </Link>
                </div>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="container mt-5 p-5" id="contact">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-primary">Eventify Events</h2>
            <p className="mt-4" style={{ textAlign: 'justify' }}>
              Let Eventify® bring your dream events to life! We offer professional event planning and management across Kerala, using creative methods to curate memorable and hassle-free celebrations.
            </p>
            <p>Contact us today to make your vision a reality!</p>
          </div>
          <div className="col-md-6 p-5">
            <form>
              <input type="text" placeholder="Your Name" className="form-control w-75 mt-3" />
              <input type="email" placeholder="Your Email" className="form-control w-75 mt-3" />
              <select name="Event Type" className="form-select w-75 mt-3">
                <option value="Wedding">Wedding</option>
                <option value="Birthday">Birthday</option>
                <option value="House Warming">House Warming</option>
                <option value="Engagement">Engagement</option>
              </select>
              <input type="date" className="form-control w-75 mt-3" />
              <input type="number" placeholder="Number of Guests" className="form-control w-75 mt-3" min={1} />
              <button type="button" className="btn btn-warning w-50 mt-4" style={{ marginLeft: '10%' }}>
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
