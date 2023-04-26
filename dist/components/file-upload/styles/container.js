import styled, { css } from "styled-components";
import { rem } from "polished";
export const Container = styled.div(({ variant, isDragging, style, theme }) => {
    const { gray600, primary500 } = theme.palette;
    return css `
    display: flex;
    flex-direction: ${variant === "primary" ? "column" : "row"};
    justify-content: center;
    align-items: center;
    padding: ${variant === "primary"
        ? `${rem("56px")}`
        : `${rem("16px")} ${rem("24px")} ${rem("16px")} ${rem("32px")}`};
    border-radius: ${rem("10px")};
    border: ${isDragging ? `2px dashed ${primary500}` : `1px dashed ${gray600}`};
    gap: ${variant === "primary" ? `${rem("24px")}` : `${rem("12.5px")}`};

    & input {
      display: none;
    }
  `;
});
//# sourceMappingURL=container.js.map