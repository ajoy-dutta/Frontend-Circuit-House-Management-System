import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Root from './Components/Root/Root';
import Room from './Pages/Room/Room';
import ErrorPage from './Pages/Errorpage/ErrorPage';
import Login from './Pages/authentication/Login';
import Registration from './Pages/authentication/Registration';


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
    ],
  },
]);

// Render your app with RouterProvider
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
