import { NavLink } from "react-router-dom";
import joyful from "../../assets/Footer/joyful.png";
const Footer = () => {
  return (
    <footer className="bg-[#213555] text-white py-5">
      <div className="container mx-auto px-4 md:px-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
          {/* Logo Section */}
          <div className="text-center mb-6">
            {/* Logo Image */}
            <img src={joyful} alt="Logo"

              className="mx-auto mt-2 w-12 h-12" // Adjust size as needed
            />
            <div className="text-2xl font-bold text-with-gradient lg:text-2xl">
              <NavLink to="/">Jashore Circuit House</NavLink>
            </div>

          </div>

          {/* Google Map Section */}
          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.2299980562566!2d89.20374617515691!3d23.161804279076435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff10f5b37d7a87%3A0xbc25e9238b80a536!2sJashore%20Circuit%20House!5e0!3m2!1sen!2sbd!4v1735969516344!5m2!1sen!2sbd"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg shadow-lg"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Section */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <p className="text-gray-300 text-sm sm:text-base mb-2">
              <strong>Location:</strong> Jashore Circuit House,<br/> Jashore, Khulna, Bangladesh
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              <strong>Phone:</strong> +8801733909222
            </p>
            <p className="text-gray-300 text-sm sm:text-base">
              <strong>Email:</strong> chjashore@gmail.com
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-5 border-t border-gray-600 pt-4 text-center">
          <p className="text-gray-400 text-sm sm:text-base">
            © 2025 Jashore Circuit House, Inc. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm sm:text-base">
            Developed by Utshab Technology
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
