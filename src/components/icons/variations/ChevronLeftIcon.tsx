import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ChevronLeftIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 8 14" {...props} onClick={props.onClick} fill={props.fill || "none"}>
    <Path
      d="M7 13L1 7l6-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);
export default ChevronLeftIcon;
