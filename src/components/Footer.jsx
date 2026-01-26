import dent_logo from "../assets/Image/1.png"
import dent_logo2 from "../assets/Image/2.png"
export default function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-grid">
        
        <div>
  <div className="name-logo">
        <div className="name-logo">
                <img src={dent_logo} 
                className="name-icon" alt="Dental care" />
              <div/>


        <div className="name-logo2">
                <img src={dent_logo2} 
                className="name-icon2" alt="Dental care" />
              <div/>
       
              </div>
              </div>
              </div>
              </div>
        <div className="quick-links" >
          <h4>Quick Links</h4>
          <p onClick={() => scrollToSection("services")}>Services</p>
          <p onClick={() => scrollToSection("about")}>About</p>
          <p onClick={() => scrollToSection("reviews")}>Benefits</p>
          <p onClick={() => scrollToSection("contact")}>Contact</p>
        </div>

        <div>
          <h4>Contact</h4>
          <p>(555) 123-4567</p>
          <p>info@brightsmile.com</p>
        </div>
      </div>

      <span className="copyright">
        © 2026 Pro Dental BPO. All rights reserved.
      </span>
    </footer>
  );
}
