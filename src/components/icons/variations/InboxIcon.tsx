import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const InboxIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 9h-6l-2 3H9L7 9H1m20 0v6a2 2 0 01-2 2H3a2 2 0 01-2-2V9m20 0l-3.45-6.89A2 2 0 0015.76 1H6.24a2 2 0 00-1.79 1.11L1 9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default InboxIcon;
