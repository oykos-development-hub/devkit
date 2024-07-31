import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FinesIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <Path
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M8.333 45.833a3.125 3.125 0 01-3.125-3.125V7.292c0-1.726 1.4-3.125 3.125-3.125h25c1.726 0 3.125 1.399 3.125 3.125v19.27M8.05 45.822h25M11.458 12.5h8.334M11.458 19.792h12.5"
      ></Path>
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1989_1183)"
      >
        <Path d="M31.103 31.25l8.009 8.345a2.414 2.414 0 010 3.338c-.43.443-1.01.69-1.614.69a2.248 2.248 0 01-1.615-.69l-8.035-8.308M23.509 30.125l4.34 4.5M31.103 31.25l-4.34-4.5"></Path>
        <Path d="M24.37 37.767l-3.891-4.034a1.146 1.146 0 01-.318-.795c0-.299.115-.585.318-.796l2.488-2.58.542.563 3.254-3.375-.542-.562 2.488-2.58c.203-.211.479-.33.766-.33.288 0 .564.119.767.33l3.89 4.034c.204.211.318.497.318.796 0 .298-.114.584-.317.795l-2.488 2.58-.542-.563-3.255 3.375.543.563-2.488 2.58c-.203.21-.48.329-.767.329-.287 0-.563-.119-.767-.33z"></Path>
      </g>
      <defs>
        <clipPath id="clip0_1989_1183">
          <Path fill={props.fill || "#fff"} d="M0 0H26.036V27H0z" transform="translate(17 20)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default FinesIcon;
