import React from "react";
import "./button.css";

const Button = ({ label, onClick, disabled, outline, small, icon }) => {
  const buttonClasses = [
    "button",
    disabled ? "disabled" : "",
    outline ? "outline" : "filled",
    small ? "small" : "large",
  ].join(" ");

  return (
    <button disabled={disabled} onClick={onClick} className={buttonClasses}>
      {icon}
      {label}
    </button>
  );
};

export default Button;
