import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SchoolIcon from '@mui/icons-material/School';
import GroupIcon from '@mui/icons-material/Group';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import './Sidebr.css';
import logo from './../../utils/images/Logo.png';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const ToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    // Implement logout logic here
    console.log('User logged out');
  };

  return (
   <div className='sidebr'>
     <div className={`sidebar-container ${isOpen ? 'sidebar-open' : ''}`}>
      <nav className="navbar navbar-expand-lg navbar-light ">
        <div className="container-fluid p-2">
          <div onClick={ToggleSidebar}>
            <MenuIcon className="menu-btn" />
          </div>
        </div>
      </nav>
      <div className={`sidebar ${isOpen ? 'active' : ''}`}>
        <div className="sd-header pt-4">
          <img src={logo} alt='logo' className='logo-sidebar'/>
          <div className="btn" onClick={ToggleSidebar}>
            <CloseIcon className="close-btn" />
          </div>
        </div>
        <div className="sd-body">
          <ul>
          <li>
              <Link to="/studentpanel" className="mb-0 sd-link">
                <PersonIcon className="icon" />Student Panel
              </Link>
            </li>
            <li>
              <Link to="/userprofile" className="mb-0 sd-link">
                <PersonIcon className="icon" /> User Name
              </Link>
            </li>
            <li>
              <Link to="/myposts" className="sd-link">
                <PostAddIcon className="icon" /> Posts
              </Link>
            </li>
            <li>
              <Link to="/course" className="sd-link">
                <SchoolIcon className="icon" /> Course
              </Link>
            </li>
           
            <li>
              <Link to="/doubtpage" className="sd-link">
                <HelpOutlineIcon className="icon" /> Doubts
              </Link>
            </li>
            <li>
              <Link to="/login"><div className="sd-link logout" onClick={handleLogout}>
                <LogoutIcon className="icon" /> Logout
              </div></Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={`sidebar-overlay ${isOpen ? 'active' : ''}`} onClick={ToggleSidebar}></div>
    </div>
   </div>
  );
};

export default Sidebar;
