import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const MapIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 1118 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
    <Path
      d="M10 13a3 3 0 100-6 3 3 0 000 6z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default MapIcon;
