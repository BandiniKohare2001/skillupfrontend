import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Registration from './pages/Registration/Registration';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
// import Notification from './pages/Notification/Notification';
import Connections from './pages/Connections/Connections';
import Message from './pages/Message/Message';
import Profile from './pages/Profile/Profile';
import GetPremium from './pages/GetPremium/GetPremium';
import NotificationPage from './pages/Notification/NotificationPage';
import Course from './TeacherPanel/Course/Course';
import MyPosts from './TeacherPanel/MyPosts/MyPosts';
import DoubtPage from './StudentPanel/DoubtPage/DoubtPage';
import CourseDetails from './TeacherPanel/ViewCourse/CourseDetails';
import StudentManagement from './TeacherPanel/StudentManagement/StudentManagement';
import StudentPanel from './StudentPanel/StudentPanel';
import DoubtList from './TeacherPanel/DoubtList/DoubtList';
import DoubtDetail from './TeacherPanel/DoubtList/DoubtDetail';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/registration",
    element: <Registration/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/notification",
    element: <NotificationPage/>
  },
  {
    path: "/connections",
    element: <Connections/>
  },
  {
    path: "/message",
    element: <Message/>
  },
  {
    path: "/userprofile",
    element: <Profile/>
  },
  {
    path: "/premium",
    element: <GetPremium/>
  },
  {
    path: "/course",
    element: <Course/>
  },
  {
    path: "/myposts",
    element: <MyPosts/>
  },
  {
    path: "/doubtpage",
    element: <DoubtPage/>
  },
 
  {
    path: "/viewcourse",
    element: <CourseDetails/>
  },
  {
    path: "/studentmanagement",
    element: <StudentManagement/>
  },
  {
    path: "/studentpanel",
    element: <StudentPanel/>
  },
  {
    path: "/doubtlist",
    element: <DoubtList/>
  },
  {
    path: "/doubts/:id",
    element: <DoubtDetail/>
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);



