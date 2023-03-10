import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FacebookIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" {...props}>
    <g clipPath="url(#clip0_30_66609)">
      <Path
        d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.668 4.533-4.668 1.312 0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.469h-2.796v8.385C19.612 22.954 24 17.99 24 12z"
        {...props}
      />
    </g>
    <defs>
      <clipPath id="clip0_30_66609">
        <Path d="M0 0H24V24H0z" {...props} />
      </clipPath>
    </defs>
  </Svg>
);

export default FacebookIcon;
