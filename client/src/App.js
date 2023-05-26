import Homepage from "./components/Homepage";
import NavBar from "./components/NavBar.js";
import PrahaCarousel from "./components/PrahaCarousel";
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
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

//here i created a home component that embodies the other components and on line 16 assigned it to a route
function Home() {
  return (
    <div className="Home">
      <NavBar />
      <Homepage />
      <PrahaCarousel />
      <LonelyCarousel />
    </div>
  );
}
export default App;
