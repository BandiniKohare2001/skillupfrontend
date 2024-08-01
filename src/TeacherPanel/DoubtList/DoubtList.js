import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'; // Assuming you use React Router for navigation
import Navbar from '../../components/Navbar/Navbar';

const DoubtList = () => {
  const [doubts, setDoubts] = useState([
    { id: 1, studentName: 'John Doebbbbbbbbbbb', studentBatch: 'Batch Abbbbbbbbbbnnnnnnn', date: '2024-07-03', description: 'This is a sample description.', attachments: ['image.jpg', 'document.pdf'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
  ]);

  return (
    <div className='bg'>
        <Navbar/>
      <div className='sec'>
      <div className='profile-container'>
      <TableContainer component={Paper}>
          <Table aria-label="Doubts table">
            <TableHead>
              <TableRow>
                <TableCell><h5><b>Student Name</b></h5></TableCell>
                <TableCell><h5><b>Student Batch</b></h5></TableCell>
                <TableCell><h5><b>Date</b></h5></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {doubts.map(doubt => (
                <TableRow key={doubt.id} component={Link} to={`/doubts/${doubt.id}`} style={{ textDecoration: 'none' }}>
                  <TableCell><h6><b>{doubt.studentName}</b></h6></TableCell>
                  <TableCell>{doubt.studentBatch}</TableCell>
                  <TableCell>{new Date(doubt.date).toLocaleDateString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      </div>
    </div>
  );
};

export default DoubtList;
