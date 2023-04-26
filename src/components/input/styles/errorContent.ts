import styled, { css } from "styled-components";
import { DefaultTheme } from "../../../shared/theme/types";

export const ErrorContent = styled.div<{
  theme?: DefaultTheme;
}>(({ theme }) => {
  const { error500 } = theme!.palette;

  return css`
    color: ${error500};
  `;
});
