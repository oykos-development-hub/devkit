import styled from "styled-components";
import { Badge } from "@oykos-development/devkit-react-ts-styled-components";
const StyledBadge = styled(Badge) `
  background-color: ${({ theme, variant }) => {
    var _a, _b, _c;
    return variant === "success"
        ? (_a = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _a === void 0 ? void 0 : _a.success50
        : variant === "warning"
            ? (_b = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _b === void 0 ? void 0 : _b.error50
            : (_c = theme === null || theme === void 0 ? void 0 : theme.palette) === null || _c === void 0 ? void 0 : _c.gray100;
}};
`;
export default StyledBadge;
//# sourceMappingURL=styledBadge.js.map