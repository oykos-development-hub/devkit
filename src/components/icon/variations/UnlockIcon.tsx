import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UnlockIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M5 11V7a5 5 0 019.9-1M3 11h14a2 2 0 012 2v7a2 2 0 01-2 2H3a2 2 0 01-2-2v-7a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default UnlockIcon;
