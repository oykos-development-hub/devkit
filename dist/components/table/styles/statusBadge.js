import styled from "styled-components";
import { SSSTypography } from "../../typography";
const BadgeLabel = styled(SSSTypography) `
  color: ${({ theme, status }) => (status ? theme.palette.success500 : theme.palette.warning500)};
`;
export default BadgeLabel;
//# sourceMappingURL=statusBadge.js.map