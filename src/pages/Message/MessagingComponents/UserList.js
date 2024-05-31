import React from 'react';
import dummyUsers from './dummyUsers';
import './UsersList.css';

const UsersList = ({ onUserSelect }) => {
  return (
    <div className="users-list">
      {dummyUsers.map((user) => (
        <div key={user.id} className="user-card" onClick={() => onUserSelect(user)}>
          <img src={user.profilePicture} alt={user.name} className="profile-picture" />
          <div className="user-info">
            <div className="user-name">{user.name}</div>
            <div className="user-status">{user.status}</div>
            <div className="last-message">{user.lastMessage}</div>
            <div className="last-message-time">{user.lastMessageTime}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
