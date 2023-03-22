import styled from "styled-components";
import { rotation } from "../../shared/animations/rotation";
export const One = styled.div `
  width: ${(props) => props.width || "80px"};
  height: ${(props) => props.width || "80px"};
  border: ${(props) => { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.md) || "3px"; }} solid;
  border-color: ${(props) => { var _a, _b; return props.primaryColor || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.primary500) || "red"; }};
  border-radius: ${(props) => { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderRadius) === null || _b === void 0 ? void 0 : _b.full) || "50%"; }};
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${rotation};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${(props) => props.secondaryWidth || "100px"};
    height: ${(props) => props.secondaryHeight || "100px"};
    border-radius: ${(props) => { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderRadius) === null || _b === void 0 ? void 0 : _b.full) || "50%"; }};
    border: ${(props) => { var _a, _b; return ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.borderWidth) === null || _b === void 0 ? void 0 : _b.md) || "3px"; }} solid;
    border-color: ${(props) => { var _a, _b; return props.secondaryColor || ((_b = (_a = props.theme) === null || _a === void 0 ? void 0 : _a.palette) === null || _b === void 0 ? void 0 : _b.error500) || "green"; }}
      transparent;
  }
`;
//# sourceMappingURL=one.js.map