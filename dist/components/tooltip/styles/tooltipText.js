import styled from "styled-components";
import { SSSTypography } from "../../typography";
const TooltipText = styled(SSSTypography) `
  color: ${({ theme, tooltipVariant }) => (tooltipVariant === "filled" ? theme.palette.white : theme.palette.black)};
  font-size: 0.75rem;
  display: flex;
  align-items: center;
`;
export default TooltipText;
//# sourceMappingURL=tooltipText.js.map