import React, { useState } from 'react';
import './Event.css';
import axios from 'axios';
import { serverUrl } from '../server';


const Event = () => {
  const [events, setEvents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEvent, setNewEvent] = useState({
    title: '',
    venue: '',
    costumes: '',
    catering: '',
    photography: '',
    priceRange: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

 
  const handleAdd = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    if (!newEvent.title || !newEvent.venue || !newEvent.costumes || !newEvent.catering || !newEvent.photography || !newEvent.priceRange) {
      alert('Please fill out all fields before submitting.');
      return;
    }  
    try {
      const response = await axios.post(`${serverUrl}/event`, newEvent); // Assuming your backend endpoint is at '/events'
      console.log('Event added successfully:', response.data);
      setEvents([...events, response.data]); // Update the UI with the saved event from backend
      setNewEvent({
        title: '',
        venue: '',
        costumes: '',
        catering: '',
        photography: '',
        priceRange: ''
      });
      setIsModalOpen(false); // Close the modal
    } catch (error) {
      console.error('Error adding event:', error);
      alert('Failed to add event. Please try again.');
    }
  };
  
  
  return (
    <div className="event-page mb-5 pb-5">
      <button className="add-btn btn p-3 btn-warning" onClick={() => setIsModalOpen(true)}>
        Add Event Package
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>Add Event Package</h3>
            <input
              type="text"
              name="title"
              placeholder="Event Title"
              value={newEvent.title}
              onChange={handleInputChange}
            />
            <textarea
              name="venue"
              placeholder="Venue Details"
              value={newEvent.venue}
              onChange={handleInputChange}
            />
            <textarea
              name="costumes"
              placeholder="Costume Recommendations"
              value={newEvent.costumes}
              onChange={handleInputChange}
            />
            <textarea
              name="catering"
              placeholder="Catering Menu"
              value={newEvent.catering}
              onChange={handleInputChange}
            />
            <textarea
              name="photography"
              placeholder="Photography Details"
              value={newEvent.photography}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="priceRange"
              placeholder="Price Range (e.g., ₹65,000 - ₹80,000)"
              value={newEvent.priceRange}
              onChange={handleInputChange}
            />
            <div>
              <button className="event-btn btn btn-warning me-3" onClick={handleAdd}>
                Add Event
              </button>
              <button
                className="event-btn close-btn btn btn-warning"
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Event Cards */}
      <div className="event-cards mt-5">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>Event Package: {event.title}</h3>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Costumes:</strong> {event.costumes}</p>
            <p><strong>Catering:</strong> {event.catering}</p>
            <p><strong>Photography:</strong> {event.photography}</p>
            <p><strong>Price Range:</strong> {event.priceRange}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;
