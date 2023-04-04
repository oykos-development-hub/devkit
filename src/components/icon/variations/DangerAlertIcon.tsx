import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const DangerAlertIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "#000"} {...props}>
    <Path
      d="M10 4a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zM10 14a1 1 0 100 2 1 1 0 000-2z"
      stroke={props.stroke}
      {...props}
    />
    <Path
      fillRule="evenodd"
      d="M10 0C4.477 0 0 4.477 0 10s4.477 10 10 10 10-4.477 10-10S15.523 0 10 0zM2 10a8 8 0 1016 0 8 8 0 00-16 0z"
      clipRule="evenodd"
      stroke={props.stroke}
      {...props}
    />
  </Svg>
);

export default DangerAlertIcon;
