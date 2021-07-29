import React from "react";

const Cards = ({ ...props }) => {
  return (
    <a
      href="http://google.com"
      className="card"
      target="_blank"
      rel="noreferrer"
    >
      <img src={props.src} alt="" className="card-img" />

      <p>{props.text}</p>
    </a>
  );
};
export default Cards;
