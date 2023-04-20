import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const AlertTriangleIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 21" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M12 8v4m0 4h.01M10.29 2.86L1.82 17a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 2.86a2 2 0 00-3.42 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default AlertTriangleIcon;
