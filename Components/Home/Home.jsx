import React from "react";
import "./home.css";
import video from "../../Assets/video2.mp4";
import { GrLocation } from "react-icons/gr";

export const Home = () => {
  return (
    <section className="home">
      <div className="overlay"></div>
      <video src={video} muted autoPlay loop type="video2/mp4"></video>

      <div className="homeContent container">
        <div className="textDiv">
          <span className="smallText">Our Packages</span>
          <h1 className="homeTitle">Search your Holidays</h1>
        </div>
      </div>

      <div className="cardDiv grid">
        <div className="destinationInput">
          <label htmlFor="city">Search your destination: </label>
          <div className="input flex">
            <input type="text" placeholder="Enter Name Here..." />
            <GrLocation className="icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
