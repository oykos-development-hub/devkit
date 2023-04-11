import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ArrowLeftIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 16 16" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M15 8H1m0 0l7 7M1 8l7-7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default ArrowLeftIcon;
