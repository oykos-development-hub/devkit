import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const MenuIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 7h14M1 1h18M1 13h18"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default MenuIcon;
