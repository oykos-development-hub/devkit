import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const BarChartTwo = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M13 17V7M7 17V1M1 17v-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default BarChartTwo;
