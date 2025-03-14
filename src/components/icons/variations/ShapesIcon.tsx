import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ShapesIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1879_7414)"
      >
        <path d="M8.666 8.333h12.5v12.5h-12.5v-12.5z"></path>
        <path d="M29.5 8.333H42v12.5H29.5v-12.5z"></path>
        <path d="M8.666 29.167h12.5v12.5h-12.5v-12.5z"></path>
        <path d="M29.5 35.417a6.25 6.25 0 1012.5 0 6.25 6.25 0 00-12.5 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1879_7414">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.333)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default ShapesIcon;
