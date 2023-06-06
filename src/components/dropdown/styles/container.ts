import styled from "styled-components";
import { rem } from "polished";

export const DropdownContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  & > div {
    position: relative;
  }
`;
