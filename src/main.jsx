import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import { UserProvider } from "./Provider/UserProvider";
import Root from "./Components/Root/Root";
import Room from "./Pages/Room/Room";
import ErrorPage from "./Pages/Errorpage/ErrorPage";
import Login from "./Pages/authentication/Login";
import Registration from "./Pages/authentication/Registration";
import Profile from "./Pages/Profile/Profile";
import NDCApproval from "./Pages/authentication/NDCApproval";
import Book from "./Pages/Room/Book";
import ForgotPassword from "./Pages/authentication/ForgotPassword";
import Guests from "./Pages/Guests/Guests";
import Checkout from "./Pages/Guests/Checkout";
import Food from "./Pages/Food/Food";
import Other from "./Pages/Food/Other";
import Rooms from "./Pages/Room/Rooms";
import CheckoutSummary from "./Pages/Guests/CheckOutSummary";
import Appbar from "./Components/Sidebar/Appbar";
import HonourBoard from "./Pages/Home/HonourBoard";
import Contact from "./Pages/Home/Contact";
import VisitJashore from "./Pages/VisitJashore/VisitJashore";
import ConferenceRoom from "./Pages/ConferenceRoom/ConferenceRoom";
import Details from "./Pages/Room/Details";
import CheckoutHistory from "./Pages/Guests/CheckoutHistory";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";
import Media from "./Pages/Media/Media";
import BrandJashore from "./Pages/BrandJashore/BrandJashore";
import Inbox from "./Pages/Messages/Inbox";


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
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registers", // Add the registration route
        element: <Registration />,
      },
      {
        path: "/room_details",
        element: <RoomDetails />,
      },
      {
        path: "/honor-board",
        element: <HonourBoard></HonourBoard>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/conferenceRoom",
        element: <ConferenceRoom />,
      },
      {
        path: "/visitJahore",
        element: <VisitJashore />,
      },
      {
        path: "/brandJashore",
        element: <BrandJashore></BrandJashore>,
      },
      {
        path: "/media",
        element: <Media></Media>,
      },
    ],
  },
  {
    path: "/admin",
    element: <Appbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "room",
        element: <Room />,
      },
      {
        path: "room-details",
        element: <Rooms />,
      },
      {
        path: "room_details",
        element: <Details />,
      },

      {
        path: "profile", // Add the registration route
        element: <Profile />,
      },

      {
        path: "staff-approval", // Add the registration route
        element: <NDCApproval />,
      },

      {
        path: "book",
        element: <Book />,
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "guest-list",
        element: <Guests />,
      },

      {
        path: "checkout-history",
        element: <CheckoutHistory />,
      },

      {
        path: "checkout",
        element: <Checkout />,
      },

      {
        path: "checkout-summary",
        element: <CheckoutSummary />,
      },

      {
        path: "food",
        element: <Food />,
      },

      {
        path: "other",
        element: <Other />,
      },
      {
        path: "inbox",
        element: <Inbox/>,
      },
    ],
  },
]
);

// Render your app with RouterProvider
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode> 
      <UserProvider>
        <RouterProvider router={router} />
      </UserProvider>
  </React.StrictMode>
);
