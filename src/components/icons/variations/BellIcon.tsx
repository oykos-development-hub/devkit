import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const BellIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M11.73 20a2 2 0 01-3.46 0M16 7A6 6 0 104 7c0 7-3 9-3 9h18s-3-2-3-9z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default BellIcon;
