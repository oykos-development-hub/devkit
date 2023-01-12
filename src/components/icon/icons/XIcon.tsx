import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/elements";

const XIcon = (props: IconProps): React.ReactElement => (
  <Svg data-testid="x-icon" viewBox="0 0 8 8" onClick={props.onClick} {...props}>
    <Path
      fillRule="evenodd"
      d="M.646.646a.5.5 0 01.708 0L4 3.293 6.646.646a.5.5 0 11.708.708L4.707 4l2.647 2.646a.5.5 0 11-.708.708L4 4.707 1.354 7.354a.5.5 0 11-.708-.708L3.293 4 .646 1.354a.5.5 0 010-.708z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);

export default XIcon;