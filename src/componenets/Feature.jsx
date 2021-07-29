import React from "react";
import "../index.css";

const Feature = ({ ...props }) => {
  return (
    <div className="feature">
      <div className="yBack">
        <img src={props.src} alt="" className="img" />
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default Feature;
