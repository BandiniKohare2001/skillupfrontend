// import React from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import { Calendar, momentLocalizer } from 'react-big-calendar';
// import moment from 'moment';
// import 'react-big-calendar/lib/css/react-big-calendar.css';
// import './Schedule.css';

// const localizer = momentLocalizer(moment);

// function Schedule() {
//   const events = [
//     { title: 'Math 101 Class', start: new Date(2024, 6, 1, 10, 0), end: new Date(2024, 6, 1, 11, 0) },
//     { title: 'History 201 Class', start: new Date(2024, 6, 2, 12, 0), end: new Date(2024, 6, 2, 13, 0) },
//     { title: 'Science 301 Class', start: new Date(2024, 6, 3, 14, 0), end: new Date(2024, 6, 3, 15, 0) },
//     { title: 'Math Homework 1 Due', start: new Date(2024, 6, 4, 23, 59), end: new Date(2024, 6, 4, 23, 59) },
//   ];

//   return (
//     <Card className="schedule-card">
//       <CardContent>
//         <Typography variant="h5" component="div">
//           Schedule
//         </Typography>
//         <Calendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{ height: 500 }}
//         />
//       </CardContent>
//     </Card>
//   );
// }

// export default Schedule;
