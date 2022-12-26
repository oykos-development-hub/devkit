import React from "react";
import { LoaderProps } from "./types";
import styled from "styled-components";
import {
  rotation,
  rotationBackwards,
} from "../../shared/animations/rotation";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ (props: LoaderProps) =>
          props.wrapperBackgroundColor || props.theme?.palette.dark.four || "transparent"
  };

  & #loader {
    width: ${ (props: LoaderProps) => props.width || "120px" };
    height: ${ (props: LoaderProps) => props.height || "120px" };
  }

  & #loader-ring-1 {
    stroke: ${ (props: LoaderProps) => props.primaryColor || props.theme?.palette.main.two || "red" };
    animation: ${ rotation } 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${ (props: LoaderProps) => props.secondaryColor || props.theme?.palette.important.two || "green" };
    animation: ${ rotationBackwards } 1.5s linear infinite;
    transform-origin: center;
  }
`;

export const Two = (props: LoaderProps) => {
  return (
    <Wrapper { ...props }>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        style={ { margin: "auto" } }
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
          strokeDasharray="50.26548245743669 50.26548245743669"
          strokeLinecap="round"
          strokeWidth="2"
          id="loader-ring-1"
        />
        <circle
          cx="50"
          cy="50"
          r="23"
          fill="none"
          strokeDasharray="36.12831551628262 36.12831551628262"
          strokeDashoffset="36.128"
          strokeLinecap="round"
          strokeWidth="2"
          id="loader-ring-2"
        />
      </svg>
    </Wrapper>
  );
};
