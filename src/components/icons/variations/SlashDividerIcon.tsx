import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const SlashDividerIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 12 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1.516 21.171L10.814 1.232"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default SlashDividerIcon;
