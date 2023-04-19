import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ZoomInIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 19l-4.35-4.35M9 6v6M6 9h6m5 0A8 8 0 111 9a8 8 0 0116 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default ZoomInIcon;