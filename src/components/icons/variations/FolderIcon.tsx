import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FolderIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 22 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M21 17a2 2 0 01-2 2H3a2 2 0 01-2-2V3a2 2 0 012-2h5l2 3h9a2 2 0 012 2v11z"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default FolderIcon;
