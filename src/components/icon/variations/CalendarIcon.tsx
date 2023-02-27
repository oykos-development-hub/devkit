import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const CalendarIcon = (props: IconProps): React.ReactElement => {
  return (
    <Svg width="14" height="17" viewBox="0 0 14 17" {...props}>
      <Path
        d="M9.66667 1.83325V4.49992M4.33333 1.83325V4.49992M1 7.16659H13M2.33333 3.16659H11.6667C12.403 3.16659 13 3.76354 13 4.49992V13.8333C13 14.5696 12.403 15.1666 11.6667 15.1666H2.33333C1.59695 15.1666 1 14.5696 1 13.8333V4.49992C1 3.76354 1.59695 3.16659 2.33333 3.16659Z"
        stroke="#616161"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        {...props}
      />
    </Svg>
  );
};

export default CalendarIcon;
