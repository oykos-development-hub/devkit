import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LogoutIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M7 19H3a2 2 0 01-2-2V3a2 2 0 012-2h4m7 14l5-5m0 0l-5-5m5 5H7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default LogoutIcon;
