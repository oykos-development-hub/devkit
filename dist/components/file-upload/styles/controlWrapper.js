import styled, { css } from "styled-components";
export const ControlWrapper = styled.div(({ variant }) => {
    return css `
    display: flex;
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
  `;
});
//# sourceMappingURL=controlWrapper.js.map