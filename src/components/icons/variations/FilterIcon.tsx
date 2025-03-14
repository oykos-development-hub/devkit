import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FilterIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 1H1l8 9.46V17l4 2v-8.54L21 1z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default FilterIcon;
