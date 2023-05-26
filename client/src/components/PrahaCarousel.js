import React, { useEffect, useState } from "react";
import "./PrahaCarousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./PrahaContext.js";
import PrahaContext from "./PrahaContext.js";
import Cart from "./Cart.js";

//the fall back is an empty array cause the new user usually doesnt have anything in local storage
//it is so the new user has an empty array ready for him in local storage to be filled up
let cartFromLocal = JSON.parse(localStorage.getItem("cart") || "[]");

export default function PrahaCarousel() {
  const [prahaPics, setPrahaPics] = useState([]);
  const [prahaCart, setprahaCart] = useState(cartFromLocal);

  const addToCart = (id) => {
    let findPicture = prahaPics.find((picture) => picture._id === id);
    let copyCart = [...prahaCart];
    if (copyCart.includes(findPicture)) {
      copyCart.slice();
    } else {
      copyCart.push(findPicture);
      setprahaCart((prahaCart) => copyCart);
    }
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(prahaCart));
  }, [prahaCart]);

  useEffect(() => {
    allPics();
  }, []);

  async function allPics() {
    try {
      let response = await fetch(
        "http://localhost:3003/category/categoryPraha/pictures"
      );
      if (response.ok) {
        let data = await response.json();
        setPrahaPics(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  }

  return (
    <div className="Carousel">
      <h3>Stories</h3>
      <div className="grid-carousel" id="praha">
        <div
          id="carouselExampleCaptions"
          className="carousel slide container"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {prahaPics.map((picture, index) => (
              <button
                key={picture._id}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === 0 ? "active" : ""}
                aria-current={index === 0 ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <div className="carousel-inner">
            {prahaPics.map((picture, index) => (
              <div
                key={picture._id}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  src={`http://localhost:3003/assets/${picture.imagePath}`}
                  className="d-block w-100 carousel-img"
                  alt={picture.title}
                />
                <div className="carousel-caption">
                  <h5 className="inner-carousel-title">{picture.title}</h5>
                  <p>{picture.story}</p>
                  <strong>
                    <p className="price" style={{ color: "yellow" }}>
                      Price: {picture.price}€
                    </p>
                  </strong>
                  <button
                    className="cart-button"
                    onClick={() => addToCart(picture._id)}
                  >
                    {" "}
                    <FontAwesomeIcon
                      icon={faShoppingCart}
                      className="cart-icon-button"
                    />
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div className="beautiful-writing">
          <h5 className="carousel-description">Homage To Praha</h5>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
            <br />
            <br />
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged.
            <br />
            <br />
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}
