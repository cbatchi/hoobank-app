import React from "react";

const Button = ({ innerText, style }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient rounded-[10px] font-poppins font-meduim text-[18px] text-primary outline-none ${
        style ? style : ""
      }`}
    >
      {innerText ? innerText : "Commencer"}
    </button>
  );
};

export default Button;
