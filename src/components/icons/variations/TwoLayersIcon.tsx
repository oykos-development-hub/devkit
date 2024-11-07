import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const TwoLayersIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 11.5l10 5 10-5m-10-10l-10 5 10 5 10-5-10-5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default TwoLayersIcon;
