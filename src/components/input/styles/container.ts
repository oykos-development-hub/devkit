import styled, { css } from "styled-components";
import { BodyMedium, HelperText } from "../../typography/styles/variants";
import { InputProps } from "../types";

export const Container = styled.div(({ label, error, theme }: InputProps) => {
  const { error500, gray700, gray900 } = theme!.palette;

  return css`
    width: 100%;
    min-width: ${label ? "200px" : "3em"};
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    position: relative;
    height: 100%;

    & * {
      font-size: 1em;
      font-family: "Inter", sans-serif;
      color: ${gray900};
    }

    & > div {
      position: relative;
    }

    ${HelperText}:last-child {
      position: absolute;
      bottom: -20px;
      color: ${error ? error500 : gray700};
    }
  `;
});
