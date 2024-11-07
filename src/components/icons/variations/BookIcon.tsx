import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const BookIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1879_7652)"
      >
        <path d="M20.833 39.583h-12.5A2.083 2.083 0 016.25 37.5V8.333A2.083 2.083 0 018.333 6.25h12.5A4.167 4.167 0 0125 10.417a4.167 4.167 0 014.167-4.167h12.5a2.083 2.083 0 012.083 2.083V37.5a2.083 2.083 0 01-2.083 2.083h-12.5A4.167 4.167 0 0025 43.75a4.167 4.167 0 00-4.167-4.167zM25 10.417V43.75M14.583 14.583h2.084M14.583 22.917h2.084M33.333 14.583h2.084M33.333 22.917h2.084M33.333 31.25h2.084"></path>
      </g>
      <defs>
        <clipPath id="clip0_1879_7652">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default BookIcon;
