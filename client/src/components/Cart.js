import React, { useEffect, useState } from "react";
import NavBar from "./NavBar.js";

// const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export default function Cart() {
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // }, [cart]);

  return (
    <div className="Cart">
      <NavBar />
      Hello from Cart
    </div>
  );
}
