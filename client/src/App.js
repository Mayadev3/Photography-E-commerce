import Homepage from "./components/Homepage";
import Bars from "./components/Bars";
import Carousel from "./components/Carousel";
import LonelyCarousel from "./components/LonelyCarousel";
import { Routes, Route, NavLink } from "react-router-dom";
import Cart from "./components/Cart.js";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Bars />
      <Homepage />
      <Carousel />
      <LonelyCarousel />
    </div>
  );
}

export default App;

// import React, { useEffect, useState, useRef } from "react";
// import "./Navbar.css";

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faInstagram } from "@fortawesome/free-brands-svg-icons";
// import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

// export default function Navbar() {
//   return (
//     <div className="Navbar">
//       <h2 className="logo">Samia Alamgir</h2>
//       <div className="navbar-links">
//         <div className="nav-links-1">
//           <p>Homage To Praha</p>
//           <br />
//           <p className="dear">Dear Lonely City</p>
//         </div>
//         <div className="nav-links-2">
//           <p>Diasphora</p>
//           <br />
//           <p className="diaspora">City Tales</p>
//         </div>
//         <div>
//           <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
//           <FontAwesomeIcon icon={faShoppingCart} />
//         </div>
//       </div>
//     </div>
//   );
// }

// {
//   pictures.map((picture) => (
//     <div>
//       <h4>{picture.title}</h4>
//       <img
//         src={`http://localhost:3003/assets/${picture.imagePath}`}
//         alt={picture.title}
//       />
//       <p>{picture.story}</p>
//     </div>
//   ));
// }
