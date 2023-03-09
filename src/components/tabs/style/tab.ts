import styled, { css, CSSProperties, DefaultTheme } from "styled-components";

export const Tab = styled.button(
  ({
    disabled,
    theme,
    style,
    active,
  }: {
    disabled?: boolean;
    theme: DefaultTheme;
    style?: CSSProperties;
    active?: boolean;
  }) => {
    const { primary500, gray400, gray900, primary200 } = theme.palette;

    return css`
      padding: 0.5em 2em;
      border: ${active && !disabled ? `0.25em solid ${primary200}` : 0};
      border-bottom: 0.25em solid ${disabled ? gray400 : active ? primary200 : primary500};
      color: ${disabled ? gray400 : gray900};
      background-color: transparent;
      transition: all 0.1s ease-in-out;
      cursor: ${disabled ? "auto" : "pointer"};

      &:hover {
        color: ${disabled ? gray400 : primary500};
      }

      ${{ ...style }}
    `;
  },
);
