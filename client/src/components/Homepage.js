import React, { useEffect, useState } from "react";
import "./Homepage.css";

export default function Homepage() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    getImages();
  }, []);

  const getImages = async () => {
    try {
      const response = await fetch("/pictures.json");
      if (response.ok) {
        let data = await response.json();
        setPictures(data);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Network error: ${err.message}`);
    }
  };

  return (
    <div className="Homepage">
      {pictures.map((picture, index) => (
        <div className="about-samia" key={index}>
          <div className="samia-image">
            <img src={picture.imageLink} alt="samia photographer" />
          </div>
          <div className="samia-info">
            <p className="title">
              I am an `Accidental Photographer` who started maverick photography
              as a way to capture stories of social science in Black and White.
            </p>
            <p className="about">
              My subject varies from diaspora and cross-culture to neighborhood
              photography. In a world full of color, I describe my style as{" "}
              <strong>`Color Blind Photography`</strong>.
              <br />
              <br />
              History taught me everything is perishable unless it`s not written
              in black and white. So, I started capturing the story in B&W, like
              a pair of color-blind eyes, that is capturing moments without the
              distraction of color and storing it in photographic memory.
              <br />
              <br />
              Besides being a photographer, I am also an Erasmus scholar of
              European Politics and Society.
            </p>
            <div className="sub-button">
              <button className="subscribe-button">Subscribe To Stories</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
