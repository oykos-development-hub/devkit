import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const EyeOffIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M9.9 4.24A9.12 9.12 0 0112 4c7 0 11 8 11 8a18.498 18.498 0 01-2.16 3.19m-6.72-1.07a3 3 0 11-4.24-4.24M1 1l22 22m-5.06-5.06A10.07 10.07 0 0112 20c-7 0-11-8-11-8a18.45 18.45 0 015.06-5.94l11.88 11.88z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default EyeOffIcon;
