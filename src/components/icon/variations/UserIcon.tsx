import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UserIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} {...props}>
    <Path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M16 7a4 4 0 11-8 0 4 4 0 018 0z"
      {...props}
    />
  </Svg>
);

export default UserIcon;
