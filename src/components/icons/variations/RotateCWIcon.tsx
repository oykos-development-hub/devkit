import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const RotateCWIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 21" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 2v6m0 0h-6m6 0l-4.63-4.36A9 9 0 1018.49 13"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default RotateCWIcon;
