import React from "react";

//INTERNAL IMPORT
import Style from "./Button.module.css";

const Button = ({ btnName, handleClick, icon, classStyle }) => {
  return (
    <div className={Style.box}>
      
     <a onClick={() => handleClick()} className="btn btn-sm">
      {/*  className={` ${Style.BtnNeon} ${classStyle}`} */}
      {/* <span></span>
      <span></span>
      <span></span>
      <span></span> */}
      {icon} {btnName}
      </a>
    </div>
  );
};

export default Button;
