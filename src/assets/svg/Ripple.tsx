import React, { FC } from "react";

const Ripple: FC = () => {
  return (
    <svg
      width="66"
      height="66"
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M33 65.5C50.9493 65.5 65.5 50.9493 65.5 33C65.5 15.0507 50.9493 0.5 33 0.5C15.0507 0.5 0.5 15.0507 0.5 33C0.5 50.9493 15.0507 65.5 33 65.5Z"
        fill="black"
      />
      <path
        d="M47.3609 16.75H53.2312L41.0133 28.8502C38.8771 30.9548 35.9988 32.1345 33 32.1345C30.0012 32.1345 27.1229 30.9548 24.9867 28.8502L12.7586 16.75H18.6391L27.9219 25.9373C29.2737 27.2716 31.0966 28.0197 32.9959 28.0197C34.8953 28.0197 36.7182 27.2716 38.07 25.9373L47.3609 16.75ZM18.568 50.3936H12.6875L24.9867 38.2203C27.1229 36.1157 30.0012 34.9359 33 34.9359C35.9988 34.9359 38.8771 36.1157 41.0133 38.2203L53.3125 50.3916H47.432L38.0781 41.125C36.7263 39.7908 34.9034 39.0426 33.0041 39.0426C31.1047 39.0426 29.2818 39.7908 27.93 41.125L18.5659 50.3936H18.568Z"
        fill="white"
      />
    </svg>
  );
};

export default Ripple;
