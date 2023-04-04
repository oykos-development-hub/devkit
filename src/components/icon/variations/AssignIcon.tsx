import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const AssignIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 16 16" onClick={props.onClick} fill={props.fill} {...props}>
    <Path d="M14 2H10V0H16V6H14V2Z" stroke={props.stroke} {...props} />
    <Path d="M10 14H14V10H16V16H10V14Z" stroke={props.stroke} {...props} />
    <Path d="M6 2H2V6H0V0H6V2Z" stroke={props.stroke} {...props} />
    <Path d="M6 14H2V10H0V16H6V14Z" stroke={props.stroke} {...props} />
    <Path
      d="M8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5Z"
      stroke={props.stroke}
      {...props}
    />
  </Svg>
);

export default AssignIcon;
