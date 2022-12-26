import React from "react";
import styled from "styled-components";
import { LoaderProps } from "./types";
import { rotation } from "../../shared/animations/rotation";

export const One = styled.div<LoaderProps>`
  width: ${(props: LoaderProps) => props.width || "80px"};
  height: ${(props: LoaderProps) => props.width || "80px"};
  border: ${(props: LoaderProps) => props.theme?.borderWidth?.md || "3px"} solid;
  border-color: ${(props: LoaderProps) => props.primaryColor || props.theme?.palette?.main?.two || "red"};
  border-radius: ${(props: LoaderProps) => props.theme?.borderRadius?.full || "50%"};
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${rotation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(props: LoaderProps) => props.secondaryWidth || "100px"};
    height: ${(props: LoaderProps) => props.secondaryHeight || "100px"};
    border-radius: ${(props: LoaderProps) => props.theme?.borderRadius?.full || "50%"};
    border: ${(props: LoaderProps) => props.theme?.borderWidth?.md || "3px"} solid;
    border-color: ${(props: LoaderProps) => props.secondaryColor || props.theme?.palette?.important?.two || "green"}
      transparent;
  }
`;
