import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import Form from './components/Form';
import Card from './components/Card';
import Notes from './components/Notes';
import LearnHub from './components/LearnHub';
import axios from 'axios';
import './styles.css';

const App = () => {
  const [students, setStudents] = useState([]);
  const navigate = useNavigate();

  // Calculate statistics
  const totalStudents = students.length;
  const placedStudents = students.filter(student => student.status === 'Placed').length;
  const unplacedStudents = totalStudents - placedStudents;

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get('http://localhost:5000/students');
        setStudents(response.data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };
    fetchStudents();
  }, []);

  const addStudent = async (student) => {
    try {
      const newStudent = { ...student, id: new Date().getTime() };
      const response = await axios.post('http://localhost:5000/students', newStudent);
      setStudents((prevStudents) => [...prevStudents, response.data]);
    } catch (error) {
      console.error('Error adding student:', error);
    }
  };

  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/students/${id}`);
      setStudents(students.filter((student) => student.id !== id));
    } catch (error) {
      console.error('Error deleting student:', error);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="app">
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo-container">
            <Link to="/LearnHub" className="logo">LearnHub</Link>
          </div>
          <button
            className="admin-btn"
            onClick={() => {
              navigate('/');
              scrollToTop();
            }}
          >
            Admin
          </button>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Form onSubmit={addStudent} />
              <div className="cards-container">
                {students.map((student) => (
                  <Card
                    key={student.id}
                    student={student}
                    onDelete={deleteStudent}
                  />
                ))}
              </div>
            </>
          }
        />
        <Route path="/notes" element={<Notes />} />
        <Route
          path="/learnhub"
          element={
            <LearnHub
              totalStudents={totalStudents}
              placedStudents={placedStudents}
              unplacedStudents={unplacedStudents}
            />
          }
        />
      </Routes>

      <footer className="footer">
        <div className="footer-content">
          <h1>LearnHub</h1>
          <p>© 2022 LearnHub Inc. All rights reserved.</p>
          <div className="footer-links">
            <Link to="/" className="footer-link" onClick={scrollToTop}>
              Form
            </Link>
            <Link to="/notes" className="footer-link">
              Notes
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;