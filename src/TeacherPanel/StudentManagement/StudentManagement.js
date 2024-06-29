import React, { useState } from 'react';
import { AddCircle, Assignment, RecordVoiceOver, Notifications, LibraryBooks } from '@mui/icons-material';
import './StudentManagement.css';

function ContentManagement() {
  const [showNotesPopup, setShowNotesPopup] = useState(false);
  const [showAssignmentPopup, setShowAssignmentPopup] = useState(false);
  const [showRecordingPopup, setShowRecordingPopup] = useState(false);
  const [showReminderPopup, setShowReminderPopup] = useState(false);
  const [showResourcePopup, setShowResourcePopup] = useState(false);

  const [notes, setNotes] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [recordings, setRecordings] = useState([]);
  const [reminders, setReminders] = useState([]);
  const [resources, setResources] = useState([]);

  const handleSaveNotes = (file) => {
    setNotes([...notes, file]);
    setShowNotesPopup(false);
  };

  const handleSaveAssignment = (file) => {
    setAssignments([...assignments, file]);
    setShowAssignmentPopup(false);
  };

  const handleSaveRecording = (file) => {
    setRecordings([...recordings, file]);
    setShowRecordingPopup(false);
  };

  const handleSetReminder = (text) => {
    setReminders([...reminders, text]);
    setShowReminderPopup(false);
  };

  const handleSaveResource = (link) => {
    setResources([...resources, link]);
    setShowResourcePopup(false);
  };

  return (
    <>
      <div className='bg'>
        <section className='sec'>
          <div className='profile-container'>
            <h2>Content Management</h2>

            <div className="action-buttons">
              <button className="action-button" onClick={() => setShowNotesPopup(true)}>
                <AddCircle />
                Upload Notes
              </button>
              <button className="action-button" onClick={() => setShowAssignmentPopup(true)}>
                <Assignment />
                Add Assignment
              </button>
              <button className="action-button" onClick={() => setShowRecordingPopup(true)}>
                <RecordVoiceOver />
                Add Recording Class
              </button>
              <button className="action-button" onClick={() => setShowReminderPopup(true)}>
                <Notifications />
                Set Reminder
              </button>
              <button className="action-button" onClick={() => setShowResourcePopup(true)}>
                <LibraryBooks />
                Add Resource
              </button>
            </div>
          </div>
        </section>
      </div>

      {showNotesPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Upload Notes</h3>
            <input type="file" accept=".pdf,.doc,.ppt" onChange={(e) => handleSaveNotes(e.target.files[0])}></input>
            <button onClick={() => setShowNotesPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showAssignmentPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add Assignment</h3>
            <input type="file" accept=".pdf,.doc,.ppt" onChange={(e) => handleSaveAssignment(e.target.files[0])}></input>
            <button onClick={() => setShowAssignmentPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showRecordingPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add Recording Class</h3>
            <input type="file" accept=".mp4,.avi,.wmv" onChange={(e) => handleSaveRecording(e.target.files[0])}></input>
            <button onClick={() => setShowRecordingPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showReminderPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Set Reminder</h3>
            <input type="text" onChange={(e) => handleSetReminder(e.target.value)} placeholder="Enter reminder details"></input>
            <button onClick={() => setShowReminderPopup(false)}>Close</button>
          </div>
        </div>
      )}

      {showResourcePopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Add Resource</h3>
            <input type="text" onChange={(e) => handleSaveResource(e.target.value)} placeholder="Enter resource link"></input>
            <button onClick={() => setShowResourcePopup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default ContentManagement;
