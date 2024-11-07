import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ChevronRightIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 8 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 13l6-6-6-6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);
export default ChevronRightIcon;
