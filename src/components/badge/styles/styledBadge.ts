import styled from "styled-components";
import { Badge } from "@oykos-development/devkit-react-ts-styled-components";

const StyledBadge = styled(Badge)`
  background-color: ${({ theme, variant }) =>
    variant === "success"
      ? theme?.palette?.success50
      : variant === "warning"
      ? theme?.palette?.error50
      : theme?.palette?.gray100};
`;

export default StyledBadge;
