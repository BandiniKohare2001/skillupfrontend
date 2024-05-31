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
import Notification from './pages/Notification/Notification';
import Connections from './pages/Connections/Connections';
import Message from './pages/Message/Message';
import Profile from './pages/Profile/Profile';
import GetPremium from './pages/GetPremium/GetPremium';
import NotificationPage from './pages/Notification/NotificationPage';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);



