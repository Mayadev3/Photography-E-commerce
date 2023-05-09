import React, { useEffect, useState } from "react";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function Carousel() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    allPics();
  }, []);

  async function allPics() {
    try {
      let response = await fetch("http://localhost:3003/pictures");
      if (response.ok) {
        let data = await response.json();
        setPictures(data);
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
            {pictures.map((picture, index) => (
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
            {pictures.map((picture, index) => (
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
                    <p style={{ color: "yellow" }}>Price: {picture.price}€</p>
                  </strong>
                  <button className="cart-button">
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
