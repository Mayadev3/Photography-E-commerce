import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./LonelyCarousel.css";

export default function LonelyCarousel() {
  const [lonelyPics, setLonelyPics] = useState([]);

  useEffect(() => {
    getLonelies();
  }, []);

  const getLonelies = async () => {
    try {
      let response = await fetch("http://localhost:3003/lonely");
      if (response.ok) {
        let data = await response.json();
        setLonelyPics(data);
      } else {
        console.log(`Server Error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network Error: ${err.message}`);
    }
  };

  return (
    <div className="LonelyCarousel" id="lonely">
      {" "}
      <div className="lonely-grid-carousel">
        <div className="lonely-beautiful-writing">
          <h5 className="lonely-carousel-description">Dear Lonely City</h5>
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
        <div
          id="carouselExampleCaptions"
          className="carousel slide container"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            {lonelyPics.map((picture, index) => (
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
            {lonelyPics.map((picture, index) => (
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
      </div>
    </div>
  );
}
