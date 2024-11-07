import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const TrashIconTwo = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 5h2m0 0h16M3 5v14a2 2 0 002 2h10a2 2 0 002-2V5H3zm3 0V3a2 2 0 012-2h4a2 2 0 012 2v2m-6 5v6m4-6v6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default TrashIconTwo;
