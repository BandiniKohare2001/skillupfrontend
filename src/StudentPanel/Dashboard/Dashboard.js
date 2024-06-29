import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Assignment, Announcement, Grade } from '@mui/icons-material';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3}>
        {/* Overview Section */}
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card1">
            <CardContent>
              <Typography variant="h5" component="div">
                Overview
              </Typography>
              <div className="overview-item">
                <Assignment className="overview-icon" />
                <Typography variant="body2">
                  <strong>Course Progress:</strong> 75% completed
                </Typography>
              </div>
              <div className="overview-item">
                <Announcement className="overview-icon" />
                <Typography variant="body2">
                  <strong>Upcoming Deadlines:</strong> 3 assignments due this week
                </Typography>
              </div>
              <div className="overview-item">
                <Grade className="overview-icon" />
                <Typography variant="body2">
                  <strong>Recent Grades:</strong> A, B+, A-
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>

        {/* Recent Activity Section */}
        <Grid item xs={12} md={6}>
          <Card className="dashboard-card2">
            <CardContent>
              <Typography variant="h5" component="div">
               <h3> Recent Activity</h3>
              </Typography>
              <div className="activity-item">
                <Typography variant="body2">
                  <strong>Assignment Submitted:</strong> "Math Homework 3"
                </Typography>
              </div>
              <div className="activity-item">
                <Typography variant="body2">
                  <strong>Grade Received:</strong> "History Essay - B+"
                </Typography>
              </div>
              <div className="activity-item">
                <Typography variant="body2">
                  <strong>Instructor Feedback:</strong> "Great work on the science project!"
                </Typography>
              </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
