import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ClipboardIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M13 3h2a2 2 0 012 2v14a2 2 0 01-2 2H3a2 2 0 01-2-2V5a2 2 0 012-2h2m1-2h6a1 1 0 011 1v2a1 1 0 01-1 1H6a1 1 0 01-1-1V2a1 1 0 011-1z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default ClipboardIcon;
