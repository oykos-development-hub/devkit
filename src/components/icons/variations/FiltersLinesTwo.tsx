import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FiltersLinesTwo = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 14" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 7h15M1 1h18M1 13h12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default FiltersLinesTwo;
