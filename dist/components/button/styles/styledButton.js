import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { Button, ButtonContent } from "@oykos-development/devkit-react-ts-styled-components";
export const StyledButton = styled(Button) `
  background-color: ${(p) => p.disabled ? Theme.palette.gray200 : p.variant === "primary" ? Theme.palette.primary500 : Theme.palette.white};
  border-color: ${(p) => (p.disabled ? Theme.palette.gray300 : p.variant === "secondary" && Theme.palette.primary500)};

  &:hover {
    background-color: ${Theme.palette.primary800} !important;

    ${ButtonContent} > * {
      background-color: ${Theme.palette.primary800};
      color: ${Theme.palette.white};
    }
  }

  ${ButtonContent} {
    color: ${(p) => p.disabled ? Theme.palette.gray300 : p.variant === "primary" ? Theme.palette.white : Theme.palette.primary500};
    > * {
      color: ${(p) => p.disabled ? Theme.palette.gray300 : p.variant === "primary" ? Theme.palette.white : Theme.palette.primary500};
    }
  }
  pointer-events: ${(p) => p.disabled && "none"};
`;
//# sourceMappingURL=styledButton.js.map