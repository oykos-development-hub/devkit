import styled, { css } from "styled-components";
import { H6 } from "../../typography/styles/variants";
import { Path } from "../../icon/styles/shared";
export const ModalHeader = styled.div(({ theme }) => {
    const { gray500 } = theme.palette;
    return css `
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${H6} {
      flex-grow: 1;
    }

    & ${Path} {
      fill: ${gray500};
    }
  `;
});
//# sourceMappingURL=header.js.map