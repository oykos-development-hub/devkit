import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
import { InputProps } from "../types";

export const Container = styled.div(({ label, error, theme, hint }: InputProps) => {
  const { error500, gray700, gray900 } = theme!.palette;

  return css`
    width: 100%;
    min-width: ${label ? "200px" : "3em"};
    padding: ${label ? "1.75em" : 0} 0 ${error || hint ? "1.75em" : 0} 0;
    font-size: 16px;

    & * {
      font-size: 1em;
      font-family: "Inter", sans-serif;
      color: ${gray900};
    }

    & > div {
      position: relative;
    }

    ${BodyMedium}:first-child {
      position: absolute;
      top: -2em;
      left: 0;
    }

    ${BodyMedium}:last-child {
      position: absolute;
      bottom: -2em;
      left: 0;
      color: ${error ? error500 : gray700};
    }
  `;
});
