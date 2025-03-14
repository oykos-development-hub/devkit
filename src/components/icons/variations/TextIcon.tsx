import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const TextIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="51" height="50" fill="none" viewBox="0 0 51 50">
      <g
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        clipPath="url(#clip0_1886_992)"
      >
        <path d="M27.416 10.417h16.667"></path>
        <path d="M27.416 18.75h10.417"></path>
        <path d="M27.416 31.25h16.667"></path>
        <path d="M27.416 39.583h10.417"></path>
        <path d="M6.583 10.417a2.083 2.083 0 012.084-2.084H17a2.083 2.083 0 012.083 2.084v8.333A2.083 2.083 0 0117 20.833H8.667a2.083 2.083 0 01-2.084-2.083v-8.333z"></path>
        <path d="M6.583 31.25a2.083 2.083 0 012.084-2.083H17a2.083 2.083 0 012.083 2.083v8.333A2.083 2.083 0 0117 41.667H8.667a2.083 2.083 0 01-2.084-2.084V31.25z"></path>
      </g>
      <defs>
        <clipPath id="clip0_1886_992">
          <Path fill={props.fill || "#fff"} d="M0 0H50V50H0z" transform="translate(.333)"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default TextIcon;
