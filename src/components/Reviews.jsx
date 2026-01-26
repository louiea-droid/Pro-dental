import { FaStar } from "react-icons/fa";

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
     
      <h2> Our Benefits</h2>

      <div className="review-grid">
        <div className="benefit-card">
          <div className="benefit-sents">
             <strong>Reduced Overhead</strong>
          </div>
          <p>
             Lower costs associated with hiring, training, and equipment for in-house staff.
          </p>
         
        </div>

        <div className="benefit-card">
          <div className="benefit-sents">
           <strong>Increased Accuracy</strong>
          </div>
          <p>
            Specialized teams reduce billing errors and speed up insurance claims processing.
          </p>
         
        </div>

        <div className="benefit-card">
          <div className="benefit-sents">
      <strong>Focus on Patient Care</strong>
          </div>
          <p>
           Allows dentists and their staff to focus on treatment rather than paperwork.
          </p>
          
        </div>
          <div className="benefit-card">
          <div className="benefit-sents">
      <strong>Improved Patient Experience</strong>
          </div>
          <p>
            24/7 service availability for appointment scheduling and inquiries. 
          </p>
          
        </div>
      </div>
    </section>
  );
}
