import React from "react";

interface IButtonTypes {
  txt?: string;
  func?: React.MouseEventHandler<HTMLButtonElement>;
  style?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
}

const Button = React.memo(function Button({
  txt,
  disabled = false,
  func = () => {},
  children,
  style = '',
}: IButtonTypes) {
  return (
    <button disabled={disabled} className={`${style}`} onClick={func}>
      {txt || children}
    </button>
  );
});

export default Button;
