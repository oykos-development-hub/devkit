import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const EditIconThree = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M10 19h9M14.5 2.5a2.121 2.121 0 113 3L5 18l-4 1 1-4L14.5 2.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default EditIconThree;
