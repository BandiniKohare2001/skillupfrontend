import React from 'react';
import MessageItem from './MessageItem';
import './MessageList.css';

const MessageList = ({ messages }) => {
  return (
    <div className="message-list">
      {messages.map((message, index) => (
        <MessageItem key={index} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
