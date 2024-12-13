import { Outlet } from 'react-router-dom';  // Import the Outlet component
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const Root = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className='bg-amber-50'>
        <div className="flex-grow p-8">
          <Navbar/>
        </div>
        <main >
          <Outlet /> 
        </main> 
      </div>
        <Footer />

    </div>
  );
};

export default Root;
