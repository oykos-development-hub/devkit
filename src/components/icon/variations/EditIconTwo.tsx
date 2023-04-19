import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const EditIconTwo = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 22" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M16 2a2.827 2.827 0 114 4L6.5 19.5 1 21l1.5-5.5L16 2z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default EditIconTwo;
