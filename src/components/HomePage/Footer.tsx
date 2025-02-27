
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-green-600 text-white py-8 mt-8">
      <div className="max-w-screen-xl mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul>
              <li><Link to="/about" className="hover:underline">About Us</Link></li>
              <li><Link to="/bicycles" className="hover:underline">Bicycles</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul>
              <li>Phone: 01700000000</li>
              <li>Email: support@cyclehouse.com</li>
              <li>Address: Dhaka, Bangladesh</li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank"  className="text-2xl hover:text-green-700">
                <FaFacebook />
              </a>
              <a href="https://instagram.com" target="_blank" className="text-2xl hover:text-green-700">
                <FaInstagram />
              </a>
              <a href="https://twitter.com" target="_blank"  className="text-2xl hover:text-green-700">
                <FaTwitter />
              </a>
            </div>
          </div>

        
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p>Subscribe for the latest updates and offers:</p>
            <div className="mt-2 flex">
              <input type="email" placeholder="Enter your email" style={{outline:'none'}} className="px-4 py-2 rounded-l-md text-black" />
              <button type="submit" className=" text-white px-4 py-2 rounded-r-md bg-green-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

      
        <div className="mt-8  border-gray-600 pt-2 text-center text-sm">
          <p>© 2025 CycleHouse. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;