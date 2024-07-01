import React, { useState } from 'react';
import logo from './../../utils/images/Logo.png';
import './Navbar.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useLocation } from 'react-router-dom';
import NotificationIcon from './../../pages/Notification/Notification'; // Import the notification component
import Sidebar from '../Sidebar/Sidebar';

function Navbar() {
  const location = useLocation();
  const getCurrentPath = () => {
    switch (location.pathname) {
      case '/message':
        return 'Messaging';
      case '/notification':
        return 'Notifications';
      case '/connections':
        return 'Connections';
      case '/userprofile':
        return 'Profile';
      default:
        return 'Home';
    }
  };

  const [activeNavItem, setActiveNavItem] = useState(getCurrentPath());
  const [showSearch, setShowSearch] = useState(false);

  const handleNavItemClick = (item) => {
    setActiveNavItem(item);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <>
      <div className="nav-main fixed top-0 w-full bg-white shadow-md z-1000">
        <div className="nav-section flex items-center justify-between px-5 py-2 mx-auto max-w-screen-lg">
          <div className='d-flex menu-logo'>
            <Sidebar />
            <img src={logo} alt="logo" className="web-logo h-9 ms-2" />
          </div>
          <div className={`search-container flex-grow ${showSearch ? 'show-search' : ''}`}>
            <input className="form-control mr-sm-2 search-input" type="search" placeholder="Search" aria-label="Search" />
            <i className="fas fa-search search-icon absolute right-2 top-1/2 transform -translate-y-1/2" onClick={toggleSearch}></i>
          </div>
          <div className="icons-containert flex items-evenly space-x-4 hidden md:flex">
            <Link to="/">
              <div className={`icon-with-label ${activeNavItem === 'Home' ? 'active' : ''}`} onClick={() => handleNavItemClick('Home')}>
                <HomeIcon className="nav-icon" />
                <span className="icon-label">Home</span>
              </div>
            </Link>
            <Link to="/message">
              <div className={`icon-with-label ${activeNavItem === 'Messaging' ? 'active' : ''}`} onClick={() => handleNavItemClick('Messaging')}>
                <MailIcon className="nav-icon" />
                <span className="icon-label">Messaging</span>
              </div>
            </Link>
            <Link to="/notification">
              <div className={`icon-with-label ${activeNavItem === 'Notifications' ? 'active' : ''}`} onClick={() => handleNavItemClick('Notifications')}>
                <NotificationIcon className="nav-icon" />
                <span className="icon-label">Notifications</span>
              </div>
            </Link>
            <Link to="/connections">
              <div className={`icon-with-label ${activeNavItem === 'Connections' ? 'active' : ''}`} onClick={() => handleNavItemClick('Connections')}>
                <PeopleIcon className="nav-icon" />
                <span className="icon-label">Connections</span>
              </div>
            </Link>
            <Link to="/userprofile">
              <div className={`icon-with-label ${activeNavItem === 'Profile' ? 'active' : ''}`} onClick={() => handleNavItemClick('Profile')}>
                <AccountCircleIcon className="nav-icon" />
                <span className="icon-label">Profile</span>
              </div>
            </Link>
            <div className='separator'></div>
            <Link to="/premium">
              <span className="get-premium font-bold text-orange-600">Get Premium ✨</span>
            </Link>
          </div>
        </div>

        <div className="icons-container flex justify-around py-2 bg-white shadow-md fixed bottom-0 w-full md:hidden">
          <Link to="/">
            <div className={`icon-with-label ${activeNavItem === 'Home' ? 'active' : ''}`} onClick={() => handleNavItemClick('Home')}>
              <HomeIcon className="nav-icon" />
            </div>
          </Link>
          <Link to="/message">
            <div className={`icon-with-label ${activeNavItem === 'Messaging' ? 'active' : ''}`} onClick={() => handleNavItemClick('Messaging')}>
              <MailIcon className="nav-icon" />
            </div>
          </Link>
          <Link to="/notification">
            <div className={`icon-with-label ${activeNavItem === 'Notifications' ? 'active' : ''}`} onClick={() => handleNavItemClick('Notifications')}>
              <NotificationIcon className="nav-icon" />
            </div>
          </Link>
          <Link to="/connections">
            <div className={`icon-with-label ${activeNavItem === 'Connections' ? 'active' : ''}`} onClick={() => handleNavItemClick('Connections')}>
              <PeopleIcon className="nav-icon" />
            </div>
          </Link>
          <Link to="/userprofile">
            <div className={`icon-with-label ${activeNavItem === 'Profile' ? 'active' : ''}`} onClick={() => handleNavItemClick('Profile')}>
              <AccountCircleIcon className="nav-icon" />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
