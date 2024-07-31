import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ArrowUpIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 16 16" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M8 15V1m0 0L1 8m7-7l7 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default ArrowUpIcon;
