import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const AwardIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12M19 8A7 7 0 115 8a7 7 0 0114 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default AwardIcon;
