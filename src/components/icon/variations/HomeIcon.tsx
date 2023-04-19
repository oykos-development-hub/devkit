import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const HomeIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M7 21V11h6v10M1 8l9-7 9 7v11a2 2 0 01-2 2H3a2 2 0 01-2-2V8z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default HomeIcon;
