import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ECommerceIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1879_7397)"
      >
        <path d="M25.667 6.25l16.666 9.375v18.75L25.667 43.75 9 34.375v-18.75L25.667 6.25z"></path>
        <path d="M25.667 25l16.666-9.375"></path>
        <path d="M25.667 25v18.75"></path>
        <path d="M25.667 25L9 15.625"></path>
        <path d="M34 10.938l-16.666 9.374"></path>
      </g>
      <defs>
        <clipPath id="clip0_1879_7397">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.667)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default ECommerceIcon;
