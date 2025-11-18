import React from "react";
import { Link } from "react-router-dom";
import "./Location.css";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";

function Location() {
  return (
    <div className="location-page">
      <h1>Find Us</h1>
      <p className="subtitle">
        Visit us in the heart of downtown — we're easy to find and always welcoming
      </p>

      <div className="location-content">
        <div className="map-container">
          <iframe
            title="Cafe Silver 7 Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.1541994885815!2d74.56189327515105!3d16.769002184016447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc11f235c2a083d%3A0xeb319f5a45818bd9!2sCafe%20silver%207!5e0!3m2!1sen!2sin!4v1753114062802!5m2!1sen!2sin"
            width="100%"
            height="250"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="details-container">
          <h2>Visit Cafe Silver 7</h2>
          <p><FaMapMarkerAlt /> Near Kolhapur Station, Kolhapur, Maharashtra, India 416001</p>
          <p><FaPhoneAlt /> +91 9876 543 210</p>
          <p><FaEnvelope /> hello@cafesilver7.com</p>
          <p><FaClock /> Mon–Fri: 7AM–11PM<br />Sat: 7AM–12AM<br />Sun: 8AM–11PM</p>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>Cafe Silver 7</h4>
            <p>Experience the finest coffee and artisanal treats in a warm, welcoming atmosphere.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>
              <Link to="/" className="footer-link">Home</Link><br />
              <Link to="/menu" className="footer-link">Menu</Link><br />
              <Link to="/reservation" className="footer-link">Reservation</Link>
            </p>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>123 Coffee Street<br />Downtown District<br />Phone:9970023020<br />Email:cafesilver7@gmail.com</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon–Fri: 6:00 AM–10:00 PM<br />Sat: 7:00 AM–11:00 PM<br />Sun: 7:00 AM–9:00 PM</p>
          </div>
        </div>
        <p className="copyright">© 2024 Cafe Silver 7. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Location;
