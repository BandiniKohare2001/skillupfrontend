import React from 'react';
import Navbar from './../components/Navbar/Navbar';
import Dashboard from './Dashboard/Dashboard';
import Schedule from './Schedule/Schedule';
import './StudentPanel.css';
import Integrations from './Integrations/Integrations';
import Assignments from './Assignments/Assignments';






function StudentPanel() {
  return (
    <>
      <div>
      <div><Navbar /></div>
      <div className="student-panel mt-5 mx-5">
        <Dashboard />
        <div className='d-flex'>
        <Assignments/>
        </div>
        <div className="student-panel-content">
        
          <Integrations/>
          <Schedule />
          
        </div>
      </div>
      </div>
    </>
  );
}

export default StudentPanel;
