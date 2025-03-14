import React from "react";
import { SSSIconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const FileInvoice = (props: SSSIconProps): React.ReactElement => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      onClick={props.onClick}
      fill={props.fill || "none"}
    >
      <g stroke={props.stroke || "#615959"} strokeLinecap="round" strokeLinejoin="round">
        <Path strokeWidth="1.5" d="M29.167 6.25v8.333a2.083 2.083 0 002.083 2.084h8.333"></Path>
        <Path
          strokeWidth="1.5"
          d="M35.417 43.75H14.583a4.167 4.167 0 01-4.166-4.167V10.417a4.167 4.167 0 014.166-4.167h14.584l10.416 10.417v22.916a4.167 4.167 0 01-4.166 4.167z"
        ></Path>
        <Path strokeWidth="2" d="M18.75 14.583h2.083"></Path>
        <Path strokeWidth="1.5" d="M18.75 27.083h12.5M27.083 35.417h4.167"></Path>
      </g>
      <defs>
        <clipPath id="clip0_2041_2563">
          <Path fill="#fff" d="M0 0H50V50H0z"></Path>
        </clipPath>
      </defs>
    </Svg>
  );
};

export default FileInvoice;
