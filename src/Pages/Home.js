import React from "react";
import bannerimg1 from "../assets/images/home/home-banner/banner-img-1.png";
import bannerimg2 from "../assets/images/home/home-banner/banner-img-2.png";
import bannerimg3 from "../assets/images/home/home-banner/banner-img-3.png";
import bannerlogo1 from "../assets/images/home/logo/banner-logo-1.svg";
import bannerlogo2 from "../assets/images/home/logo/banner-logo-2.svg";
import bannerlogo3 from "../assets/images/home/logo/banner-logo-3.svg";
import bannerlogo4 from "../assets/images/home/logo/banner-logo-4.svg";
import bannerlogo5 from "../assets/images/home/logo/banner-logo-5.svg";

import Slider from "../components/Slider/Slider";
import card1 from "../assets/images/testimonials/card1.png";
import card2 from "../assets/images/testimonials/card2.png";
import StarRating from "../components/StarRaiting";

import Logo from "../assets/images/shared/logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { TiSocialFacebook } from "react-icons/ti";
import { AiOutlineTwitter } from "react-icons/ai";
import { IoLogoInstagram } from "react-icons/io";
import { TiSocialLinkedin } from "react-icons/ti";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="wrapper__1">
      <div className="wrapper">
        <div className="header">
          <div className="header_content">
            <div className="logo">
              <Link to="/">
                <img src={Logo} />
              </Link>

              <p className="logo_text">mangcoding Store</p>
            </div>
            <div className="navbar">
              <ul>
                <li>
                  <Link to="/"> Home </Link>
                </li>
                <li>
                  <Link to="/about"> About </Link>
                </li>
                <li>
                  <Link to="/shop"> Shop</Link>
                </li>
                <li>
                  <Link to="/contact"> Contact</Link>
                </li>
                <li>
                  <BsHandbag />
                </li>
                <li>
                  <FaRegHeart />
                </li>
                <li>
                  <HiOutlineUser />
                </li>
              </ul>
              <div className="search_bar">
                <input type="text" placeholder="Search" name="search" />
                <AiOutlineSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
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
              <Link to="/shop">
                <button className="button__item">Shop Now</button>
              </Link>
            </div>
          </div>

          <div className="item__right">
            <div className="img__block">
              <h1>More list</h1>
              <img className="banner__img1" src={bannerimg1} alt="" />
              <h2>Suit</h2>
              <img className="banner__img2" src={bannerimg2} alt="" />
              <h3>Shirt</h3>
            </div>
            <img className="banner__img3" src={bannerimg3} alt="" />
          </div>
        </div>
      </div>

      <div className="wrapper__logos">
        <div className="banner__logos">
          <img src={bannerlogo1} />
          <img src={bannerlogo2} />
          <img src={bannerlogo3} />
          <img src={bannerlogo4} />
          <img src={bannerlogo5} />
        </div>
      </div>

      <div className="home__categories wrapper">
        <div className="categories__text">
          <a className="choose__text">CHOOSE YOUR CATEGORY</a>
          <h1>Categories Style</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p>In eget gravida leo, nec iaculis diam. Nam bibendum mi</p>
          <p> sed sem finibus ullamcorper.</p>
        </div>
        {/* <div className="categories__block__right">
          <div className="categories__btn">
            <button className="categories__btn__item">T-shirt</button>
          </div>
          <Slider />
        </div> */}
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

      <footer>
        <div className="footer_content">
          <div className="footer_logo">
            <div className="logo_content">
              <Link to="/">
                <img src={Logo} />
              </Link>
              <p className="footer_logo_text">mangcoding Store</p>
            </div>
            <p className="footer_text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              {"\n"}
              mollis, justo nec porttitor auctor, erat sapien faucibus lectus,
              {"\n"}
              vel tempor dolor augue et lectus.
            </p>
            <button className="footer_button">Login Now</button>
          </div>

          <div className="footer_navbar">
            <div className="footer_content_2">
              <div>
                <p>Home</p>
                <h1>Product</h1>
                <h1>Categories</h1>
                <h1>Shop</h1>
                <h1>Log in</h1>
              </div>
              <div>
                <p>Shop</p>
                <h1>T-Shirt</h1>
                <h1>Jacket</h1>
                <h1>Shirt</h1>
                <h1>Jeans</h1>
              </div>
              <div>
                <p>Categories</p>
                <h1>Men</h1>
                <h1>Children</h1>
                <h1>Woman</h1>
              </div>
              <div>
                <p>Contact</p>
                <h1>mangcoding@gmail.com</h1>
                <div className="icons">
                  <div className="facebook">
                    <TiSocialFacebook color="white" fontSize="25px" />
                  </div>
                  <div className="twitter">
                    <AiOutlineTwitter color="white" fontSize="25px" />
                  </div>
                  <div className="linkedin">
                    <TiSocialLinkedin color="white" fontSize="25px" />
                  </div>
                  <div className="instagram">
                    <IoLogoInstagram color="white" fontSize="25px" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
