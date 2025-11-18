import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Review.css";

function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewFormData, setReviewFormData] = useState({
    name: "",
    rating: 0,
    reviewText: ""
  });

  const [hoverRating, setHoverRating] = useState(0);

  const [contactFormData, setContactFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = () => {
    axios
      .get("http://localhost:8080/api/reviews")
      .then((res) => setReviews(res.data))
      .catch((err) => console.error(err));
  };

  const handleReviewChange = (e) => {
    setReviewFormData({ ...reviewFormData, [e.target.name]: e.target.value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/review", reviewFormData)
      .then((res) => {
        alert(res.data);
        setReviewFormData({ name: "", rating: 0, reviewText: "" });
        setHoverRating(0);
        fetchReviews();
      })
      .catch((err) => console.error(err));
  };

  const handleContactChange = (e) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8080/api/contact-message", contactFormData)
      .then((res) => {
        alert(res.data);
        setContactFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: ""
        });
      })
      .catch((err) => console.error(err));
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          style={{
            cursor: "pointer",
            color: i <= (hoverRating || rating) ? "#ffc107" : "#e4e5e9",
            fontSize: "20px"
          }}
          onClick={() => setReviewFormData({ ...reviewFormData, rating: i })}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
        >
          ★
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="reviews-container">
      <h1>Customer Reviews</h1>

      <div className="two-columns">
        {/* LEFT */}
        <div className="left-column">
          <div className="review-form">
            <h2>Leave a Review</h2>
            <form onSubmit={handleReviewSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                value={reviewFormData.name}
                onChange={handleReviewChange}
                required
              />
              <label
                style={{
                  
                  marginTop: "10px",
                  display: "block",
                  color: "#444",
                  
                  
                }}
              >
                Give Rating:
              </label>
              <div className="star-rating">{renderStars(reviewFormData.rating)}</div>
              <textarea
                name="reviewText"
                placeholder="Your review"
                value={reviewFormData.reviewText}
                onChange={handleReviewChange}
                required
              ></textarea>
              <button type="submit">Submit Review</button>
            </form>
          </div>

          <h2>Previous Reviews</h2>
          <div className="review-list">
            {reviews.length === 0 ? (
              <p>No reviews yet.</p>
            ) : (
              reviews.map((r, i) => (
                <div key={i} className="review-item">
                  <div className="review-header">
                    <strong>{r.name}</strong> —{" "}
                    <span>
                      {"★".repeat(r.rating).padEnd(5, "☆")} ({r.rating}/5)
                    </span>
                  </div>
                  <p>{r.reviewText}</p>
                </div>
              ))
            )}
          </div>
        </div>

        {/* RIGHT */}
        <div className="right-column">
          <div className="message-form">
            <h2>Send Us a Message</h2>
            <form onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={contactFormData.fullName}
                onChange={handleContactChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={contactFormData.email}
                onChange={handleContactChange}
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                value={contactFormData.phone}
                onChange={handleContactChange}
              />
              <select
                name="subject"
                value={contactFormData.subject}
                onChange={handleContactChange}
                required
              >
                <option value="">Select Subject</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Feedback">Feedback</option>
                <option value="Support">Support</option>
              </select>
              <textarea
                name="message"
                placeholder="Your Message"
                value={contactFormData.message}
                onChange={handleContactChange}
                required
              ></textarea>
              <button type="submit" className="send-btn">
                Send Message
              </button>
            </form>
          </div>

          <div className="customer-service-box">
            <h3>Customer Service</h3>
            <p>We’re here to help! Reach out with any questions or concerns.</p>
            <ul>
              <li>Phone: (555) 123-7777</li>
              <li>Email: support@cafesilver7.com</li>
              <li>Hours: Mon–Fri 7AM–10PM</li>
            </ul>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-columns">
          <div>
            <h4>Cafe Silver 7</h4>
            <p>Experience the finest coffee and artisanal treats in a warm, welcoming atmosphere.</p>
          </div>
          <div>
            <h4>Quick Links</h4>
            <p>
              <a href="/" className="footer-link">Home</a><br />
              <a href="/menu" className="footer-link">Menu</a><br />
              <a href="/reservation" className="footer-link">Reservation</a>
            </p>
          </div>
          <div>
            <h4>Contact Info</h4>
            <p>123 Coffee Street<br />Downtown District<br />Phone: (555) 123-7777<br />Email: hello@cafesilver7.com</p>
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

export default Reviews;
