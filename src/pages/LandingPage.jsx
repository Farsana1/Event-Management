import React from 'react'
import Card from 'react-bootstrap/Card';

function LandingPage() {
  return (
    <>

      <div className='container-fluid w-100'>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.pexels.com/photos/6119578/pexels-photo-6119578.jpeg?cs=srgb&dl=pexels-soner-gorkem-9756539-6119578.jpg&fm=jpg" className=" w-100 " style={{height:'500px'}} alt="no image"/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Wedding</h5>
                </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>Birthday</h5>
                </div>
            </div>
            <div className="carousel-item">
              <img src="..." className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                  <h5>House Warming</h5>
                </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* events */}



        <div className='container-fluid mt-5'>
          <div class="row w-100">
           <div class="col-md-2">

            </div>

            <div className="col-md-3">
              <h2 className='text-center'>WEDDING</h2>
              <Card style={{ width: '100%' }} className='mt-4 card border-none shadow'>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/1d/7f/fb/1d7ffb3a04caa25b01e8cc5153784b86.jpg" style={{ width: '342px', height: '380px', borderRadius: '2px' }} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3">
              <h2 className='text-center'>BIRTHDAY</h2>
              <Card style={{ width: '100%' }} className='mt-4 card border-none shadow'>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU=" style={{ width: '342px', height: '380px', borderRadius: '5px' }} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>

            </div>
            <div className="col-md-3">
              <h2 className='text-center'>HOUSE WARMING</h2>
              <Card style={{ width: '100%' }} className='mt-4 card border-none shadow'>
                <Card.Img variant="top" src="https://i.pinimg.com/736x/1d/7f/fb/1d7ffb3a04caa25b01e8cc5153784b86.jpg" style={{ width: '342  px', height: '380px', borderRadius: '5px' }} />
                <Card.Body>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-1">
            </div>
          </div>
        </div>

        {/* contact section */}

        <div className='container mt-5 p-5'>
          <div className="row">
            <div className="col-md-6">
              <h2>Eventify Events</h2>
              <h4 className='mt-4'>Looking for the Most Creative &</h4>
              <h4>Innovative Event Planners</h4>
              <h4> in Kerala?</h4>
              <p className='mt-4' style={{ textAlign: 'justify' }}>Imagine celebrating the most special events of your life without worrying about a single thing. Eventify® Events is here to make your dream events come true! Our expert event management team offers professional event planning and management services in cities, villages, and small towns across Kerala, from south to north, using creative and innovative methods to plan and curate perfect, hassle-free celebrations that will captivate your attendees.</p>

              <p>Contact us today to bring your vision to life and create unforgettable memories!</p>

            </div>
            <div className="col-md-6 p-5 ">
              <form>
                <input type="text" placeholder='Enter your name' className='form-control w-75' />
                <input type="email" placeholder='Enter your mail Id' className='form-control w-75 mt-3' />
                <div>
                  <select name="EVent type" className='form-select w-75 mt-3'>
                    <option value="">Wedding</option>
                    <option value="">Birthday</option>
                    <option value="">House Warming</option>
                    <option value="">Engagement</option>
                    {/* others */}
                  </select>
                </div>
                <input type="date" placeholder='select your date' className='form-control w-75 mt-3' />
                <input type="number" placeholder='Number of Guests' className='form-control w-75 mt-3' min={1} />
              </form>
              <button type='submit' className='btn btn-primary w-25 mt-4' style={{ marginLeft: '120px' }}>Submit</button>
            </div>
          </div>


        </div>





      </div>


    </>
  )
}

export default LandingPage