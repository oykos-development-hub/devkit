import styled, { css } from "styled-components";
export const ButtonWrapper = styled.div(({ variant }) => {
    return css `
    display: ${variant === "primary" ? "block" : "flex"};
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    padding: 0;
  `;
});
//# sourceMappingURL=buttonWrapper.js.map