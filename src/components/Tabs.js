import { useState } from "react";
import shirt1 from "../assets/Tabs/t-shirt1.jpg";
import shirt2 from "../assets/Tabs/t-shirt2.jpg";
import shirt3 from "../assets/Tabs/t-shirt3.jpg";
import shirt4 from "../assets/Tabs/t-shirt4.jpg";
import shirt5 from "../assets/Tabs/t-shirt5.jpg";
import shirt6 from "../assets/Tabs/t-shirt6.jpg";
import shirt7 from "../assets/Tabs/t-shirt7.jpg";
import shirt8 from "../assets/Tabs/t-shirt8.jpg";
import StarRating from "./StarRating";
function Tabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container wrapper ">
      <div className="block__tabs wrapper">
        <div
          className={toggleState === 1 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          T-Shirt{" "}
        </div>
        <div
          className={toggleState === 2 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Jacket{" "}
        </div>

        <div
          className={toggleState === 3 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Shirt{" "}
        </div>
        <div
          className={toggleState === 4 ? "tabs active__tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Jens{" "}
        </div>
      </div>

      <div className={toggleState === 1 ? "tabs active__content" : "content"}>
        <div className="grid__container wrapper">
          <div className="grid__item">
            <img src={shirt1} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt2} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2> <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt3} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt4} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt5} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt6} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt7} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt8} alt="" />
            <h2>Smart T-Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
        </div>
      </div>

      <div className={toggleState === 2 ? "tabs active__content" : "content"}>
        <div className="grid__container">
          <div className="grid__item">
            <img src={shirt1} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt2} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt3} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt4} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt5} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt6} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
          <div className="grid__item">
            <img src={shirt7} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <div>
              <p2>(1k)</p2>
              <StarRating />
            </div>
          </div>
          <div className="grid__item">
            <img src={shirt8} alt="" />
            <h2>Jacket </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
        </div>
      </div>

      <div className={toggleState === 3 ? "tabs active__content" : "content"}>
        {" "}
        <div className="grid__container wrapper">
          <div className="grid__item">
            <img src={shirt1} alt="" />
            <h2>Shirt </h2>
            <p1>40$</p1>
            <p>Best quality</p>
            <p2>(1k)</p2>
            <StarRating />
          </div>
        </div>
      </div>

      <div
        className={toggleState === 4 ? "tabs active__content" : "content"}
      ></div>
    </div>
  );
}
export default Tabs;
