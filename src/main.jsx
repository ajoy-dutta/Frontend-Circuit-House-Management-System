import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  RouterProvider,
  useNavigate,
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
import ConferenceRoom from "./Pages/ConferenceRoom/ConferenceRoom";
import Details from "./Pages/Room/Details";
import CheckoutHistory from "./Pages/Guests/CheckoutHistory";
import RoomDetails from "./Pages/RoomDetails/RoomDetails";
import Inbox from "./Pages/Messages/Inbox";
import StaffProfile from "./Pages/Staffs Profile/StaffProfile";
import { Carousels } from "./Pages/BrandJashore/Carousels";
import ProtectedRoute from "./Provider/ProtectedRoute"; 
import HelpLine from "./Pages/Home/HelpLine";
import Media from "./Pages/Media/Media";
import Store from "./Pages/store/Store";
import AddMedia from "./Pages/Media/AddMedia";





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
        path: "/attractions",
        element: <Carousels />,
      },

      {
        path: "/help-line",
        element: <HelpLine></HelpLine>,
      },
      {
        path: "/visitJashore",
        element: <Media></Media>,
      },
      {
        path: "/ourStore",
        element: <Store></Store>,
      },
      {
        path: "/addMedia",
        element: <AddMedia></AddMedia>,
      },
     
    ],
  },
  {
    path: "/",
    element: <Appbar />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "room",
        element: <ProtectedRoute><Room /></ProtectedRoute>, // Protected route

      },
      {
        path: "rooms",
        element: <ProtectedRoute><Rooms /></ProtectedRoute>, // Protected route
      },
      {
        path: "details",
        element: <ProtectedRoute><Details /></ProtectedRoute>, // Protected route
      },

      {
        path: "profile", // Add the registration route
        element: <ProtectedRoute><Profile /></ProtectedRoute>, // Protected route
      },

      {
        path: "staff-approval", // Add the registration route
        element: <ProtectedRoute><NDCApproval /></ProtectedRoute>, // Protected route
      },

      {
        path: "book",
        element: <ProtectedRoute><Book /></ProtectedRoute>, // Protected route
      },

      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },

      {
        path: "guest-list",
        element: <ProtectedRoute><Guests /></ProtectedRoute>, // Protected route
      },

      {
        path: "checkout-history",
        element: <ProtectedRoute><CheckoutHistory /></ProtectedRoute>, // Protected route
      },

      {
        path: "checkout",
        element: <ProtectedRoute><Checkout /></ProtectedRoute>, // Protected route
      },

      {
        path: "checkout-summary",
        element: <ProtectedRoute><CheckoutSummary /></ProtectedRoute>, // Protected route
      },

      {
        path: "food",
        element: <ProtectedRoute><Food /></ProtectedRoute>, // Protected route
      },

      {
        path: "other",
        element: <ProtectedRoute><Other /></ProtectedRoute>, // Protected route
      },
      {
        path: "inbox",
        element: <ProtectedRoute><Inbox/></ProtectedRoute>, // Protected route
      },

      {
        path: "staff-profile",
        element: <ProtectedRoute><StaffProfile/></ProtectedRoute>, // Protected route
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
