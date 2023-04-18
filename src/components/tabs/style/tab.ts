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
    const { white, gray900 } = theme.palette;

    return css`
      padding: 1em 1.625em;
      border: 0.25em solid ${active && !disabled ? "#B27D1E" : "dark"};
      color: ${active && !disabled ? white : gray900};
      background-color: ${active && !disabled ? "#B27D1E" : "transparent"};
      transition: all 0.1s ease-in-out;
      cursor: ${disabled ? "auto" : "pointer"};

      ${{ ...style }}
    `;
  },
);
