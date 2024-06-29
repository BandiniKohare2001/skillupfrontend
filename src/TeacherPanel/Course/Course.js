import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import './Course.css';
import { Link } from 'react-router-dom';

const initialCardData = [
  {
    title: "Fullstack Development (MERN Stack)",
    code: "IGCP-JULY-23",
    startedOn: "2023-07-10",
    completedOn: "2024-01-08",
    status: "Active",
    iconClass: "classroom",
    students: ["student1@example.com", "student2@example.com"]
  },
  {
    title: "Internship Cohort Program 4.0",
    code: "ICP-DEC-22",
    startedOn: "2022-12-14",
    completedOn: "2023-05-30",
    status: "Completed",
    iconClass: "online",
    students: ["student3@example.com"]
  }
];

const availableStudents = [
  "student1@example.com",
  "student2@example.com",
  "student3@example.com",
  "student4@example.com",
  "student5@example.com"
];

function Course() {
  const [cardData, setCardData] = useState(initialCardData);
  const [newCourse, setNewCourse] = useState({
    title: '',
    code: '',
    startedOn: '',
    completedOn: '',
    status: 'Active',
    students: []
  });
  const [editCourse, setEditCourse] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showStudentPopup, setShowStudentPopup] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState('');
  const [isActive, setIsActive] = useState(true);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setIsActive(checked);
      if (editCourse) {
        setEditCourse({ ...editCourse, status: checked ? 'Active' : 'Completed' });
      } else {
        setNewCourse({ ...newCourse, status: checked ? 'Active' : 'Completed' });
      }
    } else {
      if (editCourse) {
        setEditCourse({ ...editCourse, [name]: value });
      } else {
        setNewCourse({ ...newCourse, [name]: value });
      }
    }
  };

  const handleAddCourse = () => {
    const newCard = {
      ...newCourse,
      completedOn: isActive ? '' : newCourse.completedOn
    };
    setCardData([...cardData, newCard]);
    setNewCourse({
      title: '',
      code: '',
      startedOn: '',
      completedOn: '',
      status: 'Active',
      students: []
    });
    setIsActive(true);
    setShowPopup(false);
  };

  const handleEditCourse = () => {
    const updatedCardData = cardData.map(card =>
      card.code === editCourse.code ? editCourse : card
    );
    setCardData(updatedCardData);
    setEditCourse(null);
    setShowPopup(false);
  };

  const openEditPopup = (card) => {
    setEditCourse(card);
    setIsActive(card.status === 'Active');
    setShowPopup(true);
  };

  const openStudentPopup = (card) => {
    setEditCourse(card);
    setShowStudentPopup(true);
  };

  const handleEnrollStudent = () => {
    const updatedStudents = [...editCourse.students, selectedStudent];
    const updatedCardData = cardData.map(card =>
      card.code === editCourse.code ? { ...card, students: updatedStudents } : card
    );
    setCardData(updatedCardData);
    setEditCourse(null);
    setSelectedStudent('');
    setShowStudentPopup(false);
  };

  return (
    <>
      <div className='bg'>
        <Navbar />
        <section className='sec'>
          <div className='profile-container'>
            <button className="add-course-button" onClick={() => setShowPopup(true)}>
              Add New Course
            </button>

            <div className="cards">
              {cardData.map((card, index) => (
                <div className="card" key={index}>
                  <div className="card-content">
                    <p className={`status ${card.status === 'Active' ? 'active' : 'completed'}`} onClick={() => openEditPopup(card)}>{card.status}</p>
                    <h3 className='card-title'>{card.title}</h3>
                    <p>{card.code}</p>
                    <div className='d-flex card-date'>
                      <p className='c-card-details'>Started On: {card.startedOn}</p>
                      <p className='c-card-details'>Completed On: {card.completedOn}</p>
                    </div>
                    <p>Students Enrolled: {card.students.length}</p>
                    
                    <button type='button' className='center bg-warning text-light px-2 py-1' onClick={() => openStudentPopup(card)}>Enroll Student</button>
                    <Link to="/viewcourse"><button type='button' className='center ms-3 bg-dark text-light px-2 py-1' >View course</button></Link>
                    

                    <div>
   
      </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {showPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>{editCourse ? 'Edit Course' : 'Add New Course'}</h3>
            <input
              type="text"
              name="title"
              value={editCourse ? editCourse.title : newCourse.title}
              onChange={handleChange}
              placeholder="Course Title"
            />
            <input
              type="text"
              name="code"
              value={editCourse ? editCourse.code : newCourse.code}
              onChange={handleChange}
              placeholder="Course Code"
            />
            <input
              type="date"
              name="startedOn"
              value={editCourse ? editCourse.startedOn : newCourse.startedOn}
              onChange={handleChange}
              placeholder="Started On"
            />
            <input
              type="date"
              name="completedOn"
              value={editCourse ? editCourse.completedOn : newCourse.completedOn}
              onChange={handleChange}
              placeholder="Completed On"
              disabled={isActive}
            />
            <div className="checkbox-container status-inputbox">
              <div>
                <input
                  type="checkbox"
                  name="status"
                  className='status-inputbox'
                  checked={isActive}
                  onChange={handleChange}
                />
              </div>
              <div><p> Active Course</p></div>
            </div>
            <div className="popup-buttons">
              {editCourse ? (
                <button onClick={handleEditCourse}>Save Changes</button>
              ) : (
                <button onClick={handleAddCourse}>Add Course</button>
              )}
              <button onClick={() => { setShowPopup(false); setEditCourse(null); }}>Close</button>
            </div>
          </div>
        </div>
      )}

      {showStudentPopup && (
        <div className="popup">
          <div className="popup-inner">
            <h3>Enroll Student</h3>
            <select value={selectedStudent} onChange={(e) => setSelectedStudent(e.target.value)}>
              <option value="">Select Student</option>
              {availableStudents.map(student => (
                <option key={student} value={student}>{student}</option>
              ))}
            </select>
            <div className="popup-buttons">
              <button onClick={handleEnrollStudent}>Enroll</button>
              <button onClick={() => setShowStudentPopup(false)}>Close</button>
            </div>
          </div>
        </div>
      )}
  
    </>
  );
}

export default Course;
