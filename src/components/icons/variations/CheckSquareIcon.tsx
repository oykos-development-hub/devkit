import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CheckSquareIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 21 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M7 9l3 3L20 2m-1 8v7a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h11"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CheckSquareIcon;
