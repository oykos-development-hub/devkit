import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UserXIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M16 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M18 6l5 5m0-5l-5 5m-5.5-6a4 4 0 11-8 0 4 4 0 018 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default UserXIcon;
