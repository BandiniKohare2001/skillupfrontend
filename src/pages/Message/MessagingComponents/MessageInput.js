import React, { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';
import './MessageInput.css';

const MessageInput = ({ onSendMessage }) => {
  const [messageText, setMessageText] = useState('');

  const handleSendClick = () => {
    if (messageText.trim()) {
      onSendMessage(messageText);
      setMessageText('');
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        value={messageText}
        onChange={(e) => setMessageText(e.target.value)}
        placeholder="Type a message..."
      />
      <SendIcon className="send-icon mt-1 " onClick={handleSendClick} />
    </div>
  );
};

export default MessageInput;
