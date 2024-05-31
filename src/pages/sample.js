// import React, { useState, useEffect, useRef } from 'react';
// import ChatHeader from './MessagingComponents/ChatHeader';
// import MessageList from './MessagingComponents/MessageList';
// import MessageInput from './MessagingComponents/MessageInput';
// import UsersList from './MessagingComponents/UserList';
// import dummyMessages from './MessagingComponents/dummyMessages';
// import './Messaging.css';
// import Navbar from '../../components/Navbar/Navbar';

// const Messaging = () => {
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
//   };

//   return (
//     <div className="bg">
//       <Navbar />
    //  <section className='profile-container'>
    //  <div className={`user-list ${selectedUser ? 'hidden' : ''}`}>
    //     <UsersList onUserSelect={handleUserSelect} />
    //   </div>
    //   <div className={`chat-box ${selectedUser ? 'visible' : ''}`}>
    //     {selectedUser ? (
    //       <>
    //         <ChatHeader userName={selectedUser.name} onBack={() => setSelectedUser(null)} />
    //         <MessageList messages={messages} />
    //         <MessageInput onSendMessage={handleSendMessage} />
    //       </>
    //     ) : (
    //       <div className="no-user-selected">Select a user to start chatting</div>
    //     )}
    //   </div>
    //  </section>
//     </div>
//   );
// };

// export default Messaging;



// .messaging-container {
//     display: flex;
//     flex-direction: column;
//     /* height: calc(100vh - 70px); */
//     height: 100vh;
//   }
  
//   .user-list {
//     width: 300px;
//     background-color: #f7f7f7;
//     border-right: 1px solid #ddd;
//     overflow-y: auto;
//     flex-shrink: 0;
//     transition: transform 0.3s ease;
//   }
  
//   .user-list.hidden {
//     display: none;
//   }
  
//   .chat-box {
//     flex-grow: 1;
//     display: flex;
//     flex-direction: column;
//     background-color: #fff;
//     overflow-y: auto;
//     display: none;
//     /* margin-bottom: -40px; */
//   }
  
//   .chat-box.visible {
//     display: flex;
//   }
  
//   .no-user-selected {
//     padding: 20px;
//     text-align: center;
//   }
  
//   @media (max-width: 768px) {
//     .user-list {
//       width: 100%;
//       height: 100vh;
//       display: block; /* Always display the user list by default on small screens */
//     }
  
//     .user-list.hidden {
//       display: none;
//     }
  
//     .chat-box {
//       display: none; /* Hide the chat box by default on small screens */
//     }
  
//     .chat-box.visible {
//       display: flex; /* Show the chat box when a user is selected */
//       width: 100%;
//     }
//   }
  