import React, { useState, useEffect } from 'react';
import './GroupPage.css';
import Navbar from '../../components/Navbar/Navbar';

const GroupCard = ({ group, onClick }) => {
  return (
    <div className="group-card" onClick={onClick}>
      <h3>{group.name}</h3>
    </div>
  );
};

const GroupChat = ({ group, onBack }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    fetch(`/api/groups/${group.id}/messages`)
      .then((response) => response.json())
      .then((data) => setMessages(data));
  }, [group.id]);

  const handleSendMessage = () => {
    fetch(`/api/groups/${group.id}/messages`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ sender: 'teacher', text: newMessage }),
    })
      .then((response) => response.json())
      .then((message) => setMessages([...messages, message]));
    setNewMessage('');
  };

  return (
    <div className="group-chat">
      <button onClick={onBack}>Back</button>
      <h2>{group.name} Chat</h2>
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className="message">
            <strong>{message.sender}: </strong>{message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

const GroupPage = () => {
  const [groups, setGroups] = useState([]);
  const [newGroupName, setNewGroupName] = useState('');
  const [selectedGroup, setSelectedGroup] = useState(null);

  useEffect(() => {
    fetch('/api/groups')
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched groups:", data);
        setGroups(data);
      });
  }, []);

  const handleCreateGroup = () => {
    fetch('/api/groups', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name: newGroupName }),
    })
      .then((response) => response.json())
      .then((newGroup) => {
        setGroups([...groups, newGroup]);
        console.log("New group created:", newGroup);
      });
    setNewGroupName('');
  };

  return (
  <>
  <div>
    <Navbar/>
    <div>
    <div className="group-page bg">
      <div className="group-container profile-container mt-5">
        {selectedGroup ? (
          <GroupChat group={selectedGroup} onBack={() => setSelectedGroup(null)} />
        ) : (
          <>
            <div className="create-group">
              <input
                type="text"
                value={newGroupName}
                onChange={(e) => setNewGroupName(e.target.value)}
                placeholder="New Group Name"
              />
              <button onClick={handleCreateGroup}>Create Group</button>
            </div>
            <div className="group-list">
              {groups.map((group) => (
                <GroupCard key={group.id} group={group} onClick={() => setSelectedGroup(group)} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
    </div>
  </div>
  </>
  );
};

export default GroupPage;
