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
            const HousewarmingEvent = response.data.filter(event => event.type === 'housewarming');
    
            setEvents(HousewarmingEvent); // Assuming the backend sends an array of events
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
          <h1 className="text-center mb-4" style={{ fontWeight: "bold", color: "#6c63ff" }}>
            Birthday Packages
          </h1>
          {isLoading ? (
            <p className="text-center" style={{ color: "#555", fontStyle: "italic" }}>
              Loading events...
            </p>
          ) : events.length > 0 ? (
            <div className="row">
              {events.map((event, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <div
                    className="card shadow-lg"
                    style={{
                      border: "none",
                      borderRadius: "20px",
                      overflow: "hidden",
                      backgroundColor: "#fdfdfd",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      cursor: "pointer",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.05)";
                      e.currentTarget.style.boxShadow = "0px 15px 30px rgba(0,0,0,0.2)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow = "0px 10px 20px rgba(0,0,0,0.1)";
                    }}
                  >
                    <div style={{ position: "relative" }}>
                      <img
                        src={images[index % images.length]}
                        alt={event.title}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "250px",
                        }}
                      />
                      <div
                        style={{
                          position: "absolute",
                          bottom: 0,
                          left: 0,
                          width: "100%",
                          background: "rgba(0,0,0,0.6)",
                          color: "#fff",
                          padding: "10px 15px",
                          textAlign: "center",
                        }}
                      >
                        <h5>{event.title}</h5>
                      </div>
                    </div>
                    <div className="card-body" style={{ padding: "20px", textAlign: "center" }}>
                      <p className="card-text mb-2">
                        <strong>Venue:</strong> {event.venue}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Costume:</strong> {event.costumes}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Catering:</strong> {event.catering}
                      </p>
                      <p className="card-text mb-2">
                        <strong>Photography:</strong> {event.photography}
                      </p>
                      <p className="card-text mb-4" style={{ fontWeight: "bold", color: "#6c63ff" }}>
                        Price: {event.priceRange}
                      </p>
                    
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center" style={{ color: "#555", fontStyle: "italic" }}>
              No packages available yet.
            </p>
          )}
        </div>
    
      );
    };
    
    export default HouseWarming;

  // Fetch event data from the backend
 
/* 
export default HouseWarming; */