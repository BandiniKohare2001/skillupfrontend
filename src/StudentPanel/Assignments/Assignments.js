import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Grid
} from '@mui/material';
import { Upload } from '@mui/icons-material';
import './Assignments.css';

const assignmentsData = [
  { id: 1, title: 'Math Assignment 1', deadline: '2024-07-01', submitted: true, grade: 'A', feedback: 'Well done!' },
  { id: 2, title: 'Science Project', deadline: '2024-07-10', submitted: false, grade: null, feedback: null },
  { id: 3, title: 'English Essay', deadline: '2024-07-15', submitted: false, grade: null, feedback: null },
  { id: 4, title: 'History Paper', deadline: '2024-07-20', submitted: false, grade: null, feedback: null },
  { id: 5, title: 'Physics Lab', deadline: '2024-07-25', submitted: false, grade: null, feedback: null },
];

const announcementsData = [
  { id: 1, title: 'Exam Schedule', content: 'The final exams will be held next week.', date: '2024-06-28' },
  { id: 2, title: 'Exam Schedule', content: 'The final exams will be held next week.', date: '2024-06-28' },
  { id: 3, title: 'Exam Schedule', content: 'The final exams will be held next week.', date: '2024-06-28' },
  { id: 4, title: 'New Assignment', content: 'A new assignment has been uploaded to the portal.', date: '2024-06-26' },
  { id: 5, title: 'Holiday Notice', content: 'The school will be closed on 4th of July.', date: '2024-06-25' },
  { id: 6, title: 'Lab Session', content: 'Lab sessions will start from next Monday.', date: '2024-06-21' },
];

function getRecentAnnouncements(announcements) {
  const today = new Date();
  const oneWeekAgo = new Date();
  oneWeekAgo.setDate(today.getDate() - 7);

  return announcements.filter(announcement => {
    const announcementDate = new Date(announcement.date);
    return announcementDate >= oneWeekAgo && announcementDate <= today;
  });
}

function getPendingAssignments(assignments) {
  return assignments.filter(assignment => !assignment.submitted);
}

function Assignment() {
  const [open, setOpen] = useState(false);
  const [selectedAssignment, setSelectedAssignment] = useState(null);

  const recentAnnouncements = getRecentAnnouncements(announcementsData);
  const pendingAssignments = getPendingAssignments(assignmentsData);

  const handleClickOpen = (assignment) => {
    setSelectedAssignment(assignment);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedAssignment(null);
  };

  const handleUpload = () => {
    // Logic for file upload
    console.log("File uploaded for assignment:", selectedAssignment.title);
    handleClose();
  };

  return (
    <Grid container spacing={3} justifyContent="center">
      <Grid item xs={12} md={6}>
        <Card className="comm-card">
          <CardContent>
            <Typography variant="h6" component="div">
              <h3>Announcements</h3>
            </Typography>
            <List className="scrollable-list">
              {recentAnnouncements.map((announcement) => (
                <ListItem key={announcement.id}>
                  <ListItemText primary={announcement.title} secondary={announcement.content} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </Grid>

      <Grid item xs={12} md={6}>
        <Card className="assignments-card">
          <CardContent>
            <Typography variant="h5" component="div">
              <h3>Assignments</h3>
            </Typography>
            <List className="scrollable-list">
              {pendingAssignments.map((assignment) => (
                <ListItem key={assignment.id} className="assignment-item">
                  <ListItemText
                    primary={assignment.title}
                    secondary={`Deadline: ${assignment.deadline}`}
                  />
                  <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="upload" onClick={() => handleClickOpen(assignment)}>
                      <Upload />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </CardContent>

          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Submit Assignment</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Upload your work for: {selectedAssignment?.title}
              </DialogContentText>
              <TextField
                margin="dense"
                id="file"
                label="Upload File"
                type="file"
                fullWidth
                variant="standard"
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleUpload}>Upload</Button>
            </DialogActions>
          </Dialog>
        </Card>
      </Grid>
    </Grid>
  );
}

export default Assignment;
