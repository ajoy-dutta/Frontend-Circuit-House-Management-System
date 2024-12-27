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
import Profile from './Pages/Profile/Profile';
import NDCApproval from './Pages/authentication/NDCApproval';
import Book from './Pages/Room/Book';
import ForgotPassword from './Pages/authentication/ForgotPassword';
import Guests from './Pages/Guests/Guests';
import Checkout from './Pages/Guests/Checkout';
import Food from './Pages/Food/Food';
import Other from './Pages/Food/Other';
import Rooms from './Pages/Room/Rooms';



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
        path: "/room-details",
        element: <Rooms />,
      },

      {
        path: "/login",
        element: <Login />,
      },


      {
        path: "/registers", // Add the registration route
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

      {
        path: "/book",
        element: <Book/>,
      },

      {
        path: "/forgot-password",
        element: <ForgotPassword/>
      },
      
      {
        path: "/guest-list",
        element: <Guests/>,
      },

      {
        path: "/checkout",
        element: <Checkout/>,
      },

      {
        path: "/food",
        element: <Food/>,
      },

      {
        path: "/other",
        element: <Other/>,
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
