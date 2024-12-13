import React from 'react';
import { Link } from 'react-router-dom';
import './EventList.css';

const EventList = () => {

    
  return (
    <section className="event-list">
      <h2 className="event-list-title">Our Events</h2>
      <div className="event-list-content">
        <div className="event-box event-box-1">
          <h3>Birthday Event</h3>
          <Link to="/birthdayeve" className="event-link" state={"Birthday"}>Explore</Link>
        </div>
        <div className="event-box event-box-2">
          <h3>Wedding Event</h3>
          <Link to="/weddingeve" className="event-link" state={"Wedding"}>Explore</Link>
        </div>
        <div className="event-box event-box-3">
          <h3>Housewarming Event</h3>
          <Link to="/housewarmingeve" className="event-link" state={"Housewarming"}>Explore</Link>
        </div>
      </div>
    </section>
  );
};

export default EventList;
