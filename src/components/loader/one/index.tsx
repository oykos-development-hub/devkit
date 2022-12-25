import React from 'react';
import styled from 'styled-components';
import { LoaderOneProps } from "./types";
import { rotation } from "../../../shared/animations/rotation";

export const Loader = styled.div<LoaderOneProps>`
  width: ${(props: LoaderOneProps) => props.width || '80px'};
  height: ${(props: LoaderOneProps) => props.width || '80px'};
  border: 3px solid;
  border-color: ${(props: LoaderOneProps) => props.primaryColor || props.theme.primaryColor || 'red'};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${rotation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid;
    border-color: ${(props: LoaderOneProps) => props.secondaryColor || props.theme.secondaryColor || 'green'} transparent;
  } 
`;