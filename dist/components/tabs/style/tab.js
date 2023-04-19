import styled, { css } from "styled-components";
export const StyledTab = styled.button(({ disabled, theme, style, active, }) => {
    const { white, gray900, primary500 } = theme.palette;
    return css `
      padding: 1em 1.625em;
      border: 0.25em solid ${active && !disabled ? primary500 : "dark"};
      color: ${active && !disabled ? white : gray900};
      background-color: ${active && !disabled ? primary500 : "transparent"};
      transition: all 0.1s ease-in-out;
      cursor: ${disabled ? "auto" : "pointer"};

      ${Object.assign({}, style)}
    `;
});
//# sourceMappingURL=tab.js.map