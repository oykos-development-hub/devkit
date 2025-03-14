import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const LinkedinIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill} {...props}>
    <g clipPath="url(#clip0_30_66449)">
      <Path
        d="M22.228 0H1.772A1.772 1.772 0 000 1.772v20.456A1.772 1.772 0 001.772 24h20.456A1.772 1.772 0 0024 22.228V1.772A1.772 1.772 0 0022.228 0zM7.153 20.445H3.545V8.983h3.608v11.462zM5.347 7.395a2.072 2.072 0 112.083-2.07 2.042 2.042 0 01-2.083 2.07zm15.106 13.06h-3.606v-6.262c0-1.846-.785-2.416-1.799-2.416-1.07 0-2.12.806-2.12 2.463v6.215H9.32V8.992h3.47v1.588h.047c.348-.705 1.568-1.91 3.43-1.91 2.013 0 4.188 1.195 4.188 4.695l-.002 7.09z"
        stroke={props.stroke}
        {...props}
      />
    </g>
    <defs>
      <clipPath id="clip0_30_66454">
        <Path d="M0 0H24V24H0z" stroke={props.stroke} {...props} />
      </clipPath>
    </defs>
  </Svg>
);

export default LinkedinIcon;
