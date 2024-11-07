import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const BarChart = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M7 17V7m6 10V1M1 17v-4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default BarChart;
