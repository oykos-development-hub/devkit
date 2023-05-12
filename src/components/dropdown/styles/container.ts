import styled from "styled-components";
import { rem } from "polished";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  & > div {
    position: relative;
  }
`;
