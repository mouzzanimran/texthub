import React, { useState } from "react";
import emailjs from "emailjs-com"; // using emailjs-com
import "./Feedback.css";

export default function Feedback() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name.trim() || !message.trim()) {
      alert("Please fill in both your name and feedback 🙂");
      return;
    }

    const serviceID = "service_uj04f8m";
    const templateID = "template_hgjdhpm";
    const userID = "_Mo2m2YKKTMqpslMe"; // EmailJS user/public key

    const templateParams = {
      name: name,                            // matches {{name}}
      time: new Date().toLocaleString(),     // matches {{time}}
      message: message                        // matches {{message}}
    };

    emailjs
      .send(serviceID, templateID, templateParams, userID)
      .then(
        (response) => {
          console.log("Email sent successfully!", response.status, response.text);
          setSubmitted(true);
          setName("");
          setMessage("");
        },
        (error) => {
          console.error("Failed to send email:", error);
          alert("Something went wrong. Please try again later.");
        }
      );
  };

  return (
    <div className="feedback-container text-light">
      <h2 className="feedback-title">I would love your feedback 💬</h2>

      {submitted ? (
        <p>Thank you for your feedback </p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="userName" className="form-label">
              Your Name
            </label>
            <input
              type="text"
              className="form-control feedback-input"
              id="userName"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="userFeedback" className="form-label">
              Share your thoughts
            </label>
            <textarea
              className="form-control feedback-textarea"
              id="userFeedback"
              rows="7"
              placeholder="Type your feedback here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary feedback-btn">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
}
