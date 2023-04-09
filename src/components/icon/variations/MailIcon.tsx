import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const MailIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 18" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2m20 0v12c0 1.1-.9 2-2 2H3c-1.1 0-2-.9-2-2V3m20 0l-10 7L1 3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default MailIcon;
