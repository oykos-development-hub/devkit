import React from "react";
import { LoaderTwoProps } from "./types";
import styled from "styled-components";
import { rotation, rotationBackwards } from "../../../shared/animations/rotation";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${ (props: LoaderTwoProps) => props.wrapperBackgroundColor || 'transparent' };

  & #loader {
    width: ${ (props: LoaderTwoProps) => props.width || '120px' };
    height: ${ (props: LoaderTwoProps) => props.height || '120px' };
  }

  & #loader-ring-1 {
    stroke: ${ (props: LoaderTwoProps) => props.primaryColor || 'red' };
    animation: ${ rotation } 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${ (props: LoaderTwoProps) => props.secondaryColor || 'green' };
    animation: ${ rotationBackwards } 1.5s linear infinite;
    transform-origin: center;
  }
`;

export const Loader = (props: LoaderTwoProps) => {
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
