import React from "react";
import Feature from "./Feature";
import coin from "../img/coins.png";
import people from "../img/people.png";
import leaf from "../img/leaf.png";

const Section = ({ title, src }) => {
  return (
    <div className="section">
      <Feature title={"درآمد بیشتر"} src={coin} />
      <Feature title={"مشتریان جدید"} src={people} />
      <Feature title={"اسراف کمتر"} src={leaf} />
    </div>
  );
};
export default Section;
