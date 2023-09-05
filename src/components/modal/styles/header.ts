import styled, { css, DefaultTheme } from "styled-components";
import { H6 } from "../../typography/styles/variants";
import { Path } from "../../icon/styles/shared";

export const ModalHeader = styled.div<{ theme: DefaultTheme }>(({ theme }) => {
  const { gray500 } = theme.palette;
  return css`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${H6} {
      flex-grow: 1;
      padding-right: 1rem;
    }

    & ${Path} {
      fill: ${gray500};
    }
  `;
});
