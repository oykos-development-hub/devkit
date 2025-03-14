import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { ButtonContainer, ButtonContent } from "@oykos-development/devkit-react-ts-styled-components";
export const SSSButtonContainer = styled.div `
  ${ButtonContainer} {
    background-color: ${(p) => (p.variant === "primary" ? Theme.palette.primary500 : Theme.palette.white)};
    border-color: ${(p) => p.variant === "secondary" && Theme.palette.primary500};
    &:hover {
      background-color: ${Theme.palette.primary800};
    }
  }
  ${ButtonContent} {
    color: ${(p) => (p.variant === "primary" ? Theme.palette.white : Theme.palette.primary500)};
    > * {
      color: ${(p) => (p.variant === "primary" ? Theme.palette.white : Theme.palette.primary500)};
    }
  }
  &:hover ${ButtonContent} > * {
    color: ${Theme.palette.white};
  }
`;
//# sourceMappingURL=SSSButtonContainer.js.map