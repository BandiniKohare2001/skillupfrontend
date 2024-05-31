import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import './NotificationsPage.css';

const NotificationsPage = () => {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetchNotifications();
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/notifications');
      setNotifications(response.data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  return (
   <>
   <div className='bg'>
    <Navbar/>

    <section className="main-content">
    <div className="profile-container">
      <div className="notifications-page">
        <h2>Notifications</h2>
        <div className="notifications-list">
          {notifications.length > 0 ? (
            notifications.map(notification => (
              <div key={notification.id} className={`notification-item ${notification.read ? 'read' : ''}`}>
                <img src={notification.profilePicture} alt="profile" className="profile-picture" />
                <div className="notification-text">
                  {notification.message}
                </div>
              </div>
            ))
          ) : (
            <div className="notification-item">No notifications</div>
          )}
        </div>
      </div>
      </div>
    </section>
   </div>
   </>
  );
};

export default NotificationsPage;
