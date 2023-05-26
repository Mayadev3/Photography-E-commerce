import React, { useEffect, useState, useContext } from "react";
import NavBar from "./NavBar.js";
import PrahaContext from "./PrahaContext.js";

export default function Cart() {
  let prahaStuff = useContext(PrahaContext);
  console.log(prahaStuff);

  return (
    <div className="Cart">
      <NavBar />
      Hello from Cart
    </div>
  );
}
