import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LinkedinIconTwo = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 21" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M15 7a6 6 0 016 6v7h-4v-7a2 2 0 00-4 0v7H9v-7a6 6 0 016-6zM5 8H1v12h4V8zM3 5a2 2 0 100-4 2 2 0 000 4z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default LinkedinIconTwo;
