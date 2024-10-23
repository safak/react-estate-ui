import React from "react";
import { useState } from "react";
import "./Slider.scss";

function Slider({ images }) {
  const [imageIndex, setImageIndex] = useState(null);
  const changeSlide = (direction) => {
    if (direction === "left") {
      // Move left
      if (imageIndex === 0) {
        setImageIndex(images.length - 1); // Go to the last image
      } else {
        setImageIndex(imageIndex - 1); // Move to the previous image
      }
    } else {
      // Move right
      if (imageIndex === images.length - 1) {
        setImageIndex(0); // Go back to the first image
      } else {
        setImageIndex(imageIndex + 1); // Move to the next image
      }
    }
  };

  return (
    <div className="slider">
      {imageIndex !== null && (
        <div className="fullSlider">
          <div className="arrow" onClick={() => changeSlide("left")}>
            <img src="./arrow.png" alt="" />
          </div>
          <div className="imgContainer">
            <img src={images[imageIndex]} alt="" />
          </div>
          <div className="arrow" onClick={() => changeSlide("right")}>
            <img src="./arrow.png" alt="" className="right " />
          </div>
          <div className="close" onClick={() => setImageIndex(null)}>
            X
          </div>
        </div>
      )}
      <div className="bigImage">
        <img src={images[0]} alt="" onClick={() => setImageIndex(0)} />
      </div>
      <div className="smallImage">
        {images.slice(1).map((image, index) => (
          <img
            src={image}
            alt=""
            key={index}
            onClick={() => setImageIndex(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Slider;
