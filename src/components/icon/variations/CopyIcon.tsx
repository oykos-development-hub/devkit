import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CopyIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M4 14H3a2 2 0 01-2-2V3a2 2 0 012-2h9a2 2 0 012 2v1m-4 4h9a2 2 0 012 2v9a2 2 0 01-2 2h-9a2 2 0 01-2-2v-9a2 2 0 012-2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default CopyIcon;
