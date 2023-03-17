import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ChevronDownIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 8" onClick={props.onClick} {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6 6-6" {...props} />
  </Svg>
);

export default ChevronDownIcon;
