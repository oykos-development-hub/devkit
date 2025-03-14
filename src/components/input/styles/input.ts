import styled, { css } from "styled-components";
import { InputProps } from "../types";
import { rem } from "polished";

const shared = ({ style, theme, error }: InputProps) => {
  const { gray300, gray700, error50, error200, primary50, primary200, white } = theme!.palette;

  return css`
    font-family: ${({ theme }) => theme.fontFamily.one || "sans-serif"};
    width: 100%;
    border-radius: ${theme!.borderRadius?.lg || rem("8px")};
    border: ${rem("1px")} solid ${error ? error200 : gray300};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${error ? error200 : primary200};
      box-shadow: ${style?.boxShadow ||
      `0 ${rem("1px")} ${rem("2px")} rgba(16, 24, 40, 0.05), 0 0 0 ${rem("4px")} ${error ? error50 : primary50}`};
    }

    &[disabled] {
      color: ${gray700};
      background-color: ${white};
    }

    &::placeholder {
      display: block;
      color: ${gray700};
      font-family: ${theme?.fontFamily?.one || "sans-serif"};
      margin: 0;
      font-weight: 400;
    }

    ${{ ...style }}
  `;
};

export const StyledInput = styled.input(({ style, theme, error, maxLength }: InputProps) => {
  return css`
    ${shared({ style, theme, error, maxLength })}
    text-align: ${maxLength === 1 ? "center" : "left"};
    height: ${rem("44px")};
  `;
});

export const Textarea = styled.textarea(({ style, theme, error }: InputProps) => {
  return css`
    ${shared({ style, theme, error })}
    font-family: ${({ theme }) => theme.fontFamily.one || "sans-serif"};
    resize: none;
    height: 100%;
  `;
});
