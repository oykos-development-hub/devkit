import styled from "styled-components";
import { SSSTypography } from "../../typography";
import { Theme } from "../../../shared/theme";
export const EmptyMessageText = styled(SSSTypography) `
  color: ${Theme.palette.gray300};
`;
const EmptyMessage = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 200px;

  & > svg {
    width: 30px;
    margin-bottom: 12px;

    & > path {
      stroke: ${Theme.palette.gray300};
    }
  }
`;
export default EmptyMessage;
//# sourceMappingURL=emptyMessage.js.map