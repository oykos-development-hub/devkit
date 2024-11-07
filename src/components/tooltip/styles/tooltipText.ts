import styled, { DefaultTheme } from "styled-components";
import { SSSTypography } from "../../typography";
import { TooltipVariants } from "@oykos-development/devkit-react-ts-styled-components";

const TooltipText = styled(SSSTypography)<{
  tooltipVariant: TooltipVariants | `${TooltipVariants}`;
  theme: DefaultTheme;
}>`
  color: ${({ theme, tooltipVariant }) => (tooltipVariant === "filled" ? theme.palette.white : theme.palette.black)};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
`;

export default TooltipText;
