import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FileMinusIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M11 1H3a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V7m-6-6l6 6m-6-6v6h6M6 14h6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default FileMinusIcon;
