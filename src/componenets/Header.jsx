import React from "react";
import logo from "../img/logo.png";
import Button from "./Button";

const Header = () => {
  return (
    <header className="head">
      <div className="nav">
        <img id="logo" src={logo} alt="logo"></img>
        <Button text="درباره ما" />
        <Button text="کسب و کار" />
        <Button text="پشتیبانی" />
        <Button text="سوالات متداول" />
      </div>
      <div className="nav-btn">
        <Button text="فروشگاه من" />
      </div>
      <div id="ham-btn">
        <i></i>
        <i></i>
        <i></i>
      </div>
    </header>
  );
};
export default Header;
