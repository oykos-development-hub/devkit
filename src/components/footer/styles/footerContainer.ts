import styled from "styled-components";
import React from "react";
import { Theme } from "../../../shared/theme";

export const FooterContainer = styled.div<{ style?: React.CSSProperties }>`
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) =>
    props.style?.backgroundColor ? props.style.backgroundColor : Theme.palette.gray200};
    padding-bottom: 18px;
    padding-top: 15px;
    position: absolute;
    width: 100%;
    max-height: 57px;
    left: 0px;
    bottom: 0px;
  }
`;
