import React, { FC } from "react";

const Tether = ({ width = "65", height = "65" }: { width?: string; height?: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M32.5 65.5C50.4493 65.5 65 50.9493 65 33C65 15.0507 50.4493 0.5 32.5 0.5C14.5507 0.5 0 15.0507 0 33C0 50.9493 14.5507 65.5 32.5 65.5Z"
        fill="#26A17B"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M35.7947 36.1769V36.1728C35.5713 36.1891 34.4195 36.2581 31.85 36.2581C29.7984 36.2581 28.3542 36.1972 27.8464 36.1728V36.1789C19.9489 35.8316 14.0542 34.4564 14.0542 32.8111C14.0542 31.1678 19.9489 29.7927 27.8464 29.4392V34.8098C28.3623 34.8464 29.8411 34.9338 31.8845 34.9338C34.3362 34.9338 35.5652 34.8322 35.7947 34.8119V29.4433C43.6759 29.7947 49.5564 31.1698 49.5564 32.8111C49.5564 34.4564 43.6759 35.8275 35.7947 36.1769ZM35.7947 28.8847V24.0788H46.7919V16.75H16.8492V24.0788H27.8464V28.8827C18.9089 29.293 12.1875 31.0642 12.1875 33.1848C12.1875 35.3055 18.9089 37.0747 27.8464 37.487V52.888H35.7947V37.483C44.718 37.0727 51.4231 35.3034 51.4231 33.1848C51.4231 31.0662 44.718 29.297 35.7947 28.8847Z"
        fill="white"
      />
    </svg>
  );
};

export default Tether;
