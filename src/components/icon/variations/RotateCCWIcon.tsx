import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const RotateCCWIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 21" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 2v6m0 0h6M1 8l4.64-4.36A9 9 0 113.51 13"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default RotateCCWIcon;
