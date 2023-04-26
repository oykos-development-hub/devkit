import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../shared/theme/types";

export const HintContent = styled.div<{
  theme?: DefaultTheme;
}>(({ theme }) => {
  const { gray700 } = theme!.palette;

  return css`
    color: ${gray700};
  `;
});
