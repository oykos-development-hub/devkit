import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const DownloadCloudIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 21" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M8 16l4 4m0 0l4-4m-4 4v-9m8.88 6.09A5 5 0 0018 8h-1.26A8 8 0 103 15.29"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default DownloadCloudIcon;
