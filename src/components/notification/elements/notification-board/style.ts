import styled from "styled-components";
import { INotificationProps } from "../../types";
import { getColor, getBgColor, initialShadow } from "../shared";

export const StyledNotificationBoard = styled.div<INotificationProps>`
  font-family: ${(props) => props.fontFamily || props.theme?.fontFamily?.one || "sans-serif"};
  background-color: ${getBgColor};
  color: ${getColor};
  box-shadow: ${(props) => (props.isSnackBar ? props.boxShadow || initialShadow : "")};
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: ${(props) => props.borderRadius + "rem" || props.theme.borderRadius.md || "0.5rem"};
  padding: 0.75rem 1rem;
  min-height: 3rem;
  z-index: 999;
`;
