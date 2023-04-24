import styled, { css } from "styled-components";
import { InputProps } from "../types";
import { rem } from "polished";

const shared = ({ style, theme, error }: InputProps) => {
  const { gray400, gray600, error50, error200, primary50, primary200, white } = theme!.palette;

  return css`
    width: 100%;
    border-radius: ${theme!.borderRadius?.lg || rem("8px")};
    border: ${`${theme!.borderWidth?.xs || rem("1px")} solid ${error ? error200 : gray400}`};
    box-sizing: border-box;
    outline: none;
    font-family: ${style?.fontFamily || theme!.fontFamily.one};

    &:focus {
      border-color: ${error ? error200 : primary200};
      box-shadow: ${style?.boxShadow ||
      `0 ${rem("1px")} ${rem("2px")} rgba(16, 24, 40, 0.05), 0 0 0 ${rem("4px")} ${error ? error50 : primary50}`};
    }

    &[disabled] {
      color: ${gray600};
      background-color: ${white};
    }

    &::placeholder {
      color: ${gray600};
      font-size: ${rem("14px")};
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
    resize: none;
    height: 100%;
  `;
});
