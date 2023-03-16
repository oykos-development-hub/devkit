import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const DangerIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 21 20" onClick={props.onClick} {...props}>
    <Path d="M10.5 6.5V10m0 3.5h.009M19.25 10a8.75 8.75 0 11-17.5 0 8.75 8.75 0 0117.5 0z" {...props} />
  </Svg>
);

export default DangerIcon;
