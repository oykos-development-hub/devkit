import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const BoxIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1879_7478)"
      >
        <path d="M25.667 43.75L9 34.375v-18.75L25.667 6.25l16.666 9.375V25"></path>
        <path d="M25.667 25l16.666-9.375"></path>
        <path d="M25.667 25v18.75"></path>
        <path d="M25.667 25L9 15.625"></path>
        <path d="M31.917 37.5H46.5"></path>
        <path d="M40.25 31.25l6.25 6.25-6.25 6.25"></path>
      </g>
      <defs>
        <clipPath id="clip0_1879_7478">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.667)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default BoxIcon;
