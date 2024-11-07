import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ConfiscationOfIllGottenGainsIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1989_1090)"
      >
        <Path d="M6.25 43.75V16.667L25 8.333l18.75 8.334V43.75"></Path>
        <Path d="M27.083 27.083h8.334V43.75H14.583v-12.5h12.5"></Path>
        <Path d="M27.083 43.75V25A2.083 2.083 0 0025 22.917h-4.167A2.083 2.083 0 0018.75 25v6.25"></Path>
      </g>
      <defs>
        <clipPath id="clip0_1989_1090">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default ConfiscationOfIllGottenGainsIcon;
