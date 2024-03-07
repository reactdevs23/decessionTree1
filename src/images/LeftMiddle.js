import React from "react";

const LeftMiddle = ({ color }) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={315} height={93} fill="none">
      <path
        fill={color}
        d="M308 1a1 1 0 0 0-2 0h2Zm-1.707 91.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 1 0-1.414-1.414L307 90.586l-5.657-5.657a1 1 0 1 0-1.414 1.414l6.364 6.364ZM306 1v91h2V1h-2Z"
      />
      <path
        fill={color}
        d="M308 1a1 1 0 0 0-2 0h2ZM7.293 92.707a1 1 0 0 0 1.414 0l6.364-6.364a1 1 0 0 0-1.414-1.414L8 90.586l-5.657-5.657A1 1 0 0 0 .93 86.343l6.364 6.364ZM306 1v21.5h2V1h-2Zm-23 44.5H32v2h251v-2ZM7 70.5V92h2V70.5H7Zm25-25c-13.807 0-25 11.193-25 25h2c0-12.703 10.297-23 23-23v-2Zm274-23c0 12.703-10.297 23-23 23v2c13.807 0 25-11.193 25-25h-2Z"
      />
    </svg>
  );
};

export default LeftMiddle;
