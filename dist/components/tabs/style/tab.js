import styled, { css } from "styled-components";
export const StyledTab = styled.button(({ disabled, theme, style, active, }) => {
    const { white, gray200, gray400, gray600, gray900, primary500 } = theme.palette;
    return css `
      padding: 1em 1.625em;
      border: 0.0625em solid ${active ? primary500 : disabled ? gray200 : gray600};
      color: ${active ? white : disabled ? gray200 : gray900};
      background-color: ${active && !disabled ? primary500 : white};
      transition: all 0.1s ease-in-out;
      cursor: ${disabled ? "auto" : "pointer"};

      &:hover {
        color: ${!disabled ? white : gray200};
        border: 0.0625em solid ${!disabled ? primary500 : gray200};
        background-color: ${!disabled ? primary500 : white};
      }
      ${Object.assign({}, style)}
    `;
});
//# sourceMappingURL=tab.js.map