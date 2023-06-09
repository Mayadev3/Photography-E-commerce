import React, { useEffect, useState } from "react";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function NavBar() {
  const scrollToCarousel = () => {
    const carouselSection = document.getElementById("praha");
    carouselSection.scrollIntoView();
  };

  const scrollToLonely = () => {
    const lonelySection = document.getElementById("lonely");
    lonelySection.scrollIntoView();
  };

  return (
    <div className="NavBar">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <NavLink to="/" className="navbar-brand logo">
            Samia Alamgir
          </NavLink>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={scrollToCarousel}
              >
                Homage To Praha
              </NavLink>
              <a className="nav-link" href="#">
                City Tales
              </a>
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/"
                onClick={scrollToLonely}
              >
                {" "}
                Dear Lonely City
              </NavLink>

              <a className="nav-link" href="#">
                Diaspora
              </a>
              <div className="insta-cart">
                <a
                  href="https://www.instagram.com/samia_alamgiir/"
                  target="_blank"
                  className="insta"
                >
                  {" "}
                  <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
                </a>

                <NavLink to="/cart" className="nav-link">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="cart-icon"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
