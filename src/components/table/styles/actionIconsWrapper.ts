import { Theme } from "@oykos-development/devkit-react-ts-styled-components";
import styled from "styled-components";

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  float: right;
  position: relative;
`;

export const IconContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    padding: 5px;
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

    & > * {
      stroke: ${({ disabled }) => (disabled ? Theme?.palette?.gray300 : Theme?.palette?.gray700)};
    }

    height: 17px;

    :hover {
      background-color: ${({ disabled }) => (disabled ? "none" : Theme?.palette?.gray100)};
    }
  }
`;
