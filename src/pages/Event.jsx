import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';
import Image1 from '../assets/images/birthday.jpg';
import './Event.css';

const Event = () => {
  const location = useLocation();
  const title = location.state;
  const [eventCategories, setEventCategories] = useState([
    {
      name: 'Decorations',
      items: [
        { id: 1, name: 'Balloons', image: Image1, description: 'Colorful balloons for decoration', price: 100 },
        { id: 2, name: 'Streamers', image: Image1, description: 'Bright streamers for decoration', price: 50 }
      ]
    },
    {
      name: 'Food',
      items: [
        { id: 3, name: 'Cake', image: Image1, description: 'Delicious birthday cake', price: 500 },
        { id: 4, name: 'Snacks', image: Image1, description: 'Various snacks for guests', price: 200 }
      ]
    }
  ]);
  const [newItem, setNewItem] = useState({ name: '', image: null, description: '', price: '', category: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewItem({ ...newItem, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setNewItem({ ...newItem, image: URL.createObjectURL(file) });
  };

  const handleAddNewItem = () => {
    const updatedCategories = eventCategories.map(category => {
      if (category.name === newItem.category) {
        return { ...category, items: [...category.items, { ...newItem, id: Date.now(), price: Number(newItem.price) }] };
      }
      return category;
    });
    setEventCategories(updatedCategories);
    setNewItem({ name: '', image: null, description: '', price: '', category: '' });
    setIsModalOpen(false); // Close modal after adding item
  };

  const handleEditItem = (item) => {
    setEditingItem(item);
    setNewItem({ ...item, category: eventCategories.find(category => category.items.some(i => i.id === item.id)).name });
    setIsModalOpen(true); // Open modal for editing
  };

  const handleSaveEdit = () => {
    const updatedCategories = eventCategories.map(category => {
      if (category.name === newItem.category) {
        return { ...category, items: category.items.map(item => item.id === editingItem.id ? { ...newItem, id: item.id } : item) };
      }
      return category;
    });
    setEventCategories(updatedCategories);
    setNewItem({ name: '', image: null, description: '', price: '', category: '' });
    setEditingItem(null);
    setIsModalOpen(false); // Close modal after saving edit
  };

  const handleDeleteItem = (itemId) => {
    const updatedCategories = eventCategories.map(category => ({
      ...category,
      items: category.items.filter(item => item.id !== itemId)
    }));
    setEventCategories(updatedCategories);
  };

  return (
    <div className="event-page">
      <h2>{title} Event</h2>
      <div className="event-categories">
        {eventCategories.map((category) => (
          <div key={category.name} className="category">
            <h3>{category.name}</h3>
            <div className="items">
              {category.items.map((item) => (
                <div key={item.id} className="item-box">
                  {item.image && <img src={item.image} alt={item.name} />}
                  <h4>{item.name}</h4>
                  <p>{item.description}</p>
                  <button className='event-btn' onClick={() => handleEditItem(item)}><FaEdit /> Edit</button>
                  <button className='event-btn' onClick={() => handleDeleteItem(item.id)}><FaTrash /> Delete</button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <>
        <button className='add-btn event-btn' onClick={() => setIsModalOpen(true)}><FaPlus /> Add New Item</button>
        {isModalOpen && (
          <div className="modal">
            <div className="modal-content">
              <h3>{editingItem ? 'Edit Item' : 'Add New Item'}</h3>
              <input type="text" name="name" placeholder="Item Name" value={newItem.name} onChange={handleInputChange} />
              <input type="file" name="image" onChange={handleFileChange} />
              <input type="text" name="description" placeholder="Description" value={newItem.description} onChange={handleInputChange} />
              <input type="number" name="price" placeholder="Price" value={newItem.price} onChange={handleInputChange} />
              <select name="category" value={newItem.category} onChange={handleInputChange}>
                <option value="">Select Category</option>
                {eventCategories.map((category) => (
                  <option key={category.name} value={category.name}>{category.name}</option>
                ))}
              </select>
              <button className='event-btn' onClick={editingItem ? handleSaveEdit : handleAddNewItem}>{editingItem ? 'Save Changes' : 'Add Item'}</button>
              <button className='event-btn' onClick={() => setIsModalOpen(false)}>Cancel</button>
            </div>
          </div>
        )}
      </>
    </div>
  );
};

export default Event;
