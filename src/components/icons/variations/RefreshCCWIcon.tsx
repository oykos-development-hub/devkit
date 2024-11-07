import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const RefreshCCWIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 2v6m0 0h6M1 8l4.64-4.36A9 9 0 0120.49 7M23 18v-6m0 0h-6m6 0l-4.64 4.36A9 9 0 013.51 13"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default RefreshCCWIcon;
