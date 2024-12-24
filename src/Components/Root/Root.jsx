import { Outlet } from 'react-router-dom';  // Import the Outlet component
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className="">
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>

    </div>
  );
};

export default Root;
