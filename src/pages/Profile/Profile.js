// src/components/Profile.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';


const Profile = () => {
  return (
    <>
    <div className='bg'>
      <Navbar/>
      <section>
      <div className="profile-container">
      <div className="profile-header">
        <img src="https://lh3.googleusercontent.com/a/AGNmyxZfCcMLiyXv38eTEFbO5QEXA_9n-qF9Xb_CqPqlOQ=s96-c" alt="Profile" className="profile-image" />
        <div className="profile-details">
          <h1>Bandini Kohare</h1>
          <p><FontAwesomeIcon icon={faBriefcase} /> Software Engineer at ABC Corp</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Chandrapur</p>
          <p><FontAwesomeIcon icon={faGraduationCap} /> RTMNU University</p>
        </div>
      </div>
      <div className="profile-content">
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.</p>
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer</h3>
          <p>ABC Corp | Jan 2020 - Present</p>
          <p>Responsibilities included...</p>
        </div>
        <div className="experience-item">
          <h3>Intern</h3>
          <p>XYZ Inc | Jun 2019 - Dec 2019</p>
          <p>Responsibilities included...</p>
        </div>
      </div>
    </div>
      </section>
    </div>
    </>
  );
};

export default Profile;
