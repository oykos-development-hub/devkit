import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const PaperclipIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M20.44 11.05l-9.19 9.19a6.003 6.003 0 01-8.49-8.49l9.19-9.19a4.002 4.002 0 015.66 5.66l-9.2 9.19a2.001 2.001 0 11-2.83-2.83l8.49-8.48"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default PaperclipIcon;
