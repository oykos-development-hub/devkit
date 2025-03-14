import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { ButtonContainer, ButtonContent } from "@oykos-development/devkit-react-ts-styled-components";
export const SecondaryButtonContainer = styled.div `
  ${ButtonContainer} {
    background-color: ${Theme.palette.white};
  }
  ${ButtonContent} {
    color: ${Theme.palette.primary500};
  }
  &:hover ${ButtonContent} > * {
    color: ${Theme.palette.white} !important;
  }
`;
//# sourceMappingURL=secondaryButtonContainer.js.map