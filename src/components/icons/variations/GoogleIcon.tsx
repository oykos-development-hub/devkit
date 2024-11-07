import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const GoogleIcon = (props: SSSIconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill} {...props}>
    <g clipPath="url(#clip0_30_66456)">
      <Path
        d="M23.766 12.276c0-.815-.066-1.635-.207-2.438H12.24v4.621h6.482a5.554 5.554 0 01-2.399 3.647v2.998h3.867c2.27-2.09 3.576-5.177 3.576-8.828z"
        stroke={props.stroke}
        {...props}
      />
      <Path
        d="M12.24 24c3.236 0 5.966-1.062 7.954-2.896l-3.867-2.998c-1.075.731-2.464 1.146-4.083 1.146-3.13 0-5.785-2.112-6.737-4.952h-3.99v3.091a12.002 12.002 0 0010.723 6.61z"
        stroke={props.stroke}
        {...props}
      />
      <Path
        d="M5.503 14.3a7.188 7.188 0 010-4.594V6.615H1.516a12.01 12.01 0 000 10.776l3.987-3.09z"
        stroke={props.stroke}
        {...props}
      />
      <Path
        d="M12.24 4.75a6.52 6.52 0 014.603 1.799l3.426-3.426A11.533 11.533 0 0012.24 0 11.998 11.998 0 001.516 6.615l3.987 3.09C6.45 6.863 9.109 4.75 12.24 4.75z"
        stroke={props.stroke}
        {...props}
      />
    </g>
    <defs>
      <clipPath id="clip0_30_66456">
        <Path d="M0 0H24V24H0z" stroke={props.stroke} {...props} />
      </clipPath>
    </defs>
  </Svg>
);

export default GoogleIcon;
