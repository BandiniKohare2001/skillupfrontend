// import React from 'react';
// import { Card, CardContent, Typography, List, ListItem, ListItemText, Button, ListItemIcon } from '@mui/material';
// import { CalendarToday, Link, VideoCall } from '@mui/icons-material';
// import './Integrations.css';

// const integrations = [
//   { id: 1, name: 'Google Calendar', description: 'Sync your course schedule with Google Calendar.', icon: <CalendarToday />, link: 'https://calendar.google.com/' },
//   { id: 2, name: 'Google Classroom', description: 'Access your assignments and grades.', icon: <Link />, link: 'https://classroom.google.com/' },
//   { id: 3, name: 'Google Meet', description: 'Join live classes and meetings.', icon: <VideoCall />, link: 'https://meet.google.com/' },
// ];

// function Integrations() {
//   return (
//     <Card className="integrations-card">
//       <CardContent>
//         <Typography variant="h6" component="div">
//           Integrations
//         </Typography>
//         <List>
//           {integrations.map((integration) => (
//             <ListItem key={integration.id} button component="a" href={integration.link} target="_blank">
//               <ListItemIcon>
//                 {integration.icon}
//               </ListItemIcon>
//               <ListItemText
//                 primary={integration.name}
//                 secondary={integration.description}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </CardContent>
//     </Card>
//   );
// }

// export default Integrations;
