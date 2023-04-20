import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const DatabaseIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 4c0 1.657-4.03 3-9 3S1 5.657 1 4m18 0c0-1.657-4.03-3-9-3S1 2.343 1 4m18 0v14c0 1.66-4 3-9 3s-9-1.34-9-3V4m18 7c0 1.66-4 3-9 3s-9-1.34-9-3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default DatabaseIcon;
