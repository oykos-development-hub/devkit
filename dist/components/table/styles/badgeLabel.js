import styled from "styled-components";
import { SSSTypography } from "../../typography";
const BadgeLabel = styled(SSSTypography) `
  color: ${({ theme, status }) => { var _a, _b; return (status ? (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.success500 : (_b = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _b === void 0 ? void 0 : _b.warning500); }};
`;
export default BadgeLabel;
//# sourceMappingURL=badgeLabel.js.map