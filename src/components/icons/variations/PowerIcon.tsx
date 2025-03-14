import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const PowerIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 21 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M17.36 5.64a9 9 0 11-12.73 0M11 1v10"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default PowerIcon;
