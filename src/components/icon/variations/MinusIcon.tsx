import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const MinusIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 16 2" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 1h14"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default MinusIcon;
