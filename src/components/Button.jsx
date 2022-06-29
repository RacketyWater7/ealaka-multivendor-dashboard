import React from "react";

// import { useStateContext } from '../contexts/ContextProvider';

const Button = ({
  bgColor,
  additionClasses,
  onClick,
  cssWidth,
  color,
  bgHoverColor,
  size,
  text,
  height,
  borderRadius,
  bold,
  width,
}) => {
  // const { setIsClicked, initialState } = useStateContext();

  return (
    // <button
    //   type="button"
    //   onClick={() => setIsClicked(initialState)}
    //   style={{ backgroundColor: bgColor, color, borderRadius }}
    //   className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    // >
    //   {icon} {text}
    // </button>
    <button
      type="button"
      onClick={onClick}
      style={{ backgroundColor: bgColor, color, borderRadius, width: cssWidth }}
      className={`${additionClasses} text-${size} font-${bold} p-3 w-${width} h-${height} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {text}
    </button>
  );
};

export default Button;
