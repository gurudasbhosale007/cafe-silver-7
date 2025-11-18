import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Menu from "./Menu";
import Reservation from "./Reservation";
import Location from "./Location";
import Reviews from "./Reviews";

function App() {
  return (
    <Router>
      <div style={{ padding: "20px" }}>
        <nav>
          <Link to="/">Menu</Link> |{" "}
          <Link to="/reservation">Reservation</Link> |{" "}
          <Link to="/location">Location</Link> |{" "}
          <Link to="/reviews">Reviews</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Menu />} />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/location" element={<Location />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
