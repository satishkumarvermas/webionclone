import React from 'react';


const Card = ({ student, onDelete }) => {
  const { name, role, email, phone, course, status, id } = student;
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">{name.charAt(0)}</div>
        <h3>{name}</h3>
      </div>
      <div className="card-content">
        <p><strong>Role:</strong> {role}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone Number:</strong> {phone}</p>
        <p><strong>Course:</strong> {course}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
      <button 
        className="delete-btn"
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Card;
