import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const RepeatIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M15 1l4 4m0 0l-4 4m4-4H5a4 4 0 00-4 4v2m4 12l-4-4m0 0l4-4m-4 4h14a4 4 0 004-4v-2"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default RepeatIcon;
