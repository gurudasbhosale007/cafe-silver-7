import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import bannerImg from "./assets/banner.jpg";

// ✅ import the menu images properly
import cappuccinoImg from "./assets/cappuccino.jpeg";
import croissantImg from "./assets/croissant.jpeg";
import avocadoToastImg from "./assets/avocado-toast.jpeg";
import brownieImg from "./assets/brownie.jpeg";

function Home() {
  return (
    <>
      {/* Banner */}
      <div className="home-banner">
        <img src={bannerImg} alt="Cafe Banner" className="banner-img" />
        <div className="banner-overlay">
          <div className="banner-content">
            <h1>Cafe Silver 7</h1>
            <p>Your daily dose of coffee and comfort ☕✨</p>
            <div className="home-buttons">
              <Link to="/menu" className="btn btn-primary">
                View Our Menu
              </Link>
              <Link to="/reservation" className="btn btn-outline">
                Make Reservation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose */}
      <div className="why-choose">
        <h2>Why Choose Cafe Silver 7?</h2>
        <p>We’re more than just a coffee shop – we’re your daily dose of comfort and quality</p>
        <div className="features">
          <div className="feature-card">
            <h3>☕ Premium Coffee</h3>
            <p>Carefully sourced beans from sustainable farms, expertly roasted to perfection.</p>
          </div>
          <div className="feature-card">
            <h3>🏠 Cozy Atmosphere</h3>
            <p>A warm, welcoming space designed for relaxation, work, or catching up with friends.</p>
          </div>
          <div className="feature-card">
            <h3>🥐 Fresh Pastries</h3>
            <p>Baked pastries, sandwiches, and treats made daily by our skilled bakers.</p>
          </div>
        </div>
      </div>

      {/* Signature Offerings */}
      <div className="signature-offerings">
        <h2>Our Signature Offerings</h2>
        <p>A taste of what awaits you at Cafe Silver 7</p>
        <div className="menu-cards">
          <div className="menu-card">
            <img src={cappuccinoImg} alt="Cappuccino" />
            <h4>Signature Cappuccino</h4>
            <p>Rich espresso with perfectly steamed milk and artistic foam</p>
            <p className="price">₹375</p>
          </div>
          <div className="menu-card">
            <img src={croissantImg} alt="Croissant" />
            <h4>Buttery Croissant</h4>
            <p>Flaky, golden pastry baked fresh every morning</p>
            <p className="price">₹270</p>
          </div>
          <div className="menu-card">
            <img src={avocadoToastImg} alt="Avocado Toast" />
            <h4>Avocado Toast</h4>
            <p>Fresh avocado on artisan bread with seasonal toppings</p>
            <p className="price">₹685</p>
          </div>
          <div className="menu-card">
            <img src={brownieImg} alt="Brownie" />
            <h4>Chocolate Brownie</h4>
            <p>Rich, fudgy brownie made with premium Belgian chocolate</p>
            <p className="price">₹440</p>
          </div>
        </div>
        <Link to="/menu" className="btn btn-primary view-full-menu">
          View Full Menu
        </Link>
      </div>

      {/* Call to Action */}
      <div className="cta-bar">
        <h2>Ready for Your Perfect Coffee Experience?</h2>
        <p>Join us today and discover why Cafe Silver 7 is the neighborhood’s favorite gathering place</p>
        <div>
          <Link to="/reservation" className="btn-primary cta-btn">
            Reserve Your Table
          </Link>
          <Link to="/location" className="btn-outline cta-btn">
            Find Us
          </Link>
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
    </>
  );
}

export default Home;  
