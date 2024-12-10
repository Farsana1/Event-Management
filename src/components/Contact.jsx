import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-content">
        <h2>Contact Us</h2>
        <p>
          Have questions or need assistance? We’d love to hear from you. Feel free to reach out to us using the form below or through our contact details.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="contact-details">
          <p>Email: contact@eventmanager.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Event Street, City, Country</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
