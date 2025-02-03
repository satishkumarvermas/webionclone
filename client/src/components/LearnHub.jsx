import React from "react";
import "../LearnHub.css";

const LearnHub = ({ totalStudents, placedStudents, unplacedStudents }) => {
  return (
    <div>
      <div className="hero">
        <h1>Learn from the best, be your best..</h1>
        <p>Give yourself an upgrade with our inspiring online courses and join a global community of learners</p>
        <button className="get-started-btn">Get Started</button>
      </div>

      <div className="partners">
        <h2>Our Placement Partners</h2>
        <div className="partners-logos">
          <img src="https://i.im.ge/2025/02/02/HSP5LC.airbnb.png" alt="Airbnb" />
          <img src="https://i.im.ge/2025/02/02/HStqoW.client-8.png" alt="Grabyo" />
          <img src="https://i.im.ge/2025/02/02/HSt1Of.Lifegroups.png" alt="Life Groups" />
          <img src="https://i.im.ge/2025/02/02/HStTU4.myob.png" alt="MYOB" />
          <img src="https://i.im.ge/2025/02/02/HSPARW.tailus.png" alt="Tailus" />
          <img src="https://i.im.ge/2025/02/02/HSPyjr.microsoft.png" alt="Microsoft" />
          <img src="https://i.im.ge/2025/02/02/HSPET0.coty.png" alt="Coty" />
          <img src="https://i.im.ge/2025/02/02/HSPxUT.lilly.png" alt="Lilly" />
        </div>
        <button className="more-companies-btn">and, more companies</button>
      </div>

      <div className="details">
        <p>Open Source Theme and UI Components</p>
        <h1>Geaux Astro helps you craft beautiful websites efficiently</h1>
      </div>

      <section className="feature-section">
        <div className="feature-content">
          <div className="feature-item">
            <div className="feature-icon-container">
              <img className="feature-icon" src="https://i.im.ge/2025/02/02/HStSZr.medal.png" alt="Certificate Distribution" />
            </div>
            <div className="feature-description">
              <h3>Certificate Distribution</h3>
              <p>We offer certificates to validate and recognize your achievement.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-container">
              <img className="feature-icon" src="https://i.im.ge/2025/02/02/HStrsp.thought.png" alt="Knowledge" />
            </div>
            <div className="feature-description">
              <h3>Knowledge</h3>
              <p>We deliver transformative knowledge that empowers and inspires.</p>
            </div>
          </div>
          <div className="feature-item">
            <div className="feature-icon-container">
              <img className="feature-icon" src="https://i.im.ge/2025/02/02/HSPeWY.training.png" alt="Hands-on Experience" />
            </div>
            <div className="feature-description">
              <h3>Hands-on Experience</h3>
              <p>We provide hands-on experience for real-world learning. You learn best by doing.</p>
            </div>
          </div>
        </div>
        <div className="feature-image">
          <img src="https://i.im.ge/2025/02/02/HSP33c.AboutDashboard.png" alt="Dashboard Screenshot" />
        </div>
      </section>

<section className="student-stats">
        <div className="stats-intro">
          <h2>Empower your future with cutting-edge skills</h2>
          <h2>New, Embrace innovation, master technology, & shape the digital world</h2>
          <h2>Your journey to success starts here.</h2>
        </div>
        <div className="stats-content">
          <p>
            Join our course with a proven track record of success, where learning isn't just about gaining skills; 
            it's about growing them. Join us, learn with confidence, and watch your skills soar.
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Total Students</p>
              <p className="stat-value">{totalStudents}</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Placed Students</p>
              <p className="stat-value">{placedStudents}</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Unplaced Students</p>
              <p className="stat-value">{unplacedStudents}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LearnHub;
