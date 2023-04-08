import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UserIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 20" onClick={props.onClick} fill={props.fill} {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M17 19v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M13 5a4 4 0 11-8 0 4 4 0 018 0z"
      stroke={props.stroke}
      {...props}
    />
  </Svg>
);

export default UserIcon;
