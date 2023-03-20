import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ChevronUpIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 14 8" onClick={props.onClick} {...props}>
    <Path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7L7 1 1 7" {...props} />
  </Svg>
);
export default ChevronUpIcon;
