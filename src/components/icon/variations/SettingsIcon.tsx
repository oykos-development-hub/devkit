import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const SettingsIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M12 15a3 3 0 100-6 3 3 0 000 6z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
    <Path
      d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a1.998 1.998 0 010 2.83 1.998 1.998 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a1.998 1.998 0 01-2.83 0 2 2 0 010-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H3a2 2 0 110-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V3a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 013.417 1.415 2 2 0 01-.587 1.415l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default SettingsIcon;
