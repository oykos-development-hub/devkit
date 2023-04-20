import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LockIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M5 10V6a5 5 0 1110 0v4M3 10h14a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2v-7a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default LockIcon;
