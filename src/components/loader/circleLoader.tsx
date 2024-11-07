import React from "react";
import { LoaderWrapper } from "./styles";

const CircleLoader = ({ width, height, color }: { width: string; height: string; color: string }) => {
  return (
    <LoaderWrapper width={width} height={height}>
      <svg viewBox="25 25 50 50">
        <circle cx="50" cy="50" r="20" fill="none" stroke={color} strokeWidth="4" />
      </svg>
    </LoaderWrapper>
  );
};

export default CircleLoader;
