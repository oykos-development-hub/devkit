import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FiltersLinesIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M4 7h12M1 1h18M7 13h6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default FiltersLinesIcon;
