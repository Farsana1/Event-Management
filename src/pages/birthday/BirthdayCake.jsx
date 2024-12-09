// import React from 'react'

import { faHeart } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function BirthdayCake() {
    return (
        <>
            <div className="container py-5">
                <h1 className="text-center mb-4">Cakes</h1>
                <div className="row">
                    {/* Card 1 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://m.media-amazon.com/images/I/51CEQ7QOJ4L.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center ">Designer Chocolate Cake</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                    {/* Card 2 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://m.media-amazon.com/images/I/71O+v5XL4bL.jpg"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Choco Nilla Cake</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTxPpjEQLeG69e8uBWMQnLI4sofQ4hzU8lD_6dh_Un1Oia2568BX0zU-opECLX4KGte0ehYDoU9ywz3bZ13tXcja-0hRJ1pem5aZslDtn4"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Fudge Brownie Cake</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 4 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT3OtH8ix5PnV7KZOZALD7Vtktf9vfYS1O-FLB3CuugdKN_hnSXzSwwMo1LDMK_4KuA2ed5TTKkov60-7JIsDxiii2aQxZ29dgJ_vpNszde"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Rainbow Truffle Cake</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 5 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSjvouHXfchjw7qijFBeV_mp4vXBo1YVDv3HEvcieaCPD5lhsHKm7LthFY8BQKRh3e-8HgMfPf-H7ZbVt1h5FzD2z3XYAFVYf_8mzYETnWq"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Special Butterscotch Cake</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>

                    {/* Card 6 */}
                    <div className="col-md-4 mb-4">
                        <div className="card border-none shadow">
                            <img
                                src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR1BUjyMpTkJkndPHVULaLxiBWwUIZv0iiRHqFS6lqp0nq_VAPCSkwJqhequu5KDdpaSXT0Nc06rp_KYv8q8NX8QRrJvMeD6Q"
                                className="card-img-top"
                                alt="Birthday Cake"
                                style={{ objectFit: 'cover', height: '250px' }}
                            />
                            <div className="card-body d-flex justify-content-between align-items-center">
                                <h5 className="card-title text-center">Black Forest Cake</h5>
                                <FontAwesomeIcon icon={faHeart} className="fa-xl" style={{color: "#ff0000",}} />
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </>
    )
}

export default BirthdayCake