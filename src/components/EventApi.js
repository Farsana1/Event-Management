import axios from 'axios';
import { serverUrl } from '../server';
export const fetchEvents = async () => {
  const username = localStorage.getItem('username'); 
  console.log(username);
  
  try {
    const response = await axios.get(`${serverUrl}/event?username=${username}`);
    return response.data; 
  } catch (error) {
    console.error('Error fetching events:', error);
    throw error;
  }
};

export const addEvent = async (newEvent) => {
  const username = localStorage.getItem('username'); 
  try {
    const response = await axios.post(`${serverUrl}/event`, { ...newEvent, username });
    return response.data;
  } catch (error) {
    console.error('Error adding event:', error);
    throw error;
  }
};


export const updateEvent = async (id, updatedEvent) => {
  const username = localStorage.getItem('username');
  try {
    const response = await axios.put(`${serverUrl}/event/${id}`, { ...updatedEvent, username });
    return response.data;
  } catch (error) {
    console.error('Error updating event:', error);
    throw error;
  }
};


export const deleteEvent = async (id) => {
  try {
    await axios.delete(`${serverUrl}/event/${id}`);
  } catch (error) {
    console.error('Error deleting event:', error);
    throw error;
  }
};
