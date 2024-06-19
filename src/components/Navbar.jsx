import logo from "../assets/Logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaPhoneSquare } from "react-icons/fa";



const Navbar = () => {
  return (
  <nav className =" flex items-center justify-between mx-10">
    <div className="flex flex-shrink-0 items-center">
          <img  className =" mx-2 p w-20 " src ={logo} alt ="logo"/>
    </div>
    <div className ="m-8 flex item-center justify-center gap-4 text-2xl ">
       
        <a href=" https://www.linkedin.com/in/rahi-reyaz" target="_blank" className=" hover:text-red-700"><FaLinkedin/> </a>
        <a href=" https://github.com/rahi-ryaz"  target="_blank"  className=" hover:text-red-700"> <FaGithub/> </a>
        <a href="mailto:example@gmail.com"  target="_blank"  className=" hover:text-red-700"> <BiLogoGmail />  </a>
        <a href="tel:+917889780544"  target="_blank"  className =" hover:text-red-700"> <FaPhoneSquare /> </a>
  
     </div>
  </nav>
  );
  

};
export default Navbar;