"use client";

import React from "react";
import { Button, Icon } from "./button.css";

const CustomButton = ({
  label,
  onClick,
  disabled,
  outline,
  small,
  icon,
  ...rest
}) => {
  return (
    <Button
      disabled={disabled}
      onClick={onClick}
      outline={outline}
      small={small}
      {...rest}
    >
      {icon && <Icon>{icon}</Icon>}
      {label}
    </Button>
  );
};

export default CustomButton;
