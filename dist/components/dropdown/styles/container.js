import styled from "styled-components";
import { rem } from "polished";
export const Container = styled.div `
  display: flex;
  flex-direction: column;
  gap: ${rem("6px")};

  & > div {
    position: relative;
  }
`;
//# sourceMappingURL=container.js.map