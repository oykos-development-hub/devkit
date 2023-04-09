import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CheckIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 13" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M17 1L6 12 1 7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CheckIcon;
