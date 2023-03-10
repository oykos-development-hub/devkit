import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CheckIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 12 12" onClick={props.onClick} {...props}>
    <Path d="M10 3L4.5 8.5 2 6" {...props} />
  </Svg>
);

export default CheckIcon;
