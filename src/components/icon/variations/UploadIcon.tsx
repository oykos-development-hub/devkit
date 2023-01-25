import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const UploadIcon = (props: IconProps): React.ReactElement => (
  <Svg data-testid="upload-icon" viewBox="0 0 16 16" onClick={props.onClick} {...props}>
    <Path
      fillRule="evenodd"
      d="M9 10.986a1 1 0 11-2 0V3.828L3.757 7.071 2.343 5.657 8 0l5.657 5.657-1.415 1.414L9 3.83v7.157z"
      clipRule="evenodd"
      {...props}
    />
    <Path fillRule="evenodd" d="M16 10h-2v4H2v-4H0v4a2 2 0 002 2h12a2 2 0 002-2v-4z" clipRule="evenodd" {...props} />
  </Svg>
);

export default UploadIcon;
