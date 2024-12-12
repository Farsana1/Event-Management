import house0 from "../assets/images/house-0.jpg";
import house1 from "../assets/images/house-1.jpeg";
import house2 from "../assets/images/house-2.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { serverUrl } from "../server";

const HouseWarming = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [status,setstatus] = useState('')
  const images = [house0, house1, house2];

  // Fetch event data from the backend
  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get(`${serverUrl}/event`);
        setEvents(response.data); // Assuming the backend sends an array of events
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching events:", error);
        setIsLoading(false);
      }
    };

    fetchEvents();
  }, [setstatus]);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-4">House Warming Packages</h1>
      {isLoading ? (
        <p className="text-center">Loading events...</p>
      ) : events.length > 0 ? (
        <div className="row">
          {events.map((event, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card border-none shadow">
                <img
                  src={images[index % images.length]}// Dynamically set the image path
                  className="card-img-top"
                  alt={event.title}
                  style={{ objectFit: "cover", height: "250px" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{event.title}</h5>
                  <p className="card-text">
                    <strong>Venue:</strong> {event.venue}
                  </p>
                  <p className="card-text">
                    <strong>Costume:</strong> {event.costumes}
                  </p>
                  <p className="card-text">
                    <strong>Catering:</strong> {event.catering}
                  </p>
                  <p className="card-text">
                    <strong>Photography:</strong> {event.photography}
                  </p>
                  <p className="card-text">
                    <strong>Price:</strong> {event.priceRange}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">No packages available yet.</p>
      )}
    </div>

  );
};

export default HouseWarming;