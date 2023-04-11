import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const RefreshCWIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M23 2v6m0 0h-6m6 0l-4.64-4.36A9 9 0 003.51 7M1 18v-6m0 0h6m-6 0l4.64 4.36A9 9 0 0020.49 13"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default RefreshCWIcon;
