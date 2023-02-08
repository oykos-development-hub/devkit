import styled, { css } from "styled-components";
import { DropdownProps } from "../types";

export const Container = styled.div<DropdownProps>(() => ({ theme }) => {
  const { gray900 } = theme!.palette;

  return css`
    display: flex;
    flex-direction: column;
    gap: 0.75em;

    & *,
    & p {
      font-family: "Inter";
      color: ${gray900};
    }

    & > div {
      position: relative;
    }
  `;
});
