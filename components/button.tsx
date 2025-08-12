import React from "react";
import "./button.css";

interface IButtonTypes {
  func?: ()=>void;
  style?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = React.memo(function Button({
  disabled = false,
  func = () => {},
  children,
  style = "",
  type
}: IButtonTypes) {
  return (
    <button
    type={type}
      disabled={disabled}
      className={`shine-button bg-[#4236c4] text-white px-3 py-2 rounded-[8px] ${style}`}
      onClick={func}
    >
      {children}
    </button>
  );
});

export default Button;
