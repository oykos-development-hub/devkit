import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const HelpCircleIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M8.09 8a3 3 0 015.83 1c0 2-3 3-3 3m.08 4h.01M21 11c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default HelpCircleIcon;
