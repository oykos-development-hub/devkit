import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FileIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 18 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M10 1H3a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8m-7-7l7 7m-7-7v7h7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default FileIcon;
