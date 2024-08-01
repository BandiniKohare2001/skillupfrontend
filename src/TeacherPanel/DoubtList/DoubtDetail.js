import React from 'react';
import { useParams } from 'react-router-dom'; // To access route parameters
import { Typography, Paper, Button, Grid, makeStyles } from '@material-ui/core';
import Navbar from '../../components/Navbar/Navbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(3),
  },
}));

const DoubtDetail = ({ doubts }) => {
  const { id } = useParams(); // Get the id parameter from the route

  // Dummy data to simulate doubts with attachments
  const dummyDoubts = [
    { id: 1, studentName: 'John Doe', studentBatch: 'Batch A', date: '2024-07-03', description: 'This is a sample description.', attachments: ['image.jpg', 'document.pdf'] },
    { id: 2, studentName: 'Jane Smith', studentBatch: 'Batch B', date: '2024-07-04', description: 'Another sample description.', attachments: ['video.mp4'] },
  ];

  // Find the doubt with the matching id
  const doubt = dummyDoubts.find(d => d.id === parseInt(id));

  const classes = useStyles();

  if (!doubt) {
    return <Typography variant="h6">Doubt not found.</Typography>;
  }

  return (
    <div className={classes.root}>
     <div className='bg'> <Navbar />
      <div className='sec'>
        <div className='profile-container'>
        <Grid>
        <Grid>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" gutterBottom>
             {doubt.studentName}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Student Batch: {doubt.studentBatch}
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              Date: {new Date(doubt.date).toLocaleDateString()}
            </Typography><hr/>
            <Typography variant="body1" gutterBottom>
              {doubt.description}
            </Typography><hr/>
            <Typography variant="body2" gutterBottom>
              Attachments:<br/><br/>
              {doubt.attachments.map((attachment, index) => (
                <Button key={index} href={`/attachments/${attachment}`} target="_blank" rel="noopener noreferrer" variant="outlined" color="primary" style={{ marginLeft: '10px' }}>
                  {attachment}
                </Button>
              ))}
            </Typography>
          </Paper>
        </Grid>
      </Grid>
        </div>
        </div>
      </div>
    </div>
  );
};

export default DoubtDetail;
