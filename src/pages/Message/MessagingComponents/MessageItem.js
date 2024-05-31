import React from 'react';
import './MessageItem.css';

const MessageItem = ({ message }) => {
  const { sender, text, timestamp } = message;

  return (
    <div className={`message-item ${sender === 'me' ? 'my-message' : 'their-message'}`}>
      <div className="message-content">
        <p className="message-text">{text}</p>
        <span className="message-timestamp">{new Date(timestamp).toLocaleTimeString()}</span>
      </div>
    </div>
  );
};

export default MessageItem;
