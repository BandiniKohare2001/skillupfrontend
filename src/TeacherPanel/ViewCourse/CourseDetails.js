import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { AddCircle, Assignment, RecordVoiceOver, LiveTv, Notifications } from '@mui/icons-material';
import NoteIcon from '@mui/icons-material/Note';
import AssignmentIcon from '@mui/icons-material/Assignment';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import VideocamIcon from '@mui/icons-material/Videocam';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';
import './CourseDetails.css';

function CourseDetails() {
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [showAssignmentPopup, setShowAssignmentPopup] = useState(false);
  const [showRecordingPopup, setShowRecordingPopup] = useState(false);
  const [showLiveClassPopup, setShowLiveClassPopup] = useState(false);
  const [showReminderPopup, setShowReminderPopup] = useState(false);

  const [notes, setNotes] = useState('');
  const [assignment, setAssignment] = useState('');
  const [recording, setRecording] = useState('');
  const [reminder, setReminder] = useState('');

  const [syllabusItems, setSyllabusItems] = useState([]);

  const handleSaveNotes = () => {
    console.log("Notes saved:", notes);
    setSyllabusItems([...syllabusItems, { type: 'Notes', content: notes }]);
    setShowNotesPopup(false);
    setNotes('');
  };

  const handleSaveAssignment = () => {
    console.log("Assignment saved:", assignment);
    setSyllabusItems([...syllabusItems, { type: 'Assignment', content: assignment }]);
    setShowAssignmentPopup(false);
    setAssignment('');
  };

  const handleSaveRecording = () => {
    console.log("Recording saved:", recording.name);
    setSyllabusItems([...syllabusItems, { type: 'Recording', content: recording.name }]);
    setShowRecordingPopup(false);
    setRecording('');
  };

 
  const handleSetReminder = () => {
    console.log("Reminder set:", reminder);
    setSyllabusItems([...syllabusItems, { type: 'Reminder', content: reminder }]);
    setShowReminderPopup(false);
    setReminder('');
  };

  const renderIcon = (type) => {
    switch(type) {
      case 'Notes':
        return <NoteIcon style={{ color: 'blue' }} />;
      case 'Assignment':
        return <AssignmentIcon style={{ color: 'green' }} />;
      case 'Recording':
        return <VideoLibraryIcon style={{ color: 'red' }} />;
      case 'Live Class':
        return <VideocamIcon style={{ color: 'purple' }} />;
      case 'Reminder':
        return <NotificationImportantIcon style={{ color: 'orange' }} />;
      default:
        return null;
    }
  };

  return (
    <>
      <div className='bg'>
        <Navbar />
        <section className='sec'>
          <div className='view-course-page'>
            <div className='features-container'>
              <div className="action-buttons p-3">
                <button className="action-button mx-1" onClick={() => setShowNotesPopup(true)}>
                  <AddCircle className='icon-feature'/>
                  Add Notes
                </button>
                <button className="action-button mx-1" onClick={() => setShowAssignmentPopup(true)}>
                  <Assignment className='icon-feature' />
                  Add Assignment
                </button>
                <button className="action-button mx-1" onClick={() => setShowRecordingPopup(true)}>
                  <RecordVoiceOver className='icon-feature' />
                  Add Recording Class
                </button>
              
                <button className="action-button mx-1" onClick={() => setShowReminderPopup(true)}>
                  <Notifications className='icon-feature' />
                  Set Reminder
                </button>
              </div>
            </div>
            <div className='container-Syllabus ms-2'>
              <h3>Syllabus</h3>
              <ul>
                {syllabusItems.map((item, index) => (
                  <li key={index}>
                    {renderIcon(item.type)} {item.type}: {item.content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>

      {showNotesPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add Notes</h3>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Enter your notes"></textarea>
            <div className='btn-view-course'>
              <div><button className='button me-5' onClick={handleSaveNotes}>Save</button></div>
           <div className='ms-5'> <button className='button' onClick={() => setShowNotesPopup(false)}>Close</button></div></div>
          </div>
        </div>
      )}

      {showAssignmentPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add Assignment</h3>
            <input type="text" value={assignment} onChange={(e) => setAssignment(e.target.value)} placeholder="Enter assignment details"></input>
            <button className='button' onClick={handleSaveAssignment}>Save</button>
            <button className='button' onClick={() => setShowAssignmentPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showRecordingPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add Recording Class</h3>
            <input type="file" accept=".mp4,.avi,.wmv" onChange={(e) => setRecording(e.target.files[0])}></input>
            <button className='button' onClick={handleSaveRecording}>Save</button>
            <button className='button' onClick={() => setShowRecordingPopup(false)}>Close</button>
          </div>
        </div>
      )}

   

      {showReminderPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Set Reminder</h3>
            <input type="text" value={reminder} onChange={(e) => setReminder(e.target.value)} placeholder="Enter reminder details"></input>
            <button className='button' onClick={handleSetReminder}>Save</button>
            <button className='button' onClick={() => setShowReminderPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default CourseDetails;
