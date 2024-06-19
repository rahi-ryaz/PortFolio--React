
import logo from '../assets/Logo.png';
import { FaLinkedin, FaGithub, FaPhoneSquare } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between mx-4 lg:mx-10 py-4">
      {/* Logo section */}
      <div className="flex items-center">
        <img className="w-20 h-auto" src={logo} alt="logo" />
      </div>

      {/* Links section */}
      <div className="flex items-center space-x-4 text-xl lg:text-2xl">
        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/rahi-reyaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaLinkedin />
        </a>
        
        {/* GitHub */}
        <a
          href="https://github.com/rahi-ryaz"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaGithub />
        </a>
        
        {/* Email */}
        <a
          href="mailto:example@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <BiMailSend />
        </a>
        
        {/* Phone */}
        <a
          href="tel:+917889780544"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-700"
        >
          <FaPhoneSquare />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
