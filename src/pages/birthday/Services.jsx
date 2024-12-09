// import React from 'react'

import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Services() {
  return (
    <>
      <div className="container py-5">
                <h1 className="text-center mb-4">Birthday Services</h1>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://media.istockphoto.com/id/500592637/vector/happy-birthday-card-vinyl-illustration-background-02.jpg?s=612x612&w=0&k=20&c=ikOEtQqdADvCS5fcvZLWSsh9gAaGNw1k2VWbyYvd33U="
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center ">Music</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://experimedia.net/wp-content/uploads/2023/12/image-155-1024x701.jpeg.webp"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">DJ Party</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://media.istockphoto.com/id/906777508/photo/portrait-of-diverse-janitors.jpg?s=612x612&w=0&k=20&c=egjW49zTzRtNqvq1tCVYzmxq8SJW4GK0dRGaJ7aet90="
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Cleaning Services</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://img.freepik.com/premium-photo/buffet-food-catering-food-party-made-by-aiartificial-intelligence_41969-12071.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Food</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://www.captainjoe.in/blog/images/crafting-menu-that-caters-emotions.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">catering Service</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://media.istockphoto.com/id/1196172395/photo/in-the-photo-studio-with-professional-equipment-portrait-of-the-famous-photographer-holding.jpg?s=612x612&w=0&k=20&c=utO4aHRyA5ZUAYxbk9NelmhR1_E5-AOWUWcqDMP-NXE="
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">photographers</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    </>
  )
}

export default Services