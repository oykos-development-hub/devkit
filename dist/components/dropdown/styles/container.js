import styled, { css } from "styled-components";
import { BodyMedium } from "../../typography/styles/variants";
export const Container = styled.div(({ theme }) => {
    const { gray900 } = theme.palette;
    return css `
    display: flex;
    flex-direction: column;
    gap: 0.5em;

    & *,
    & ${BodyMedium} {
      font-family: "Inter";
      color: ${gray900};
    }

    & > div {
      position: relative;
    }
  `;
});
//# sourceMappingURL=container.js.map