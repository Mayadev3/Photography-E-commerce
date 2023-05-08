import Homepage from "./components/Homepage";
import Bars from "./components/Bars";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <Bars />
      <Homepage />
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
