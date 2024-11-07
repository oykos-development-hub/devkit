import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ChevronDownIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 8" {...props} onClick={props.onClick} fill={props.fill || "none"}>
    <Path
      {...props}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M1 1l6 6 6-6"
      stroke={props.stroke || "#000"}
    />
  </Svg>
);

export default ChevronDownIcon;
