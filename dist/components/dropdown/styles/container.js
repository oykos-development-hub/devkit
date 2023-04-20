import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
import { rem } from "polished";
export const Container = styled.div(() => ({ theme }) => {
    const { gray900 } = theme.palette;
    return css `
    display: flex;
    flex-direction: column;
    gap: ${rem("6px")};
      
    & *,
    & ${BodyMedium} {
      font-family: ${theme.fontFamily.one || "sans-serif"}
      font-size: ${rem("14px")};      
      color: ${gray900};
    }

    & > div {
      position: relative;
    }
  `;
});
//# sourceMappingURL=container.js.map