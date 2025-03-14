import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const GlobeIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 11c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10H1m10 10C5.477 21 1 16.523 1 11m10 10a15.3 15.3 0 004-10 15.3 15.3 0 00-4-10m0 20a15.3 15.3 0 01-4-10 15.3 15.3 0 014-10M1 11C1 5.477 5.477 1 11 1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default GlobeIcon;
