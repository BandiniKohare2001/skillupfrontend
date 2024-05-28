// src/components/Navbar/Navbar.js
import React, { useState } from 'react';
import logo from './../../utils/images/Logo.png';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar() {
  const [activeNavItem, setActiveNavItem] = useState('Home');

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  return (
    <div className="nav-section px-5 d-flex items-center justify-between bg-white shadow-md py-3">
      <img src={logo} alt="logo" className="web-logo ms-5 mt-2" />
      <div className="search-container flex-grow mx-4 position-relative">
        <input
          type="text"
          placeholder="Search..."
          className="search-input border rounded-lg px-3 py-2 my-2 w-full focus:outline-none focus:border-blue-500 me-5"
        />
        <i className="fas fa-search search-icon position-absolute"></i>
      </div>
      <div className="icons-container d-flex align-items-center ms-5">
        <div className={`icon-with-label mx-3 ${activeNavItem === 'Home' ? 'active' : ''}`} onClick={() => handleNavItemClick('Home')}>
          <HomeIcon className="nav-icon" />
          <span className="icon-label">Home</span>
        </div>
        <div className={`icon-with-label mx-3 ${activeNavItem === 'Messaging' ? 'active' : ''}`} onClick={() => handleNavItemClick('Messaging')}>
          <MailIcon className="nav-icon" />
          <span className="icon-label">Messaging</span>
        </div>
        <div className={`icon-with-label mx-3 ${activeNavItem === 'Notifications' ? 'active' : ''}`} onClick={() => handleNavItemClick('Notifications')}>
          <NotificationsIcon className="nav-icon" />
          <span className="icon-label">Notifications</span>
        </div>
        <div className={`icon-with-label mx-3 ${activeNavItem === 'Connections' ? 'active' : ''}`} onClick={() => handleNavItemClick('Connections')}>
          <PeopleIcon className="nav-icon" />
          <span className="icon-label">Connections</span>
        </div>
        <div className={`icon-with-label mx-3 ${activeNavItem === 'Profile' ? 'active' : ''}`} onClick={() => handleNavItemClick('Profile')}>
          <AccountCircleIcon className="nav-icon" />
          <span className="icon-label">Profile</span>
        </div><div className="separator ms-4"></div>
        <span className="get-premium ms-2">Get Premium ✨</span>
      </div>
    </div>
  );
}

export default Navbar;
