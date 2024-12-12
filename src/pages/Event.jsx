import React, { useState, useEffect } from 'react';
import './Event.css';
import { fetchEvents, addEvent, updateEvent, deleteEvent } from '../components/EventApi';

const Event = () => {
  const username = localStorage.getItem('username'); // Retrieve username from local storage

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
  const [isEditing, setIsEditing] = useState(false);
  const [editingEventId, setEditingEventId] = useState(null);

  useEffect(() => {
    const loadEvents = async () => {
      try {
        const events = await fetchEvents();
        setEvents(events);
      } catch (error) {
        alert('Failed to fetch events. Please try again later.');
      }
    };

    loadEvents();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEvent({ ...newEvent, [name]: value });
  };

  const handleAddOrEdit = async (e) => {
    e.preventDefault();
    if (!newEvent.title || !newEvent.venue || !newEvent.costumes || !newEvent.catering || !newEvent.photography || !newEvent.priceRange) {
      alert('Please fill out all fields before submitting.');
      return;
    }

    try {
      if (isEditing) {
        // Update the event
        const updatedEvent = await updateEvent(editingEventId, newEvent);
        setEvents(events.map((event) => (event.id === editingEventId ? updatedEvent : event)));
      } else {
        // Add a new event
        const addedEvent = await addEvent(newEvent);
        setEvents([...events, addedEvent]);
      }

      setNewEvent({
        title: '',
        venue: '',
        costumes: '',
        catering: '',
        photography: '',
        priceRange: ''
      });

      setIsModalOpen(false);
      setIsEditing(false);
      setEditingEventId(null);
    } catch (error) {
      alert('Failed to save event. Please try again.');
    }
  };

  const handleEdit = (event) => {
    setNewEvent(event);
    setIsEditing(true);
    setEditingEventId(event.id);
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await deleteEvent(id);
        setEvents(events.filter((event) => event.id !== id));
      } catch (error) {
        alert('Failed to delete event. Please try again.');
      }
    }
  };

  return (
    <div className="event-page mb-5 pb-5">
      <button className="add-btn" onClick={() => setIsModalOpen(true)}>
        {isEditing ? 'Edit Event Package' : 'Add Event Package'}
      </button>

      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h3>{isEditing ? 'Edit Event Package' : 'Add Event Package'}</h3>
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
              type="number"
              name="priceRange"
              placeholder="Price Range (e.g., ₹65,000 - ₹80,000)"
              value={newEvent.priceRange}
              onChange={handleInputChange}
            />
            <div>
              <button className="event-btn" onClick={handleAddOrEdit}>
                {isEditing ? 'Update Event' : 'Add Event'}
              </button>
              <button
                className="event-btn close-btn mt-3"
                onClick={() => {
                  setIsModalOpen(false);
                  setIsEditing(false);
                  setNewEvent({
                    title: '',
                    venue: '',
                    costumes: '',
                    catering: '',
                    photography: '',
                    priceRange: ''
                  });
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="event-cards mt-5">
        {events.map((event) => (
          <div key={event.id} className="event-card">
            <h3>Event Package: {event.title}</h3>
            <p><strong>Venue:</strong> {event.venue}</p>
            <p><strong>Costumes:</strong> {event.costumes}</p>
            <p><strong>Catering:</strong> {event.catering}</p>
            <p><strong>Photography:</strong> {event.photography}</p>
            <p><strong>Price Range:</strong> {event.priceRange}</p>
         
              <button className="btn" onClick={() => handleEdit(event)}>Edit</button>
              <button className="btn" onClick={() => handleDelete(event.id)}>Delete</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Event;