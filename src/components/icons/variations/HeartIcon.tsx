import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const HeartIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M20.84 3.61a5.5 5.5 0 00-7.78 0L12 4.67l-1.06-1.06a5.501 5.501 0 00-7.78 7.78l1.06 1.06L12 20.23l7.78-7.78 1.06-1.06a5.501 5.501 0 000-7.78v0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default HeartIcon;
