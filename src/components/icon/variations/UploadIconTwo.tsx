import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UploadIconTwo = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 20 20" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M19 13v4a2 2 0 01-2 2H3a2 2 0 01-2-2v-4m14-7l-5-5m0 0L5 6m5-5v12"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default UploadIconTwo;
