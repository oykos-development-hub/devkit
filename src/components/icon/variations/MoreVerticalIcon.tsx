import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const MoreVerticalIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 4 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M2 10a1 1 0 100-2 1 1 0 000 2zM2 3a1 1 0 100-2 1 1 0 000 2zM2 17a1 1 0 100-2 1 1 0 000 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default MoreVerticalIcon;
