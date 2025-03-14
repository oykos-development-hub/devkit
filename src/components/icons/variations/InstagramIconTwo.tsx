import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const InstagramIconTwo = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M16.5 5.5h.01M6 1h10a5 5 0 015 5v10a5 5 0 01-5 5H6a5 5 0 01-5-5V6a5 5 0 015-5zm9 9.37a4 4 0 11-7.914 1.174A4 4 0 0115 10.37z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default InstagramIconTwo;
