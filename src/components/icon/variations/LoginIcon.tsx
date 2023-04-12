import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LoginIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M13 1h4a2 2 0 012 2v14a2 2 0 01-2 2h-4m-5-4l5-5m0 0L8 5m5 5H1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default LoginIcon;
