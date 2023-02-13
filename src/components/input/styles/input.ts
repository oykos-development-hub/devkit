import styled, { css } from "styled-components";
import { Theme } from "../../../shared/theme";
import { InputProps } from "../types";

const shared = ({ style, theme, error }: InputProps) => {
  const { gray200, gray300, gray700, error200, error50, primary100, white } = theme!.palette;

  return css`
    width: 100%;
    border-radius: ${theme!.borderRadius?.lg || "0.5em"};
    border: ${`${theme!.borderWidth?.xs || "1px"} solid ${error ? error200 : gray300}`};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${error ? error200 : primary100};
      outline: 3px solid ${error ? error50 : gray200};
    }

    &[disabled] {
      color: ${gray300};
      background-color: ${white};
    }

    &::placeholder {
      color: ${gray700};
    }

    ${{ ...style }}
  `;
};

export const StyledInput = styled.input(() => ({ style, theme, error, maxLength }: InputProps) => {
  return css`
    ${shared({ style, theme, error, maxLength })}
    text-align: ${maxLength === 1 ? "center" : "left"};
    height: 3em;
  `;
});

export const Textarea = styled.textarea(() => ({ style, theme, error }: InputProps) => {
  return css`
    ${shared({ style, theme, error })}
    resize: none;
    height: 6em;
  `;
});
