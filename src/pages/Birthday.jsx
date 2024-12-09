// <<<<<<< HEAD
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Link } from "react-router-dom";
// =======
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// >>>>>>> 29eea1e3b6b85685670537fed6cc04f46c373fb2

function Birthday() {
  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">Birthday Specials</h1>
      <div className="row">
        {/* Card 1 */}
        <div className="col-md-4 mb-4">
            <Link to={'/birthday/BirthdayCake'} className="text-decoration-none text-dark">
            <div className="card border-none shadow">
              <img
                src="https://handletheheat.com/wp-content/uploads/2015/03/Best-Birthday-Cake-with-milk-chocolate-buttercream-SQUARE.jpg"
                className="card-img-top"
                alt="Birthday Cake"
                style={{ objectFit: 'cover', height: '250px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-center ">Birthday Cake</h5>
              </div>
            </div>
            </Link>
          </div>


        {/* Card 2 */}
        <div className="col-md-4 mb-4">
          <Link to={'/birthday/Accessories'} className="text-decoration-none text-dark">
          <div className="card border-none shadow">
            <img
              src="https://images4.alphacoders.com/134/1345708.png"
              className="card-img-top"
              alt="Birthday Cake"
              style={{ objectFit: 'cover', height: '250px' }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Birthday Accessories</h5>
            </div>
          </div>
          </Link>
        </div>

        {/* Card 3 */}
        <div className="col-md-4 mb-4">
          <Link to={'/birthday/Venue'} className="text-decoration-none text-dark">
          <div className="card border-none shadow">
            <img
              src="https://blog.venuelook.com/wp-content/uploads/2019/05/birthday-venue.jpg"
              className="card-img-top"
              alt="Birthday Cake"
              style={{ objectFit: 'cover', height: '250px' }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Birthday Venue</h5>
            </div>
          </div>
          </Link>
        </div>

        {/* Card 4 */}
        <div className="col-md-4 mb-4">
          <Link to={'/birthday/Services'} className="text-decoration-none text-dark">
          <div className="card border-none shadow">
            <img
              src="https://media.istockphoto.com/id/1380516073/photo/female-party-planner-arranging-decorations-for-a-child-birthday-party.jpg?s=612x612&w=0&k=20&c=7LWTCxgrl-8VmX8J0YToQU69_HJeBhj47ufevbxQtFU="
              className="card-img-top"
              alt="Birthday Cake"
              style={{ objectFit: 'cover', height: '250px' }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Services</h5>
            </div>
          </div>
          </Link>
        </div>

        {/* Card 5 */}
        <div className="col-md-4 mb-4">
          <Link to={'/birthday/Gifts'} className="text-decoration-none text-dark">
          <div className="card border-none shadow">
            <img
              src="https://cityfurnish.com/blog/wp-content/uploads/2023/07/wrapped-gift-box-with-shiny-gold-decoration-generated-by-ai-min-1200x900.jpg"
              className="card-img-top"
              alt="Birthday Cake"
              style={{ objectFit: 'cover', height: '250px' }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Gifts</h5>
            </div>
          </div>
          </Link>
        </div>

        {/* Card 6 */}
        <div className="col-md-4 mb-4">
          <Link to={'/birthday/Costumes'} className="text-decoration-none text-dark">
          <div className="card border-none shadow">
            <img
              src="https://staranddaisy.in/wp-content/uploads/2022/04/204627fsd.jpg"
              className="card-img-top"
              alt="Birthday Cake"
              style={{ objectFit: 'cover', height: '250px' }}
            />
            <div className="card-body">
              <h5 className="card-title text-center">Birthday Costumes</h5>
            </div>
          </div>
          </Link>
        </div>


      </div>
    </div>
  );
}

export default Birthday;
