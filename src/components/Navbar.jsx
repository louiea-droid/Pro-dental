import { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import dental_logo from "../assets/Image/1.png";
import dental_logo2 from "../assets/Image/2.png";
import "../assets/Style/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeout = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);

      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      scrollTimeout.current = setTimeout(() => {
        setIsScrolling(false);
      }, 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  return (
    <nav className={`nav ${isScrolling ? "scrolling" : ""}`}>
      {/* LOGO */}
      <div className="nav-logo">
        <img src={dental_logo} className="logo-icon" alt="Dental Logo" />
        <img src={dental_logo2} className="logo-icon2" alt="Dental Name" />
      </div>

      {/* LINKS */}
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

      {/* HAMBURGER */}
      <button className="menu-toggle" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
  

      </button>

      {/* DESKTOP BUTTON */}
      <button
       className ="slice">
      <span className ="text">Book Appointment</span>
        
      
        
      </button>
    </nav>
  );
}
