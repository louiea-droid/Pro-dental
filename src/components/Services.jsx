export default function Services() {
  return (
    <section className="services" id = "services">
      <span className="section-tag">Our Services</span>
      <h2>What We Offer</h2>

      <div className="service-grid">
        <div className="service-card">
          <h3>Dental Billing & Revenue Management</h3>
          <p>Expert handling of insurance claims, claim scrubbing, and reducing accounts receivable (AR)</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <h3>Insurance Verification</h3>
          <p>Confirming patient coverage and eligibility in real-time.</p>
          <a href="#">Learn More →</a>
        </div>

        <div className="service-card">
          <h3>Patient Scheduling & Support</h3>
          <p>24/7, AI-powered, or live agent support for appointments, inquiries, and follow-ups.</p>
          <a href="#">Learn More →</a>
        </div>

         <div className="service-card">
          <h3>Administrative Support</h3>
          <p>Managing patient records, dental transcription, and after-hours call handling. </p>
          <a href="#">Learn More →</a>
        </div>
      </div>
    </section>
  );
}
