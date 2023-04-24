import styled, { css } from "styled-components";
export const Container = styled.div(() => ({ hasContent, disabled, theme, style }) => {
    const { gray300 } = theme.palette;
    return css `
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: ${hasContent && "flex-start"};
    padding: ${(style === null || style === void 0 ? void 0 : style.padding) || "0"};
    z-index: 1;

    & p,
    span,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: ${disabled && gray300};
    }

    ${Object.assign({}, style)}
  `;
});
//# sourceMappingURL=container.js.map