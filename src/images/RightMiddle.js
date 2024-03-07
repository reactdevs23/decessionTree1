import React from "react";

const RightMiddle = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={304} height={93} fill="none">
      <path
        fill={color}
        d="M9 1a1 1 0 0 0-2 0h2Zm286.293 91.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 1 0-1.414-1.414L296 90.586l-5.657-5.657a1 1 0 1 0-1.414 1.414l6.364 6.364ZM7 1v21.5h2V1H7Zm25 46.5h240v-2H32v2Zm263 23V92h2V70.5h-2Zm-23-23c12.703 0 23 10.297 23 23h2c0-13.807-11.193-25-25-25v2ZM7 22.5c0 13.807 11.193 25 25 25v-2c-12.703 0-23-10.297-23-23H7Z"
      />
      <path
        fill={color}
        d="M9 1a1 1 0 0 0-2 0h2ZM7.293 92.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 90.586l-5.657-5.657A1 1 0 0 0 .93 86.343l6.364 6.364ZM7 1v91h2V1H7Z"
      />
    </svg>
  );
};

export default RightMiddle;
