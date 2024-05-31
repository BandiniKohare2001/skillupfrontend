import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import './ChatHeader.css';

const ChatHeader = ({ userName, onBack }) => {
  return (
    <div className="chat-header">
      <ArrowBackIcon className="back-icon" onClick={onBack} />
      <span className="user-name">{userName}</span>
    </div>
  );
};

export default ChatHeader;
