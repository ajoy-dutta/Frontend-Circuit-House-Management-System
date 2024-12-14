import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import { UserProvider } from "./Provider/UserProvider";
import Root from './Components/Root/Root';
import Room from './Pages/Room/Room';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';
<<<<<<< HEAD
import Profile from './Pages/Profile/Profile';
import NDCApproval from './Pages/authentication/NDCApproval';
import Navbar from './Components/Navbar/Navbar';
=======
import NDCApproval from './Pages/authentication/NDCApproval';
>>>>>>> 309b1e26525efd8175c1d68a833b42980ca64402


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />, 
      },

      {
        path: "/room",
        element: <Room />,
      },

      {
        path: "/login",
        element: <Login />,
      },

      {
        path: "/register", // Add the registration route
        element: <Registration />,
      },

      {
        path: "/profile", // Add the registration route
        element: <Profile />,
      },

      {
        path: "/staff-approval", // Add the registration route
        element: <NDCApproval />,
      },
    ],
  },
]);

// Render your app with RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserProvider>
  <RouterProvider router={router} />
 </UserProvider>
 </React.StrictMode>,
);
