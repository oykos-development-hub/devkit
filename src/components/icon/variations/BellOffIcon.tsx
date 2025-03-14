import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const BellOffIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M13.73 21a2 2 0 01-3.46 0m8.36-8A17.888 17.888 0 0118 8a6 6 0 00-9.33-5M6.26 6.26A5.86 5.86 0 006 8c0 7-3 9-3 9h14M1 1l22 22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default BellOffIcon;
