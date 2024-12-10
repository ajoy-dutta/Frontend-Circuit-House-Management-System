
const Footer = () => {
    return (
      <footer className=" bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        {/* Links */}
        <div className="flex justify-center space-x-8 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            Home
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Food
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Room
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Profile
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Accessibility
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Sign in
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-6">
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-facebook"></i> {/* Facebook Icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-instagram"></i> {/* Instagram Icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-twitter"></i> {/* Twitter (X) Icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-github"></i> {/* GitHub Icon */}
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            <i className="fab fa-youtube"></i> {/* YouTube Icon */}
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          © 2024 Utshob Technology, Inc. All rights reserved.
        </p>
      </div>
    </footer>
    );
};

export default Footer;