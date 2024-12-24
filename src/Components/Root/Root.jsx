import { Outlet } from 'react-router-dom';  // Import the Outlet component
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex-grow">
    <Navbar></Navbar>
    <Outlet></Outlet>
    </div>
    <Footer></Footer>
  </div>
  );
};

export default Root;
