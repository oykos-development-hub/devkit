import React from "react";
import { SSSIconProps } from "../types";
import { Svg } from "../styles/shared";

const DotIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 6 6" {...props}>
    <circle cx="3" cy="3" r="3"></circle>
  </Svg>
);

export default DotIcon;
