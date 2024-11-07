import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UserPlusIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M16 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M20 6v6m3-3h-6m-4.5-4a4 4 0 11-8 0 4 4 0 018 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default UserPlusIcon;
