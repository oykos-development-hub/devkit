import styled, { css } from "styled-components";
import { rem } from "polished";
export const TextWrapper = styled.div(({ variant, theme }) => {
    const { gray600, gray900 } = theme.palette;
    return css `
    display: flex;
    flex-direction: column;
    justify-content: center;
    ${variant === "primary" && `align-items:center`};
    padding: 0;
    gap: ${rem("12px")};

    & p:first-of-type {
      color: ${gray900};
    }

    & span {
      color: ${gray600};
    }
  `;
});
//# sourceMappingURL=textWrapper.js.map