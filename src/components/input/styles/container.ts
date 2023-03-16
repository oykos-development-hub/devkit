import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
import { InputProps } from "../types";

export const Container = styled.div(({ label, error, theme, hint }: InputProps) => {
  const { error500, gray700, gray900 } = theme!.palette;

  return css`
    width: 100%;
    min-width: ${label ? "200px" : "3em"};
    display: flex;
    flex-direction: column;
    gap: 0.25em;

    & * {
      font-size: 1em;
      font-family: "Inter", sans-serif;
      color: ${gray900};
    }

    & > div {
      position: relative;
    }

    ${BodyMedium}:last-child {
      font-size: 0.75em;
      color: ${error ? error500 : gray700};
    }
  `;
});
