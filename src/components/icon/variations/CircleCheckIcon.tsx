import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

export const CircleCheckIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 23 22" onClick={props.onClick} fill={props.fill} {...props}>
    <Path d="M9.743 15.314L5.5 11.07l1.414-1.414 2.829 2.828 5.656-5.657 1.415 1.415-7.071 7.07z" {...props} />
    <Path
      fillRule="evenodd"
      d="M.5 11c0-6.075 4.925-11 11-11s11 4.925 11 11-4.925 11-11 11-11-4.925-11-11zm11 9a9 9 0 110-18 9 9 0 010 18z"
      clipRule="evenodd"
      stroke={props.stroke}
      {...props}
    />
  </Svg>
);

export default CircleCheckIcon;
