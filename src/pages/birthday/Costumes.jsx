// import React from 'react'

import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Costumes() {
  return (
    <>
      <div className="container py-5">
                <h1 className="text-center mb-4">Birthday Costumes</h1>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRICJERJDSL3WvLFTVzBApjCAAGmt2ZyWgBpG0hf3F99AsYqBBtEG7hjW65pcSkgnhHzbrAX7RHAEOTgDETYFPIg2UPX0ZJOIx2DEpUAnldcmR3OAeHHKKyog&usqp=CAE"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center ">Princess Costume</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://images.meesho.com/images/products/425819515/1tfir_512.webp"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Batman Costume</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://i.pinimg.com/236x/c1/e2/bb/c1e2bb95cde14e1d44d2a9839ce19c31.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Pink Fork</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://i0.wp.com/boxycolonial.com/wp-content/uploads/2017/10/supermansmall-1.jpg?resize=705%2C1058"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Superman Costume</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://babybeauandbelle.com/cdn/shop/files/Ezra-Blue-Suit-4-Piece_0330_570x570.jpg?v=1720725650"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Baby Dress</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://images.faverie.com/cb:Twin~42e91/w:auto/h:auto/q:mauto/f:best/id:438799098b1178bea34729dfbacfae6b/https://www.faverie.com/woman-posing-standing-terrace-dress.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Green Slim</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    </>
  )
}

export default Costumes