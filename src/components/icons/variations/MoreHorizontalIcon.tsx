import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const MoreHorizontalIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 4" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M9 3a1 1 0 100-2 1 1 0 000 2zM16 3a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 100-2 1 1 0 000 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default MoreHorizontalIcon;
