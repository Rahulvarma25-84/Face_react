import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contactus.css";

const ContactUs = () => {
  const [state, handleSubmit] = useForm("mkgwnaqz");

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h2 className="contact-header">Contact Us</h2>
        <div className="contact-info">
          <p>
            If you have any questions, suggestions, or if you want to get
            involved with FACE Club, feel free to reach out to us. We are always
            open to new ideas and collaborations.
          </p>
          <p>Email: FaceASEB@gmail.com</p>
          <p>Phone No.: (+91) 63641-51707</p>
        </div>
        {state.succeeded ? (
          <p>Thanks for your message! We'll get back to you soon.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-field1">
              <div className="form-field1">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
              </div>
              <div className="form-field1">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="message">Message:</label>
              <textarea id="message" name="message" rows="3" />
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>
            <button
              type="submit"
              className="submit-button"
              disabled={state.submitting}
            >
              Send Message
            </button>
          </form>
        )}
        <div className="social-icons">
          <a href="#" className="social-icon">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
      <div className="map-container">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.2000010277447!2d77.6731963597311!3d12.894857487361003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1303337c1ea7%3A0x8d48e3c7dd1e0b50!2sAmrita%20Vishwa%20Vidyapeetham%2C%20Bengaluru!5e0!3m2!1sen!2sin!4v1717739019275!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, paddingBottom: "10vh" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
