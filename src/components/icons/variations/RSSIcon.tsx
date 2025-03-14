import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const RSSIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 8a9 9 0 019 9M1 1a16 16 0 0116 16M3 16a1 1 0 11-2 0 1 1 0 012 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default RSSIcon;
