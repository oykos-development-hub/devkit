var _a, _b;
import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { Input } from "@oykos-development/devkit-react-ts-styled-components";
export const StyledInput = styled(Input) `
  * {
    font-family: Source Sans Pro, sans-serif;
  }

  input,
  textarea {
    font-family: Source Sans Pro, sans-serif;
    border: 1px solid ${(p) => { var _a, _b; return (p.error ? (_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.error200 : (_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray400); }};
    font-size: 14px;
    text-align: ${({ type }) => (type === "currency" ? "right" : "left")};
    &::placeholder {
      font-family: Source Sans Pro, sans-serif;
      color: ${({ theme }) => theme.palette.gray500};
    }
  }

  & [disabled] {
    border-color: ${(_a = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _a === void 0 ? void 0 : _a.gray300};
    color: ${Theme.palette.gray300};
    &::placeholder {
      color: ${(_b = Theme === null || Theme === void 0 ? void 0 : Theme.palette) === null || _b === void 0 ? void 0 : _b.gray300};
    }
  }
`;
export const LabelWrapper = styled.div `
  display: flex;
  align-items: center;
`;
//# sourceMappingURL=styledInput.js.map