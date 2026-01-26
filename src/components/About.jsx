import den_love from "../assets/Image/den.jpg";
export default function About() {
  return (
    <section className="about" id ="about">
      <div className="about-image">
        <img
          src={den_love}
          alt="Dental team"
        />
      </div>

      <div className="about-text">
        <span className="section-tag">About Our Practice</span>
        <h2>Dedicated to Your Dental Health</h2>

        <p>
          Dental Business Process Outsourcing (BPO) involves contracting non-clinical, administrative tasks—such as billing, insurance verification, patient scheduling, and call center support—to specialized third-party providers. It helps dental practices reduce overhead costs (typically 4%–10% of revenue for billing services), improve operational efficiency, and boost revenue. 
        </p>

        <ul>
          <li>✔ Flexible hours</li>
          <li>✔ Insurance friendly</li>
          <li>✔ Experienced professionals</li>
        </ul>
      </div>
    </section>
  );
}
