import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const StarIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M11 1l3.09 6.26L21 8.27l-5 4.87 1.18 6.88L11 16.77l-6.18 3.25L6 13.14 1 8.27l6.91-1.01L11 1z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default StarIcon;
