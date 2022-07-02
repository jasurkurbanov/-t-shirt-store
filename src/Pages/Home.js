import React from "react";
import Logo from "../assets/images/shared/logo.svg";
import { FaRegHeart } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

function Home() {
  return (
    <div className="header">
      <div className="header_content">
        <div className="logo">
          <img src={Logo} />

          <p className="logo_text">mangcoding Store</p>
        </div>
        <div className="navbar">
          <ul>
            <li>Home</li>
            <li>Shop</li>
            <li>About us</li>
            <li>Contact</li>
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
  );
}

export default Home;
