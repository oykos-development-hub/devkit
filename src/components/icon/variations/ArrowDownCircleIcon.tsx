import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ArrowDownCircleIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M7 11l4 4m0 0l4-4m-4 4V7m10 4c0 5.523-4.477 10-10 10S1 16.523 1 11 5.477 1 11 1s10 4.477 10 10z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default ArrowDownCircleIcon;
