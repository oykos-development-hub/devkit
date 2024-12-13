import styled from "styled-components";
import { Theme } from "../../../shared/theme";
import { Input } from "@oykos-development/devkit-react-ts-styled-components";

export const StyledInput = styled(Input)`
  * {
    font-family: Source Sans Pro, sans-serif;
  }

  input,
  textarea {
    font-family: Source Sans Pro, sans-serif;
    border: 1px solid ${(p) => (p.error ? Theme?.palette?.error200 : Theme?.palette?.gray400)};
    font-size: 14px;
    text-align: ${({ type }) => (type === "currency" ? "right" : "left")};
    &::placeholder {
      font-family: Source Sans Pro, sans-serif;
      color: ${({ theme }) => theme.palette.gray500};
      text-align: left;
    }
  }

  & [disabled] {
    border-color: ${Theme?.palette?.gray300};
    color: ${Theme.palette.gray300};
    &::placeholder {
      color: ${Theme?.palette?.gray300};
    }
  }
`;

export const LabelWrapper = styled.div`
  display: flex;
  align-items: center;
`;
