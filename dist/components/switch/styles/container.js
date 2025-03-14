import styled, { css } from "styled-components";
export const Container = styled.div(() => ({ hasLabel, disabled, theme, style, rtl }) => {
    const { gray300 } = theme.palette;
    return css `
    display: flex;
    flex-direction: ${rtl ? "row" : "row-reverse"};
    align-items: center;
    justify-content: ${hasLabel && "space-between"};
    gap: ${hasLabel && "0.5rem"};
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