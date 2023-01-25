import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const TrashIcon = (props: IconProps): React.ReactElement => (
  <Svg data-testid="trash-icon" viewBox="0 0 18 19" onClick={props.onClick} {...props}>
    <Path
      fillRule="evenodd"
      d="M4 3V2a2 2 0 012-2h6a2 2 0 012 2v1h3a1 1 0 110 2h-1v11a3 3 0 01-3 3H5a3 3 0 01-3-3V5H1a1 1 0 010-2h3zm2-1h6v1H6V2zM4 5h10v11a1 1 0 01-1 1H5a1 1 0 01-1-1V5z"
      clipRule="evenodd"
      {...props}
    />
    <Path fillRule="evenodd" d="M12 7h-2v8h2V7zM8 7H6v8h2V7z" clipRule="evenodd" {...props} />
  </Svg>
);

export default TrashIcon;
