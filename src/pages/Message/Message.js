import React, { useState, useEffect, useRef } from 'react';
import ChatHeader from './MessagingComponents/ChatHeader';
import MessageList from './MessagingComponents/MessageList';
import MessageInput from './MessagingComponents/MessageInput';
import UsersList from './MessagingComponents/UserList';
import dummyMessages from './MessagingComponents/dummyMessages';
import './Messaging.css';
import Navbar from '../../components/Navbar/Navbar';
import Sidebar from '../../components/Sidebar/Sidebar';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from '../../components/Footer/Footer';

const Messaging = () => {
//   const [messages, setMessages] = useState(dummyMessages); // Initialize with dummy messages
//   const [selectedUser, setSelectedUser] = useState(null);

//   const ws = useRef(null);

//   useEffect(() => {
//     // Establish WebSocket connection
//     ws.current = new WebSocket('ws://localhost:8080');

//     ws.current.onopen = () => {
//       console.log('WebSocket connected');
//     };

//     ws.current.onmessage = (event) => {
//       const message = JSON.parse(event.data);
//       setMessages((prevMessages) => [...prevMessages, message]);
//     };

//     ws.current.onclose = () => {
//       console.log('WebSocket disconnected');
//     };

//     return () => {
//       ws.current.close();
//     };
//   }, []);

//   const handleSendMessage = (text) => {
//     const message = {
//       sender: 'me',
//       text,
//       timestamp: Date.now(),
//     };
//     ws.current.send(JSON.stringify(message));
//     setMessages((prevMessages) => [...prevMessages, message]);
//   };

//   const handleUserSelect = (user) => {
//     setSelectedUser(user);
//     // Optionally, load previous messages with the selected user here
//   };



  return (
    <></>
    // <div className='margin bg flex-grow'>
    //   <Navbar />

    //   <div className='sec'>
    //     <div className="profile-container">
    //       <div className='message-container'>
    //         <div className={`messaging-container`}>
    //           <div className="users-list-container">
    //             <UsersList onUserSelect={handleUserSelect} />
    //           </div>

    //           <div className="chat-container flex-grow-1">
    //             {selectedUser ? (
    //               <>
    //                 <ChatHeader userName={selectedUser.name} onBack={() => setSelectedUser(null)} />
    //                 <MessageList messages={messages} />
    //                 <MessageInput onSendMessage={handleSendMessage} />
    //               </>
    //             ) : (
    //               <div className="no-user-selected">Select a user to start chatting</div>
    //             )}
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div><Footer/></div>
    //   </div>
    // </div>
  );
};

export default Messaging;
