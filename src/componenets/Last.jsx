import React from "react";
import Cards from "./Cards";
import res from "../img/restaurant.png";
import bread from "../img/bread.png";
import hotel from "../img/hotel.png";
import kharobar from "../img/kharobar.png";

import "../index.css";

const Last = () => {
  return (
    <div className="last">
      <p>بهترین همراهان ما</p>
      <div className="last-card">
        <Cards src={kharobar} text={"سوپرمارکت"} />
        <Cards src={hotel} text={"هتل"} />
        <Cards src={res} text={"رستوران و کافه"} />
        <Cards src={bread} text={"نانوایی و قنادی"} />
      </div>
    </div>
  );
};

export default Last;
