import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CloudOffIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M22.61 16.95A4.999 4.999 0 0018 10h-1.26a8 8 0 00-7.05-6M5 5a8 8 0 004 15h9a5 5 0 001.7-.3M1 1l22 22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CloudOffIcon;
