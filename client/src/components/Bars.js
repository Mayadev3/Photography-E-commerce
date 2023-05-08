import React, { useEffect, useState } from "react";
import "./Bars.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Bars() {
  return (
    <div className="Bars">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand logo" href="#">
            Samia Alamgir
          </a>
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
              <a class="nav-link active" aria-current="page" href="#">
                Homage To Praha
              </a>
              <a class="nav-link" href="#">
                City Tales
              </a>
              <a class="nav-link" href="#">
                Dear Lonely City
              </a>
              <a class="nav-link" href="#">
                Diaspora
              </a>
              <div className="insta-cart">
                <FontAwesomeIcon icon={faInstagram} className="insta-icon" />
                <FontAwesomeIcon icon={faShoppingCart} className="cart-icon" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
