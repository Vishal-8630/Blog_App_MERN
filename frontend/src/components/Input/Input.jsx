import React from "react";
import Sytles from "./Input.module.scss";

const Input = ({ type, value, placeholder, onChange, className }) => {
  return (
    <input
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      className={`${className}`}
    />
  );
};

export default Input;
