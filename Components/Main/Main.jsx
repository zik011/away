import React from "react";
import "./main.css";

//images
import img from "../../Assets/img(1).jpg";
import img2 from "../../Assets/img(2).jpg";
import img3 from "../../Assets/img(3).jpg";
import img4 from "../../Assets/img(4).jpg";
import img5 from "../../Assets/img(5).jpg";
import img6 from "../../Assets/img(6).jpg";
import img7 from "../../Assets/img(7).jpg";
import img8 from "../../Assets/img(8).jpg";
import img9 from "../../Assets/img(9).jpg";

//import icons

import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsClipboardCheck } from "react-icons/bs";

//array named Data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: "Bora Bora",
    location: "New Zealand",
    grade: "Cultural Relax",
    fees: "$700",
    description:
      "The epitone of romance,Bora Bora is one of the best travel destinations in the world.",
  },

  {
    id: 2,
    imgSrc: img2,
    destTitle: "Bandar Seri Begawan",
    location: "Brunei",
    grade: "Cultural Relax",
    fees: "$350",
    description:
      "A peace and clearmindset visit , doesnt feel time going so fast.",
  },

  {
    id: 3,
    imgSrc: img3,
    destTitle: "Seoul",
    location: "South Korea",
    grade: "Urban culture",
    fees: "$350",
    description:
      "Riverside walk , and have a good morning environment.",
  },

  {
    id: 4,
    imgSrc: img4,
    destTitle: "Kuala Lumpur",
    location: "Malaysia",
    grade: "Urban culture",
    fees: "$150",
    description:
      "The relax and chill view.",
  },

  {
    id: 5,
    imgSrc: img5,
    destTitle: "Bangkok",
    location: "Thailand",
    grade: "Urban culture",
    fees: "$400",
    description: "The best skycraper view infront of your eyes.",
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Singapore',
    location:'Singapore',
    grade:'Urban culture',
    fees:'$250',
    description:'The complex city with all u need , and modern fashion.'

  },
  {
    id:7,
    imgSrc: img7,
    destTitle: 'Kashmir',
    location:'Pakistan',
    grade:'Cultural Relax',
    fees:'$500',
    description:'The relax and peaceful place to sit and vacation with a nature environment.'
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Bali',
    location:'Indonesia',
    grade:'Cultural Relax',
    fees:'$199',
    description:'The historic place to walk and visit with a peaceful nature environment'

  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Krabi',
    location:'Thailand',
    grade:'Cultural Relax',
    fees:'$250',
    description:'Clear water, peace environment and fun place to visit.'
  }
];

export const Main = () => {
  return (
    <section className="main container section">
      <div className="secTitle">
        <h3 className="title">Most visited destinations</h3>
      </div>

      <div className="secContent grid">
        {/* high offer array method ... to do that we shall use 
        a list of object in one array .. 
        1st step an array named data 
        and from that we shall .map() array to fetch
        destination at one. I hope this will make sense to u*/}

        {Data.map(
          ({ id, imgSrc, destTitle, location, grade, fees, description }) => {
            return (
              <div key={id} className="singleDestination">
                {/*Here it will return single id from the map array*/}

                <div className="imageDiv">
                  <img src={imgSrc} alt={destTitle} />
                </div>

                <div className="cardInfo">
                  <h4 className="desTitle">{destTitle}</h4>
                  <span className="continent flex">
                    <HiOutlineLocationMarker className="icon" />
                    <span className="name">{location}</span>
                  </span>

                  <div className="fees flex">
                    <div className="grade">
                      <span>
                        {grade}
                        <small>+1</small>
                      </span>
                    </div>

                    <div className="price">
                      <h5>{fees}</h5>
                    </div>
                  </div>

                  <div className="desc">
                    <p>{description}</p>
                  </div>

                  <button className="btn flex">
                    DETAILS <BsClipboardCheck className="icon" />
                  </button>
                </div>
              </div>
            );
          }
        )}
      </div>
    </section>
  );
};

export default Main;
