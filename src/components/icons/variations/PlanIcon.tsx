import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const PlanIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_3392_16652)"
      >
        <Path d="M9 25V12.5a4.167 4.167 0 014.167-4.167h25a4.167 4.167 0 014.166 4.167v25a4.167 4.167 0 01-4.166 4.167h-12.5"></Path>
        <Path d="M6.917 33.333A2.083 2.083 0 019 31.25h8.333a2.083 2.083 0 012.084 2.083v8.334a2.083 2.083 0 01-2.084 2.083H9a2.083 2.083 0 01-2.083-2.083v-8.334zM9 20.833h33.333M21.5 8.333V25"></Path>
      </g>
      <defs>
        <clipPath id="clip0_3392_16652">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.667)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default PlanIcon;
