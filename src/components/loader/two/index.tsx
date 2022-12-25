import React from "react";
import { LoaderTwoProps } from "./types";
//import "./_style.scss";

export const Loader = ({
  className,
  width,
  height,
  primaryColor = "#e3e3e3",
  secondaryColor = "#333333"
}: LoaderTwoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      style={ { margin: "auto" } }
      width={ width }
      height={ height }
      className={ className }
      display="block"
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      id="loader"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        fill="none"
        stroke={ primaryColor }
        strokeDasharray="50.26548245743669 50.26548245743669"
        strokeLinecap="round"
        strokeWidth="4"
        id="loader-ring-1"
      />
      <circle
        cx="50"
        cy="50"
        r="23"
        fill="none"
        stroke={ secondaryColor }
        strokeDasharray="36.12831551628262 36.12831551628262"
        strokeDashoffset="36.128"
        strokeLinecap="round"
        strokeWidth="4"
        id="loader-ring-2"
      />
    </svg>
  );
};
