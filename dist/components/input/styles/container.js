import styled, { css } from "styled-components";
export const Container = styled.div(({ style }) => {
    return css `
    width: ${(style === null || style === void 0 ? void 0 : style.width) || "100%"};
    display: flex;
    flex-direction: column;
    gap: 0.25em;
    position: relative;

    & > div {
      position: relative;
    }
  `;
});
//# sourceMappingURL=container.js.map