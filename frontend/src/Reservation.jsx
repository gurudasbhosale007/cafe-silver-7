import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaClock } from "react-icons/fa";
import "./Reservation.css";

function Reservation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    people: "",
    date: "",
    time: "",
    requests: ""
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/reservation", formData)
      .then((res) => {
        setMessage(res.data || "Reservation submitted!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          people: "",
          date: "",
          time: "",
          requests: ""
        });
      })
      .catch(() => setMessage("Something went wrong. Try again."));
  };

  return (
    <>
      <div className="reservation-hero">
        <h1>Make a Reservation</h1>
        <p>Reserve your perfect spot at Cafe Silver 7 for an unforgettable experience</p>
      </div>

      <div className="reservation-content">
        <div className="reservation-form-container">
          <h2>Book Your Table</h2>
          <form className="reservation-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Full Name *"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address *"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number *"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="people"
              placeholder="Number of Guests *"
              value={formData.people}
              onChange={handleChange}
              required
            />
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            <textarea
              name="requests"
              placeholder="Special Requests"
              value={formData.requests}
              onChange={handleChange}
            />
            <button type="submit">Submit Reservation Request</button>
          </form>
          {message && <p className="reservation-message">{message}</p>}
        </div>

        <div className="reservation-info">
          <h2>Reservation Information</h2>
          <p><FaClock /> Operating Hours<br />Mon–Fri: 6AM–10PM<br />Sat: 7AM–11PM<br />Sun: 7AM–9PM</p>
          <p><FaEnvelope /> Group Reservations<br />For 8+ guests, call us directly</p>
          <p><FaClock /> Advance Booking<br />We accept bookings up to 30 days in advance</p>
          <p><FaPhoneAlt /> Contact Us<br />Phone:9970023020<br />Email:cafesilver7@gmail.com</p>
          <div className="reservation-note">
            <p><strong>Please Note:</strong><br />
              - Arrive within 15 mins of booking time<br />
              - Cancellations require 2-hour notice<br />
              - Walk-ins welcome based on availability<br />
              - Weekends are busy — book early!</p>
          </div>
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
            <p>Mon–Fri: 6AM–10PM<br />Sat: 7AM–11PM<br />Sun: 7AM–9PM</p>
          </div>
        </div>
        <p className="copyright">© 2024 Cafe Silver 7. All rights reserved.</p>
      </footer>
    </>
  );
}

export default Reservation;
