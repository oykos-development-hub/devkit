import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CornerUpIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M12 11l5-5m0 0l-5-5m5 5H5a4 4 0 00-4 4v7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CornerUpIcon;
