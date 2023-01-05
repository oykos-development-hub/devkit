import styled from "styled-components";
import { InputProps } from "../types";
import { wrapperStyles } from "./shared/wrapper-styles";

export const StyledMainWrapper = styled.div<InputProps>`
  ${wrapperStyles}
`;
