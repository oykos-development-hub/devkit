import styled from "styled-components";
import { SSSTypography } from "../../typography";

const BadgeLabel = styled(SSSTypography)<{ status: boolean }>`
  color: ${({ theme, status }) => (status ? theme?.palette?.success500 : theme?.palette?.warning500)};
`;

export default BadgeLabel;
