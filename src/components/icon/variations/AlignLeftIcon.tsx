import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const AlignLeftIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M15 5H1m18-4H1m18 8H1m14 4H1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default AlignLeftIcon;
