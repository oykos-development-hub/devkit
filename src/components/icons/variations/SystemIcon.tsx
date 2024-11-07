import React from "react";
import { SSSIconProps } from "../types";
import { Svg, Path } from "../styles/shared";

const SystemIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1879_7619)"
      >
        <path d="M21.5 27.083a4.167 4.167 0 108.333 0 4.167 4.167 0 00-8.333 0zM17.334 43.75v-2.083A4.167 4.167 0 0121.5 37.5h8.334A4.167 4.167 0 0134 41.667v2.083M31.917 10.417a4.167 4.167 0 108.333 0 4.167 4.167 0 00-8.333 0zM36.084 20.833h4.166A4.167 4.167 0 0144.417 25v2.083M11.084 10.417a4.167 4.167 0 108.333 0 4.167 4.167 0 00-8.334 0zM6.917 27.083V25a4.167 4.167 0 014.166-4.167h4.167"></path>
      </g>
      <defs>
        <clipPath id="clip0_1879_7619">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.667)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default SystemIcon;
