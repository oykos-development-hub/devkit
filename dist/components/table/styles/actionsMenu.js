import { Theme } from "@oykos-development/devkit-react-ts-styled-components";
import styled from "styled-components";
export const Menu = styled.ul `
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${Theme.palette.gray100};
  background-color: ${Theme.palette.white};
  overflow: hidden;
  min-width: 178px;
  right: 30px;
  top: -10px;
  list-style-type: none;
  padding: 0;
  z-index: 100;
`;
export const MenuItem = styled.li `
  padding: 14px;
  transition: background-color 0.2s;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

  & > p {
    color: ${({ disabled }) => (disabled ? Theme.palette.gray300 : Theme.palette.gray700)};
  }

  &:hover {
    background-color: ${({ disabled }) => (disabled ? Theme.palette.white : Theme.palette.gray50)};
  }
`;
//# sourceMappingURL=actionsMenu.js.map