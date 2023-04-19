import styled, { css, CSSProperties, DefaultTheme } from "styled-components";

export const StyledTab = styled.button(
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
    const { white, gray900, primary500 } = theme.palette;

    return css`
      padding: 1em 1.625em;
      border: 0.25em solid ${active && !disabled ? primary500 : "dark"};
      color: ${active && !disabled ? white : gray900};
      background-color: ${active && !disabled ? primary500 : "transparent"};
      transition: all 0.1s ease-in-out;
      cursor: ${disabled ? "auto" : "pointer"};

      ${{ ...style }}
    `;
  },
);
