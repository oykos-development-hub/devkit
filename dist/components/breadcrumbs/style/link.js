import styled, { css } from "styled-components";
export const Link = styled.a(({ theme }) => {
    const { gray500, primary400 } = theme.palette;
    return css `
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25em;
    color: ${gray500};
    text-decoration: none;

    &.active {
      cursor: auto;
      pointer-events: none;
      color: ${primary400};
      text-decoration: none;
    }
  `;
});
//# sourceMappingURL=link.js.map