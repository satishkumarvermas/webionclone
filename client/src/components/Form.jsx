import React, { useState } from 'react';
import Card from "./Card";

const Form = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    phone: '',
    course: '',
    status: 'Unplaced'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({
      name: '',
      role: '',
      email: '',
      phone: '',
      course: '',
      status: 'Unplaced'
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="form-container">
      <h2>Fill This Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              type="text"
              name="role"
              value={formData.role}
              onChange={handleChange}
              placeholder="Enter your role"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              required
            />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Course:</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="React Basics">React Basics</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="JavaScript Fundamentals">JavaScript Fundamentals</option>
              <option value="Advanced CSS">Advanced CSS</option>
              <option value="Backend Development">Backend Development</option>
            </select>
          </div>
          <div className="form-group">
            <label>Status:</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="Unplaced">Unplaced</option>
              <option value="Placed">Placed</option>
            </select>
          </div>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>

      
    </div>
  );
};

export default Form;
