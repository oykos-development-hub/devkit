import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
import { InputProps } from "../types";

export const Container = styled.div(() => ({ label, error, theme, hint }: InputProps) => {
    const { error500, gray700 } = theme!.palette;

    return css`
    width: 100%;
    min-width: ${label ? "200px" : "3em"};
    padding: ${label ? "1.75em" : 0} 0 ${error || hint ? "1.75em" : 0} 0;
    font-size: 14px;

    & * {
      font-size: 1em;
    }

    & > div {
      position: relative;
    }

    & p:first-child {
      position: absolute;
      top: -1.75em;
      left: 0;
    }

    & p:last-child {
      position: absolute;
      bottom: -1.75em;
      left: 0;
      color: ${error ? error500 : gray700};
    }
  `;
});
