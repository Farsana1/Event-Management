
import React, { useState, useEffect } from 'react';
import './Event.css';
import { fetchEvents, addEvent, updateEvent, deleteEvent } from '../components/EventApi';
import HouseWarming from './HouseWarming';

function HousewarmingEve() {
    const username = localStorage.getItem('username'); // Retrieve username from local storage

    const [events, setEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newEvent, setNewEvent] = useState({
        type: 'housewarming',
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
                const events = await fetchEvents(); // Fetch all events from the database
                const weddingEvents = events.filter(event => event.type === 'housewarming'); // Filter events where name is 'wedding'
                setEvents(weddingEvents); // Set the filtered events
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
                type: 'housewarming',
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
        <>
        <div className="event-page">   
        <h1 className='text-center p-5'>Housewarming Events</h1>
       
        <div className="d-flex justify-content-center align-items-center w-100 h-100">
            <button
                className="add-btn p-3 btn rounded text-light btn-warning mt-2"
                onClick={() => setIsModalOpen(true)}
            >
                {isEditing ? 'Edit Event Package' : 'Add Event Package'}
            </button>
        </div>
    
        {isModalOpen && (
            <div className="modal">
                <div className="modal-content">
                    <h3 className='text-success'>{isEditing ? 'Edit Event Package' : 'Add Event Package'}</h3>
                    {/* Form inputs */}
                   
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
                        <button className="event-btn btn btn-warning p-2 me-3" onClick={handleAddOrEdit}>
                            {isEditing ? 'Update Event' : 'Add Event'}
                        </button>
                        <button
                            className="event-btn close-btn btn btn-warning p-2 me-3"
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
    
        {/* Event cards section */}
        <div className="container mt-5 text-dark">
            <div className="row g-4">
                {events.map((event) => (
                    <div key={event.id} className="col-lg-4 col-md-6">
                        <div className="event-card p-3 rounded shadow text-light">
                            <h3>Event Package: {event.title}</h3>
                            <p><strong>Venue:</strong> {event.venue}</p>
                            <p><strong>Costumes:</strong> {event.costumes}</p>
                            <p><strong>Catering:</strong> {event.catering}</p>
                            <p><strong>Photography:</strong> {event.photography}</p>
                            <p><strong>Price Range:</strong> {event.priceRange}</p>
    
                            <div className="d-flex justify-content-between">
                                <button className="btn btn-warning p-2" onClick={() => handleEdit(event)}>Edit</button>
                                <button className="btn btn-danger p-2" onClick={() => handleDelete(event.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
    </>
    );
};
export default HousewarmingEve;