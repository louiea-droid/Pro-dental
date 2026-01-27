import { useEffect, useState } from "react";
import Smile_love from "../assets/Image/smile love.jpg";

export default function Hero() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className={`hero ${animate ? "hero-animate" : ""}`}>
      <div className="hero-text">
        <span className="hero-tag">Your Smile, Our Love</span>

        <h1>
          Beautiful Smiles
          <br />
          Starts with Love
        </h1>

        <p>
          Experience gentle, compassionate dental care with our team of
          experts. We combine advanced technology with a warm,
          welcoming environment.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">
            Schedule Visit →
          </button>

          <button
            className="btn-outline"
            onClick={() => scrollToSection("services")}
          >
            Our Services
          </button>
        </div>

        <div className="hero-stats">
          <div>
            <h3>15+</h3>
            <span>Years Experience</span>
          </div>
          <div>
            <h3>10k+</h3>
            <span>Happy Patients</span>
          </div>
          <div>
            <h3>4.9</h3>
            <span>Star Rating</span>
          </div>
        </div>
      </div>

      <div className="hero-image">
        <div className="image-box">
          <img src={Smile_love} alt="Dental care" />
        </div>
      </div>
    </section>
  );
}
