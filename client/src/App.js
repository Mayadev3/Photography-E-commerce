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
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

//here i created a home component that embodies the other components and on line 16 assigned it to a route
function Home() {
  return (
    <div className="Home">
      <Bars />
      <Homepage />
      <Carousel />
      <LonelyCarousel />
    </div>
  );
}
export default App;
