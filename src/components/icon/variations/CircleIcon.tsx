import React from "react";
import { IconProps } from "../types";
import { Svg } from "../styles/shared";

export const CircleIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} {...props}>
    <circle cx="12" cy="12" r="5"></circle>
  </Svg>
);

export default CircleIcon;
