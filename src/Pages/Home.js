import React from "react";
import bannerimg1 from "../assets/images/home/home-banner/banner-img-1.png";
import bannerimg2 from "../assets/images/home/home-banner/banner-img-2.png";
import bannerimg3 from "../assets/images/home/home-banner/banner-img-3.png";

function Home() {
  return (
    <div className="banner ">
      <div className="banner__content wrapper ">
        <div className="item__left">
          <div className="banner__title">
            <h1>Get the Latest Dress</h1>
            <h1>Models From Us</h1>
          </div>
          <div className="banner__subtitle">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>{" "}
            <p>In eget gravida leo, nec iaculis diam.Nam bibendum mi</p>
            <p>sed sem finibus ullamcorper.</p>
          </div>
          <button className="button__item">Shop Now</button>
        </div>
        <div className="item__right">
          <div className="img__block1">
            <h1>More list</h1>
            <img className="b__img1" src={bannerimg1} alt="" />
            <h2>Suit</h2>
            <img className="b__img2" src={bannerimg2} alt="" />
            <h3>Shirt</h3>
          </div>
          <img className="b__img3" src={bannerimg3} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
