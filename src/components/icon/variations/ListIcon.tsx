import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const ListIcon = (props: IconProps): React.ReactElement => (
  <Svg data-testid="list-icon" viewBox="0 0 22 20" onClick={props.onClick} {...props}>
    <Path
      fillRule="evenodd"
      d="M19 2H3a1 1 0 00-1 1v14a1 1 0 001 1h16a1 1 0 001-1V3a1 1 0 00-1-1zM3 0a3 3 0 00-3 3v14a3 3 0 003 3h16a3 3 0 003-3V3a3 3 0 00-3-3H3zm2 5h2v2H5V5zm5 0a1 1 0 000 2h6a1 1 0 100-2h-6zM7 9H5v2h2V9zm2 1a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1zm-2 3H5v2h2v-2zm2 1a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
      clipRule="evenodd"
      {...props}
    />
  </Svg>
);

export default ListIcon;
