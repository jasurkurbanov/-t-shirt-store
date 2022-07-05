import React from "react";
import bannerimg1 from "../assets/images/home/home-banner/banner-img-1.png";
import bannerimg2 from "../assets/images/home/home-banner/banner-img-2.png";
import bannerimg3 from "../assets/images/home/home-banner/banner-img-3.png";
import Slider from "../components/Slider/Slider";
import card1 from "../assets/images/testimonials/card1.png";
import card2 from "../assets/images/testimonials/card2.png";
import StarRating from "../components/StarRaiting";

function Home() {
  return (
    <div className="banner">
      <div className="banner__content wrapper ">
        <div className="item__left">
          <div className="banner__title">
            <h1>Get the Latest Dress</h1>
            <h1>Models From Us</h1>
          </div>
          <div className="banner__subtitle">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <p>In eget gravida leo, nec iaculis diam.Nam bibendum mi</p>
            <p>sed sem finibus ullamcorper.</p>
          </div>
          <div className="banner__button">
            <button className="button__item">Shop Now</button>
          </div>
        </div>
        <div className="item__right">
          <div className="img__block1">
            <h1>More list</h1>
            <img className="banner__img1" src={bannerimg1} alt="" />
            <h2>Suit</h2>
            <img className="banner__img2" src={bannerimg2} alt="" />
            <h3>Shirt</h3>
          </div>
          <img className="banner__img3" src={bannerimg3} alt="" />
        </div>
      </div>

      <div className="home__categories wrapper">
        <div className="categories__text">
          <p className="choose__text">CHOOSE YOUR CATEGORY</p>
          <h1>Categories Style</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>In eget gravida leo, nec iaculis diam. Nam bibendum mi</p>
          <p> sed sem finibus ullamcorper.</p>
        </div>
        <div className="categories-image">
          {" "}
          <div className="categories__btn">
            <button className="categories__btn__item">T-shirt</button>
          </div>
          <Slider />
        </div>
      </div>
      <div className="testimonials__home wrapper">
        <div className="testimonials__header">
          <h1>Testimonials</h1>
        </div>
        <div className="testimonials__card wrapper">
          <div className="grid__item">
            <img src={card1} alt="" />
            <h4>Friskidia</h4>
            <p>client</p>
            <StarRating />
            <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing “ </p>
            <p>elit. Donec rutrum dapibus luctus.</p>
          </div>
          <div className="grid__item">
            <img src={card2} alt="" />
            <p>Finkidia</p>
            <p>client</p>
            <StarRating />
            <p>“ Lorem ipsum dolor sit amet, consectetur adipiscing </p>
            <p>elit. Donec rutrum dapibus luctus. “ </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
