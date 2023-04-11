import React from "react";
import { IconProps } from "../types";
import { Path, Svg } from "../styles/shared";

const WifiOffIcon = (props: IconProps): React.ReactElement => (
  <Svg viewBox="0 0 24 24" onClick={props.onClick} fill={props.fill || "none"} {...props}>
    <Path
      d="M1 1l22 22m-6.28-11.94c.82.4 1.585.9 2.28 1.49m-14 0a10.94 10.94 0 015.17-2.39m.54-5.11A16 16 0 0122.58 9M1.42 9a15.91 15.91 0 014.7-2.88m2.41 9.99a6 6 0 016.95 0M12 20h.01"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke={props.stroke || "#000"}
      {...props}
    />
  </Svg>
);

export default WifiOffIcon;
