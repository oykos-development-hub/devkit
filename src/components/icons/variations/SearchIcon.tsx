import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const SearchIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 19l-4.35-4.35M17 9A8 8 0 111 9a8 8 0 0116 0z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default SearchIcon;
