import styled, { css } from "styled-components";
import { InputProps } from "../types";

const shared = ({ style, theme, error }: InputProps) => {
  const { gray400, gray600, error200, primary200, white } = theme!.palette;

  return css`
    width: 100%;
    border-radius: ${theme!.borderRadius?.lg || "0.5em"};
    border: ${`${theme!.borderWidth?.xs || "1px"} solid ${error ? error200 : gray400}`};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${error ? error200 : primary200};
      box-shadow: ${style?.boxShadow || "0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #f4ebff"};
    }

    &[disabled] {
      color: ${gray600};
      background-color: ${white};
    }

    &::placeholder {
      color: ${gray600};
      font-size: 14px;
    }

    ${{ ...style }}
  `;
};

export const StyledInput = styled.input(({ style, theme, error, maxLength }: InputProps) => {
  return css`
    ${shared({ style, theme, error, maxLength })}
    text-align: ${maxLength === 1 ? "center" : "left"};
    height: 3em;
  `;
});

export const Textarea = styled.textarea(({ style, theme, error }: InputProps) => {
  return css`
    ${shared({ style, theme, error })}
    resize: none;
    height: 6em;
  `;
});
