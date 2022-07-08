import React from "react";
import "./Slider.css";
import angleLeft from "./icons/angle-left.png";
import angleright from "./icons/angle-right.png";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn__slide next" : "btn__slide prev"}
    >
      <img src={direction === "next" ? angleright : angleLeft} alt="/" />
    </button>
  );
}
