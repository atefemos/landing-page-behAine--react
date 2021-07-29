import React from "react";

const Button = (props) => {
  return (
    <button>
      <a href="https://google.com">{props.text}</a>
    </button>
  );
};
export default Button;
