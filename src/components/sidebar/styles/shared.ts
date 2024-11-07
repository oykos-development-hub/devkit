import { css } from "styled-components";
import { Theme } from "../../../shared/theme";

export const hoverStyle = css`
  background-color: ${Theme.palette.primary900};

  & p {
    color: ${Theme.palette.white};
  }

  & svg > path {
    stroke: ${Theme.palette.white};
  }
`;

export const flexColumn = css`
  display: flex;
  flex-direction: column;
`;
