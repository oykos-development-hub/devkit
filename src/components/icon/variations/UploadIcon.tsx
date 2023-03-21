import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UploadIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 51 42" onClick={props.onClick} {...props}>
    <Path
      d="M34.167 29.667L25.5 21m0 0l-8.667 8.667M25.5 21v19.5m18.178-5.655A10.833 10.833 0 0038.5 14.5h-2.73A17.334 17.334 0 106 30.317"
      {...props}
    />
  </Svg>
);

export default UploadIcon;
