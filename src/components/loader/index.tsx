import React from "react";
import { SSSLoaderProps } from "./types";
import CircleLoader from "./circleLoader";
import { Theme } from "../../shared/theme";

const sizes = {
  sm: "24px",
  md: "48px",
  lg: "96px",
};

export const SSSLoader = (props: SSSLoaderProps) => {
  const { width, height, size, color } = props;

  const resolvedWidth = size ? sizes[size] : width ? (typeof width === "string" ? width : `${width}px`) : sizes["md"];
  const resolvedHeight = size
    ? sizes[size]
    : height
    ? typeof height === "string"
      ? height
      : `${height}px`
    : sizes["md"];

  return <CircleLoader width={resolvedWidth} height={resolvedHeight} color={color ?? Theme.palette.primary500} />;
};
