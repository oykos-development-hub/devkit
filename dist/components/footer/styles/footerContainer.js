import styled from "styled-components";
import { Theme } from "../../../shared/theme";
export const FooterContainer = styled.div `
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: ${(props) => { var _a; return ((_a = props.style) === null || _a === void 0 ? void 0 : _a.backgroundColor) ? props.style.backgroundColor : Theme.palette.gray200; }};
    padding-bottom: 18px;
    padding-top: 15px;
    position: absolute;
    width: 100%;
    max-height: 57px;
    left: 0px;
    bottom: 0px;
  }
`;
//# sourceMappingURL=footerContainer.js.map