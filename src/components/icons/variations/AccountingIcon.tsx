import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const AccountingIcon = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" fill="none" viewBox="0 0 42 42">
      <Path
        stroke={props.stroke || "#615959"}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M1 21.54h19.46M21.54 41V1M11.27 15.054V8.027m-3.513 3.514h7.027M7.757 32.35h7.027m13.243-7.027h7.027m-7.027-6.486h7.027M6.405 41h29.19A5.405 5.405 0 0041 35.595V6.405A5.405 5.405 0 0035.595 1H6.405A5.405 5.405 0 001 6.405v29.19A5.405 5.405 0 006.405 41z"
      ></Path>
    </Svg>
  );
};

export default AccountingIcon;
