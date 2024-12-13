import { Theme } from "@oykos-development/devkit-react-ts-styled-components";
import styled from "styled-components";
export const ActionsWrapper = styled.div `
  display: flex;
  align-items: center;
  gap: 10px;
  float: right;
  position: relative;
`;
export const IconContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    padding: 5px;
    border-radius: 8px;
    cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};

    & > * {
      stroke: ${({ disabled }) => { var _a, _b; return (disabled ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray700); }};
    }

    height: 17px;

    :hover {
      background-color: ${({ disabled }) => { var _a; return (disabled ? "none" : (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray100); }};
    }
  }
`;
//# sourceMappingURL=actionIconsWrapper.js.map