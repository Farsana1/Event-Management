// import React from 'react'

import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Venue() {
  return (
    <>
      <div className="container py-5">
                <h1 className="text-center mb-4">Birthday Venues</h1>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://damikeleillagio.com/wp-content/uploads/elementor/thumbs/Birthday-party-venues-Queens-qqcdckdg6xeqeo2ck9vzakwfbe9wgi632kvf43s1ag.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center ">OutDoor Villa</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://hizonscatering.com/wp-content/uploads/2022/03/406807182_850626353423357_1943597951273458861_n.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">InDoor WhiteHouse</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/60da576b8b440e12699c9263/ecf992ff-4de5-4a26-891a-2a3645dd75c4/ovation+1.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Party Auditorium</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://www.ballyburren.com/wp-content/uploads/2020/03/decorations-1000x565.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Childrens Forest</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://www.partystar.com.au/images/function/3048a-1x.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Classic Birthday Venue</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://i.pinimg.com/736x/3f/c2/0a/3fc20a39b388a463acb6333cccab4fb4.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Celebrations Inn</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
    </>
  )
}

export default Venue