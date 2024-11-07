import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LiabilitiesReceivablesIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1989_985)"
      >
        <path d="M14.583 22.917a4.167 4.167 0 014.167-4.167h20.833a4.167 4.167 0 014.167 4.167v12.5a4.167 4.167 0 01-4.167 4.166H18.75a4.167 4.167 0 01-4.167-4.166v-12.5z"></path>
        <path d="M25 29.167a4.167 4.167 0 108.333 0 4.167 4.167 0 00-8.333 0zM35.417 18.75v-4.167a4.167 4.167 0 00-4.167-4.166H10.417a4.167 4.167 0 00-4.167 4.166v12.5a4.167 4.167 0 004.167 4.167h4.166"></path>
      </g>
      <defs>
        <clipPath id="clip0_1989_985">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default LiabilitiesReceivablesIcon;
