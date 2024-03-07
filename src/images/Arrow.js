import React from "react";

const Arrow = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={16} height={106} fill="none">
      <path
        fill={color}
        d="M9 1a1 1 0 0 0-2 0h2ZM7.293 105.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 103.586l-5.657-5.657A1 1 0 0 0 .93 99.343l6.364 6.364ZM7 1v104h2V1H7Z"
      />
    </svg>
  );
};

export default Arrow;
