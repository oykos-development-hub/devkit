import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const WifiIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 17" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M5 8.55a11 11 0 0114.08 0M1.42 5a16 16 0 0121.16 0M8.53 12.11a6 6 0 016.95 0M12 16h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default WifiIcon;
