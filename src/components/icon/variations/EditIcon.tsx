import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const EditIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 23 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M10 4H3a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7M17.5 2.5a2.121 2.121 0 113 3L11 15l-4 1 1-4 9.5-9.5z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default EditIcon;
