import styled from "styled-components";
import { Theme } from "../../../shared/theme";

export const BackButton = styled.button`
  all: unset;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  position: absolute;
  bottom: 30px;
  left: 12px;
  cursor: pointer;
  z-index: 10;

  path {
    fill: ${Theme.palette.white};
    stroke: ${Theme.palette.gray900};
  }
`;
