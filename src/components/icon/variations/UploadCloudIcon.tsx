import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UploadCloudIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M16 14l-4-4m0 0l-4 4m4-4v9m8.39-2.61A5 5 0 0018 7h-1.26A8 8 0 103 14.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default UploadCloudIcon;
