import styled from "styled-components";
import { RangeDatePickerProps } from "../types";

export const DatePickerWrapper = styled.div<RangeDatePickerProps>`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  cursor: pointer;
  width: ${(props) => props.styleWrapper?.width || "fit-content"};
  height: ${(props) => props.styleWrapper?.height || "fit-content"};
  justify-content: center;
  margin: ${(props) => props.styleWrapper?.margin || "0em"};
  min-width: fit-content;
  padding: ${(props) => props.styleWrapper?.padding || "0em"};
  position: ${(props) => props.styleWrapper?.position || "relative"};
  top: ${(props) => props.styleWrapper?.top || "0em"};
  gap: ${(props) => props.styleWrapper?.gap || "0em"};
`;
