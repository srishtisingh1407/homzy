import React from "react";
import "./Hero.css";
import {HiLocationMarker} from "react-icons/hi";
import CountUp from "react-countup";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className="flexCenter paddings innerWidth hero-container">
        <div className="flexColStart hero-left">
          <div className="orange-circle">
          </div>
          <div className="hero-title">
            <h1>
              Discover <br />
              Most Suitable <br />
              Property
            </h1>
          </div>
          <div className="flexColStart hero-des">
            <span className="secondaryText">Find a variety of properties that suit you very</span>
            <span className="secondaryText">Forget all difficulties in finding a residence for you</span>
          </div>
          <div className="flexCenter search-button">
            <HiLocationMarker color="var(--blue)" size={25}></HiLocationMarker>
            <input type="text" />
            <button className="button">Search</button>
          </div>
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={880} end={900} duration={3}></CountUp>
                <span>+</span>
              </span>
              <span className="secondaryText">Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={580} end={600} duration={3}></CountUp>
                <span>+</span>
              </span>
              <span  className="secondaryText">Happy Customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={10} end={18} duration={3}></CountUp>
                <span>+</span>
              </span>
              <span  className="secondaryText">Awards Won</span>
            </div>

          </div>
        </div>
        <div className="flexCenter hero-right">
          <img src="./hero-image.png" alt="" className="img-container" />
        </div>
      
      </div> 
      
    </section>
  );
};

export default Hero;
