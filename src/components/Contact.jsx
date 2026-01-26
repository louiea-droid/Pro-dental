import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock
} from "react-icons/fa";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact-info">
        <span className="section-tag">Get In Touch</span>
        <h2>Ready to Transform Your Smile?</h2>
        <p>
          Schedule your appointment today and take the first step
          towards a healthier smile.
        </p>

        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <span>(555) 123-4567</span>
        </div>

        <div className="contact-item">
          <FaMapMarkerAlt className="contact-icon" />
          <span>123 Smile Street, Suite 100</span>
        </div>

        <div className="contact-item">
          <FaClock className="contact-icon" />
          <span>Mon–Fri: 8am–6pm</span>
        </div>
      </div>

      <form className="contact-form">
        <h3>Book Your Appointment</h3>

        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email Address" />
        <input type="tel" placeholder="Phone Number" />

        <select>
          <option>Select a service</option>
          <option>Dental Implants</option>
          <option>Emergency Care</option>
          <option>Pediatric Dentistry</option>
        </select>

        <button className="btn-primary">
          Request Appointment
        </button>
      </form>
    </section>
  );
}
