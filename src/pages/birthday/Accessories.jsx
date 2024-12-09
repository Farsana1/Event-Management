// import React from 'react'

import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Accessories() {
  return (
    <>
      <div className="container py-5">
                <h1 className="text-center mb-4">Birthday Accessories</h1>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://thumbs.dreamstime.com/b/pink-purple-balloons-flying-heart-shape-formation-white-background-109983922.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center ">Bithday Balloons</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT5Ktm_OalU_ukf_l7xdeEhwgTCGN0M2QS6VwG-VWiodw_JtVQUjN2ZGa-dnwzmbFnXxlnU7RV9cjioa2SYOe03Q2zzZfO79P9Fafv62zEVr1HkvSIRwhkQbg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Bithday Hat</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://www.bigbasket.com/media/uploads/p/xxl/40257004_1-cherishxcom-happy-birthday-letters-cursive-banner-for-girls-boys-husband-wife-women-gold.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Bithday Letters</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcStn8yeT9QY91AgUtkHfQdF2FGTXNRzSOB0lAfBnjm752FI9IUCf5Ij8wY6WeYhBlLGIoyWGSn1OzGRamwxlf9-7Zl2dUn_-OrvET5vl8FVzRDPNIuVIBk8"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Bithday Candles</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    


                </div>
            </div>
    </>
  )
}

export default Accessories