import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#213555] text-white py-5">
      <div className="container mx-auto px-4 md:px-5">
        {/* Links Section */}
        {/* <div className="hidden md:block">
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-6">
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Food
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Room
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Profile
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Accessibility
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-sm md:text-base">
            Sign In
          </a>
        </div>
        </div>
        <div className="block md:hidden">
        <div className="grid grid-cols-2 gap-y-4 gap-x-8 mb-6 place-items-center ">
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm md:text-base"
          >
            Home
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm md:text-base"
          >
            Food
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm md:text-base"
          >
            Room
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm md:text-base"
          >
            Profile
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm md:text-base"
          >
            Accessibility
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-white text-sm md:text-base"
          >
            Sign In
          </a>
        </div>
        </div> */}

        {/* Social Media Icons Section */}
        {/* <div className="flex justify-center space-x-4 sm:space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white text-xl sm:text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl sm:text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl sm:text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl sm:text-2xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-white text-xl sm:text-2xl">
            <i className="fab fa-youtube"></i>
          </a>
        </div> */}
       <div className="grid grid-cols-3 justify-between gap-4">
       <div className="text-2xl font-bold text-with-gradient lg:text-2xl">
          <NavLink to="/"> Circuit House </NavLink>
        </div>

        {/* Copyright Section */}
        <div>
          <p className="text-gray-400 text-sm sm:text-base text-center">
            © 2024 Jashore Circuit House, Inc. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base text-center">
            Developed by Utshob Technology
          </p>
        </div>
       </div>
       <div></div>
      </div>
    </footer>
  );
};

export default Footer;
