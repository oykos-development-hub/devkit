import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LinkIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M9 12a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71M13 10a5.001 5.001 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default LinkIcon;
