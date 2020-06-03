import React from "react";
import Img from "../images/img.jpg";

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <div className="main-banner-text">
          <span>Hello</span>
          <span className="dot">.</span>
        </div>
        <hr />
        <div className="sub-banner-text">
          <p>
            Google Analytics helped us optimize our art marketplace, resulting
            in 400% year-over-year revenue growth for our art business
          </p>
        </div>
        <div className="banner-button">
          <button> Get Started </button>
        </div>
      </div>
      <div className="banner-right">
        <img src={Img} alt="Girl" />
      </div>
    </div>
  );
};

export default Banner;
