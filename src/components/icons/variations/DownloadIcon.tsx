import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const DownloadIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 13v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4m4-5l5 5m0 0l5-5m-5 5V1"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default DownloadIcon;
