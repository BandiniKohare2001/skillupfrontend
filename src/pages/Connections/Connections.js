import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Connections.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';

const connectionsData = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', company: 'ABC Corp' },
  { id: 2, name: 'Jane Smith', position: 'Product Manager', company: 'XYZ Inc' },
];

const suggestionsData = [
  { id: 3, name: 'Michael Brown', position: 'Data Scientist', company: 'DataTech' },
  { id: 4, name: 'Sara Wilson', position: 'UI/UX Designer', company: 'DesignPro' },
];

const pendingInvitationsData = [
  { id: 5, name: 'Alex Johnson', position: 'Marketing Specialist', company: 'MarketEase' },
];

const Connections = () => {
  const [connections, setConnections] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [pendingInvitations, setPendingInvitations] = useState([]);

  useEffect(() => {
    setConnections(connectionsData);
    setSuggestions(suggestionsData);
    setPendingInvitations(pendingInvitationsData);
  }, []);

  const handleFollow = (id) => {
    setSuggestions(suggestions.map((suggestion) =>
      suggestion.id === id ? { ...suggestion, status: 'following' } : suggestion
    ));
  };

  const handleCancel = (id) => {
    setSuggestions(suggestions.map((suggestion) =>
      suggestion.id === id ? { ...suggestion, status: 'suggested' } : suggestion
    ));
  };

  const handleAccept = (id) => {
    const invitation = pendingInvitations.find((invitation) => invitation.id === id);
    setPendingInvitations(pendingInvitations.filter((invitation) => invitation.id !== id));
    setConnections([...connections, { ...invitation, status: 'connected' }]);
  };

  const handleDecline = (id) => {
    setPendingInvitations(pendingInvitations.filter((invitation) => invitation.id !== id));
  };

  const handleRemove = (id) => {
    setConnections(connections.filter((connection) => connection.id !== id));
  };

  return (
    <div className='bg'>
      <Navbar />
      {/* <Sidebar /> */}
      <section>
      <div className="profile-container">
        <div className="connections-page container mx-auto p-4">
          <div className="header mb-4">
            <div className="search-bar mt-2">
              <input
                type="text"
                placeholder="Search connections..."
                className="border rounded-lg px-3 py-2 w-full max-w-lg focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="connections-list mb-4">
            <h2 className="text-xl font-semibold mb-2">Connections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {connections.map((connection) => (
                <div key={connection.id} className="connection-card border p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold">{connection.name}</h3>
                  <p className="text-gray-600">{connection.position} at {connection.company}</p>
                  <div className="btns">
                    <button className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg">
                      View Profile
                    </button>
                    <button
                      className="mt-2 bg-red-500 text-light px-4 py-2 rounded-lg remove-btms ms-3"
                      onClick={() => handleRemove(connection.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="suggestions-list mb-4">
            <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {suggestions.map((suggestion) => (
                <div key={suggestion.id} className="suggestion-card border p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold">{suggestion.name}</h3>
                  <p className="text-gray-600">{suggestion.position} at {suggestion.company}</p>
                  <div className="btns">
                    {suggestion.status === 'following' ? (
                      <button
                        className="mt-2 bg-gray-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleCancel(suggestion.id)}
                      >
                        Cancel
                      </button>
                    ) : (
                      <button
                        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg"
                        onClick={() => handleFollow(suggestion.id)}
                      >
                        Follow
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pending-invitations mb-4">
            <h2 className="text-xl font-semibold mb-2">Pending Invitations</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {pendingInvitations.map((invitation) => (
                <div key={invitation.id} className="invitation-card border p-4 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold">{invitation.name}</h3>
                  <p className="text-gray-600">{invitation.position} at {invitation.company}</p>
                  <div className="btns mx-2">
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded-lg mx-2"
                      onClick={() => handleAccept(invitation.id)}
                    >
                      Accept
                    </button>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded-lg"
                      onClick={() => handleDecline(invitation.id)}
                    >
                      Decline
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </section>
    </div>
  );
};

export default Connections;
