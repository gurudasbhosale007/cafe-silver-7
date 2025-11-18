import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

// import images per item
import cappuccinoImg from "./assets/menu/cappuccino.jpeg";
import latteImg from "./assets/menu/latte.jpeg";
import velvetImg from "./assets/menu/velvet.jpeg";
import flatWhiteImg from "./assets/menu/flatwhite.jpeg";
import cinnamonImg from "./assets/menu/cinnamon.jpeg";
import espressoImg from "./assets/menu/espresso.jpeg";
import vanillaLatteImg from "./assets/menu/vanillalatte.jpeg";
import filterCoffeeImg from "./assets/menu/filtercoffee.jpeg";

import sandwichImg from "./assets/menu/sandwich.jpeg";
import cheeseFryImg from "./assets/menu/cheesefry.jpeg";
import garlicBreadImg from "./assets/menu/garlicbread.jpeg";
import breadSticksImg from "./assets/menu/breadsticks.jpeg";
import vegBurgerImg from "./assets/menu/vegburger.jpeg";
import vegPizzaImg from "./assets/menu/vegpizza.jpeg";
import chickenPocketsImg from "./assets/menu/chickenpockets.jpeg";
import pitaBreadImg from "./assets/menu/pitabread.jpeg";

import veganShakeImg from "./assets/menu/veganshake.jpeg";
import coldCoffeeImg from "./assets/menu/coldcoffee.jpeg";
import coldMochaImg from "./assets/menu/coldmocha.jpeg";
import icedTeaImg from "./assets/menu/icedtea.jpeg";
import chilledLatteImg from "./assets/menu/chilledlatte.jpeg";
import vanillaScoopImg from "./assets/menu/vanillascoop.jpeg";
import belgianChocolateImg from "./assets/menu/belgian.jpeg";
import crunchyFrappeImg from "./assets/menu/frappe.jpeg";
import chocolateShakeImg from "./assets/menu/chocolateshake.jpeg";

import cheesecakeImg from "./assets/menu/cheesecake.jpeg";
import chocoFantasyImg from "./assets/menu/chocofantasy.jpeg";
import brownieImg from "./assets/menu/brownie.jpeg";
import chocoFudgeImg from "./assets/menu/chocofudge.jpeg";
import berryCheesecakeImg from "./assets/menu/berrycheesecake.jpeg";
import strawberryCakeImg from "./assets/menu/strawberrycake.jpeg";
import redVelvetCakeImg from "./assets/menu/redvelvetcake.jpeg";

const menu = {
  "Hot Coffee": [
    { name: "Cappuccino", price: 50, image: cappuccinoImg },
    { name: "Café Latte", price: 100, image: latteImg },
    { name: "Velvet Coffee", price: 100, image: velvetImg },
    { name: "Flat White", price: 50, image: flatWhiteImg },
    { name: "Cinnamon Coffee", price: 150, image: cinnamonImg },
    { name: "Espresso", price: 199, image: espressoImg },
    { name: "Vanilla Latte", price: 200, image: vanillaLatteImg },
    { name: "Filter Coffee", price: 200, image: filterCoffeeImg },
  ],
  Snacks: [
    { name: "Sandwich", price: 70, image: sandwichImg },
    { name: "Cottage Cheese Fry", price: 100, image: cheeseFryImg },
    { name: "Garlic Bread", price: 120, image: garlicBreadImg },
    { name: "Bread Sticks", price: 199, image: breadSticksImg },
    { name: "Veg Burger", price: 100, image: vegBurgerImg },
    { name: "Veg Pizza", price: 199, image: vegPizzaImg },
    { name: "Chicken Pockets", price: 399, image: chickenPocketsImg },
    { name: "Pita Bread", price: 200, image: pitaBreadImg },
  ],
  "Cold Coffee": [
    { name: "Vegan Shake", price: 199, image: veganShakeImg },
    { name: "Cold Coffee", price: 90, image: coldCoffeeImg },
    { name: "Cold Mocha", price: 200, image: coldMochaImg },
    { name: "Iced Tea", price: 100, image: icedTeaImg },
    { name: "Chilled Latte", price: 399, image: chilledLatteImg },
    { name: "Vanilla Scoop", price: 399, image: vanillaScoopImg },
    { name: "Belgian Chocolate", price: 199, image: belgianChocolateImg },
    { name: "Crunchy Frappé", price: 399, image: crunchyFrappeImg },
    { name: "Chocolate Shake", price: 499, image: chocolateShakeImg },
  ],
  Dessert: [
    { name: "Cheesecake", price: 199, image: cheesecakeImg },
    { name: "Choco Fantasy", price: 299, image: chocoFantasyImg },
    { name: "Brownie", price: 499, image: brownieImg },
    { name: "Choco Fudge", price: 199, image: chocoFudgeImg },
    { name: "Berry Cheesecake", price: 199, image: berryCheesecakeImg },
    { name: "Strawberry Cake", price: 399, image: strawberryCakeImg },
    { name: "Red Velvet Cake", price: 499, image: redVelvetCakeImg },
  ],
};

function Menu() {
  return (
    <div className="menu-container">
      <div className="menu-header">
  <h1>Our Menu</h1>
  <p>
    Discover our carefully crafted selection of premium coffee, snacks,
    desserts and more!
  </p>
</div>


      {Object.keys(menu).map((category) => (
        <div key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-grid">
            {menu[category].map((item, index) => (
              <div key={index} className="menu-card">
                <img src={item.image} alt={item.name} className="menu-image" />
                <div className="menu-info">
                  <h3>{item.name}</h3>
                  <p>₹{item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

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
            <p>123 Coffee Street<br />Downtown District<br />Phone: (555) 123-7777<br />Email: hello@cafesilver7.com</p>
          </div>
          <div>
            <h4>Hours</h4>
            <p>Mon–Fri: 6AM–10PM<br />Sat: 7AM–11PM<br />Sun: 7AM–9PM</p>
          </div>
        </div>
        <p className="copyright">© 2024 Cafe Silver 7. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Menu;
