// src/components/Profile.js
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faGraduationCap, faMapMarkerAlt, faCheckCircle, faEdit, faSave, faEnvelope, faPhone, faIdCard } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Profile.css';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

const Profile = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    name: 'Bandini Kohare',
    jobTitle: 'Software Engineer at ABC Corp',
    location: 'Chandrapur',
    education: 'RTMNU University',
    about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum.',
    mobile: '123-456-7890',
    email: 'bandini.kohare@example.com',
    aadhar: '1234-5678-9012',
    github: 'https://github.com/bandinikohare',
    linkedin: 'https://linkedin.com/in/bandinikohare',
    experience: [
      {
        role: 'Software Engineer',
        company: 'ABC Corp',
        period: 'Jan 2020 - Present',
        responsibilities: 'Responsibilities included...'
      },
      {
        role: 'Intern',
        company: 'XYZ Inc',
        period: 'Jun 2019 - Dec 2019',
        responsibilities: 'Responsibilities included...'
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const handleExperienceChange = (index, e) => {
    const { name, value } = e.target;
    const updatedExperience = profile.experience.map((item, i) =>
      i === index ? { ...item, [name]: value } : item
    );
    setProfile({ ...profile, experience: updatedExperience });
  };

  return (
    <>
      <div className='bg'>
        <Navbar />
        <section className='sec'>
          <div className="profile-container">
            <div className="profile-header">
              <img src="https://lh3.googleusercontent.com/a/AGNmyxZfCcMLiyXv38eTEFbO5QEXA_9n-qF9Xb_CqPqlOQ=s96-c" alt="Profile" className="profile-image" />
              <div className="profile-details">
                {editMode ? (
                  <input type="text" name="name" value={profile.name} onChange={handleChange} />
                ) : (
                  <h1>{profile.name} <FontAwesomeIcon icon={faCheckCircle} className="verified" /></h1>
                )}
                <p>
                  <FontAwesomeIcon icon={faBriefcase} />
                  {editMode ? (
                    <input type="text" name="jobTitle" value={profile.jobTitle} onChange={handleChange} />
                  ) : (
                    profile.jobTitle
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  {editMode ? (
                    <input type="text" name="location" value={profile.location} onChange={handleChange} />
                  ) : (
                    profile.location
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faGraduationCap} />
                  {editMode ? (
                    <input type="text" name="education" value={profile.education} onChange={handleChange} />
                  ) : (
                    profile.education
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faPhone} />
                  {editMode ? (
                    <input type="text" name="mobile" value={profile.mobile} onChange={handleChange} />
                  ) : (
                    profile.mobile
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faEnvelope} />
                  {editMode ? (
                    <input type="email" name="email" value={profile.email} onChange={handleChange} />
                  ) : (
                    profile.email
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faIdCard} />
                  {editMode ? (
                    <input type="text" name="aadhar" value={profile.aadhar} onChange={handleChange} />
                  ) : (
                    profile.aadhar
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faGithub} />
                  {editMode ? (
                    <input type="text" name="github" value={profile.github} onChange={handleChange} />
                  ) : (
                    <a href={profile.github} target="_blank" rel="noopener noreferrer">{profile.github}</a>
                  )}
                </p>
                <p>
                  <FontAwesomeIcon icon={faLinkedin} />
                  {editMode ? (
                    <input type="text" name="linkedin" value={profile.linkedin} onChange={handleChange} />
                  ) : (
                    <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">{profile.linkedin}</a>
                  )}
                </p>
              </div>
              <button onClick={() => setEditMode(!editMode)}>
                <FontAwesomeIcon icon={editMode ? faSave : faEdit} />
              </button>
            </div>
            <div className="profile-content">
              <h2>About</h2>
              {editMode ? (
                <textarea name="about" value={profile.about} onChange={handleChange}></textarea>
              ) : (
                <p>{profile.about}</p>
              )}
              <h2>Experience</h2>
              {profile.experience.map((item, index) => (
                <div className="experience-item" key={index}>
                  <h3>
                    {editMode ? (
                      <input type="text" name="role" value={item.role} onChange={(e) => handleExperienceChange(index, e)} />
                    ) : (
                      item.role
                    )}
                  </h3>
                  <p>
                    {editMode ? (
                      <>
                        <input type="text" name="company" value={item.company} onChange={(e) => handleExperienceChange(index, e)} />
                        <input type="text" name="period" value={item.period} onChange={(e) => handleExperienceChange(index, e)} />
                      </>
                    ) : (
                      `${item.company} | ${item.period}`
                    )}
                  </p>
                  <p>
                    {editMode ? (
                      <textarea name="responsibilities" value={item.responsibilities} onChange={(e) => handleExperienceChange(index, e)}></textarea>
                    ) : (
                      item.responsibilities
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
         <div><Footer/></div>
        </section>
      </div>
    </>
  );
};

export default Profile;
