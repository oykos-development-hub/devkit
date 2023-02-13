import styled from "styled-components";

export const Option = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div:first-child {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  & .option-icon {
    height: 1rem;
  }
`;
