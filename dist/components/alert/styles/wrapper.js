import styled, { css } from "styled-components";
import { rem } from "polished";
export const Wrapper = styled.div(() => ({ size }) => {
    const padding = {
        sm: rem("8px"),
        md: rem("12px"),
        lg: rem("16px"),
    };
    return css `
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${padding[size]};
  `;
});
//# sourceMappingURL=wrapper.js.map