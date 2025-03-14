import styled from "styled-components";
import { Typography } from "../../typography";

export const ErrorText = styled(Typography)`
  color: ${({ theme }) => theme.palette.error500};
  font-size: 12px;
`;
