import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const JudgeIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1879_7634)"
      >
        <path d="M27.416 20.833l15.382 15.455a4.357 4.357 0 010 6.18 4.396 4.396 0 01-6.2 0L21.167 27.084M12.833 18.75l8.334 8.333M27.417 20.833L19.083 12.5M6.583 43.75h14.584"></path>
        <path d="M14.485 32.902l-7.47-7.47a2.083 2.083 0 010-2.947l4.777-4.777 1.041 1.042 6.25-6.25-1.041-1.042 4.777-4.777a2.083 2.083 0 012.946 0l7.47 7.471a2.083 2.083 0 010 2.946l-4.777 4.777-1.041-1.042-6.25 6.25 1.041 1.042-4.777 4.777a2.083 2.083 0 01-2.946 0z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1879_7634">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.333)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default JudgeIcon;
