import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const GithubIconTwo = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 23" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M8 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0019 4.77 5.07 5.07 0 0018.91 1S17.73.65 15 2.48a13.38 13.38 0 00-7 0C5.27.65 4.09 1 4.09 1A5.07 5.07 0 004 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 008 18.13V22"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default GithubIconTwo;
