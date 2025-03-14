import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const SlidersIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M4 19v-7m0-4V1m8 18v-9m0-4V1m8 18v-5m0-4V1M1 12h6m2-6h6m2 8h6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default SlidersIcon;
