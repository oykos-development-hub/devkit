import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const AlignRightIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 5H5m14-4H1m18 8H1m18 4H5"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default AlignRightIcon;
