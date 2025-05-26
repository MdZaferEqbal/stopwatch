import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  customClass?: string;
}

const Button: React.FC<ButtonProps> = ({ children, customClass, ...props }) => {
  return (
    <button {...props} className={customClass}>
      {children}
    </button>
  );
};

export default Button;
