import React, { useState, useEffect } from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';
import './Notification.css';

const NotificationIcon = () => {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchNotifications();
    const interval = setInterval(fetchNotifications, 30000); // Refresh every 30 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const fetchNotifications = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/notifications');
      setNotifications(response.data);
      const unread = response.data.filter(notification => !notification.read).length;
      setUnreadCount(unread);
    } catch (error) {
      console.error('Error fetching notifications:', error);
    }
  };

  const markAsRead = async () => {
    try {
      await axios.post('http://localhost:8080/api/notifications/read');
      fetchNotifications();
      setUnreadCount(0);
    } catch (error) {
      console.error('Error marking notifications as read:', error);
    }
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      markAsRead();
    }
  };

  return (
    <div className="notification-icon-container">
      <div className="icon-container" onClick={toggleDropdown}>
        <NotificationsIcon />
        {unreadCount > 0 && <span className="badge">{unreadCount}</span>}
      </div>
      {isOpen && (
        <div className="dropdown">
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
      )}
    </div>
  );
};

export default NotificationIcon;
