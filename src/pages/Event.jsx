import React, { useState } from 'react';
import './Event.css';

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

  const handleAddEvent = () => {
    setEvents([...events, { ...newEvent, id: Date.now() }]);
    setNewEvent({
      title: '',
      venue: '',
      costumes: '',
      catering: '',
      photography: '',
      priceRange: ''
    });
    setIsModalOpen(false); // Close modal after adding event
  };

  return (
    <div className="event-page">
      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
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
              <button className="event-btn" onClick={handleAddEvent}>
                Add Event
              </button>
              <button
                className="event-btn close-btn mt-3"
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
