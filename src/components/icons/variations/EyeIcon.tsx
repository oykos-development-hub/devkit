import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const EyeIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 9s4-8 11-8 11 8 11 8-4 8-11 8S1 9 1 9z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
    <Path
      d="M12 12a3 3 0 100-6 3 3 0 000 6z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default EyeIcon;
