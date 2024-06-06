import React, { useState, ChangeEvent } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import "../App.css";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    subject: '',
    message: '',
    contactInfo: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send email)
    console.log('Form submitted:', formData);
    // Reset form fields
    setFormData({
      name: '',
      date: '',
      subject: '',
      message: '',
      contactInfo: ''
    });
  };

  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
        <h5> Please provide your first and last name</h5>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
        <h5> Please select the current date</h5>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" name="date" value={formData.date} onChange={handleChange} />
        </div>
        <div className="form-group">
          <h5> Please select the category for your issue </h5>
          <label htmlFor="subject">Subject:</label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required>
            <option value=""></option>
            <option value="iPhone/iPad issue">iPhone/iPad issue</option>
            <option value="Computer Software issue">Computer Software issue</option>
            <option value="Computer Hardware issue">Computer Hardware issue</option>
            <option value="Unknown Computer issue">Unknown Computer issue</option>
          </select>
        </div>
        <div className="form-group">
        <h5> Please provide a brief description of what you would like to be repaired or serviced </h5>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} required></textarea>
        </div>
        <div className="form-group">
        <h5> Please leave your best form of contact (Phone # or Email) </h5>
          <label htmlFor="contactInfo">Contact Information:</label>
          <input type="text" id="contactInfo" name="contactInfo" value={formData.contactInfo} onChange={handleChange} />
        </div>
        <div className="button-container">
          <button type="submit" className="home-button">Send</button>
          <Link to="/" className="home-button"> <FontAwesomeIcon icon={faHome} /> Home</Link>
        </div>
      </form>
    </div>
  );
};

export default ContactPage;