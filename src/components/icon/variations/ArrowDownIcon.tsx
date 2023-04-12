import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ArrowDownIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 16 16" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M8 1v14m0 0l7-7m-7 7L1 8"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default ArrowDownIcon;
