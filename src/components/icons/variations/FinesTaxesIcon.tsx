import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FinesTaxesIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="none" viewBox="0 0 50 50">
      <Path
        stroke={props.stroke || "#615959"}
        strokeLinejoin="round"
        strokeWidth="2"
        d="M5.208 7.292c0-1.726 1.4-3.125 3.125-3.125h25c1.726 0 3.125 1.399 3.125 3.125v38.541H8.333a3.125 3.125 0 01-3.125-3.125V7.292zM36.458 25c0-1.15.933-2.083 2.084-2.083h4.166c1.15 0 2.084.932 2.084 2.083v17.708c0 1.726-1.4 3.125-3.125 3.125h-5.209V25z"
      ></Path>
      <Path
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M11.458 12.5h8.334"
      ></Path>
      <Path
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M11.458 19.792h12.5"
      ></Path>
    </Svg>
  );
};

export default FinesTaxesIcon;
