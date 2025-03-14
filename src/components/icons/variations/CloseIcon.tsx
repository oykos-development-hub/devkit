import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CloseIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M13 1L1 13M1 1l12 12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CloseIcon;
