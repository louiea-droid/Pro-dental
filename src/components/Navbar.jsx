import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import dental_logo from "../assets/Image/1.png";
import dental_logo2 from "../assets/Image/2.png";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false); // close mobile menu
    }
  };

  return (
    <nav className="nav">
        <div className="nav-logo">
                <img src={dental_logo} 
                className="logo-icon" alt="Dental care" />
              
       <div className="nav-logo2">
                <img src={dental_logo2} 
                className="logo-icon2" alt="Dental care" />  
        
      
        
        </div>
       

      </div>

      <ul className={`nav-links ${open ? "open" : ""}`}>
        <li onClick={() => scrollToSection("services")}>Services</li>
        <li onClick={() => scrollToSection("about")}>About</li>
        <li onClick={() => scrollToSection("reviews")}>Benefits</li>
        <li onClick={() => scrollToSection("contact")}>Contact</li>

        <button
          className="btn-primary mobile-btn"
          onClick={() => scrollToSection("contact")}
        >
          Book Appointment
        </button>
      </ul>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
      >
        {open ? <FaTimes /> : <FaBars />}
      </button>

      <button
        className="btn-primary desktop-btn"
        onClick={() => scrollToSection("contact")}
      >
        Book Appointment
      </button>
    </nav>
  );
}
