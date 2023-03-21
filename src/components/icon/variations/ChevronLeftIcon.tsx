import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ChevronRightIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 8" {...props} onClick={props.onClick} fill={props.fill || "none"}>
    <Path
      {...props}
      d="M7 13L1 7l6-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
    />
  </Svg>
);
export default ChevronRightIcon;
