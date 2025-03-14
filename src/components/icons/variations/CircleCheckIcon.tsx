import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

export const CircleCheckIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 11.08V12a10 10 0 11-5.93-9.14M21 4L11 14.01l-3-3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CircleCheckIcon;
