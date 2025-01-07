import { Outlet } from "react-router-dom"; // Ensure correct import
import Navbar from "./Navbar";

// eslint-disable-next-line react/prop-types
const Dashboard = ({ sidebarToggle, setSidebarToggle }) => {
  return (
    <div className={`${sidebarToggle ? "" : "ml-0 md:ml-64"} w-full`}>
      <div className="flex-1">
        <Navbar
          sidebarToggle={sidebarToggle}
          setSidebarToggle={setSidebarToggle}
        />
        <div className="p-4 ">
          {/* This renders child routes */}
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
