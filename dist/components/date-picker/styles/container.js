import styled, { css } from "styled-components";
const DisabledInputStyle = css `
  &:disabled {
    color: ${({ theme }) => theme.palette.gray300};
    border-color: ${({ theme }) => theme.palette.gray300};

    &:active,
    &:focus-within {
      box-shadow: none;
      border-color: ${({ theme }) => theme.palette.gray300};
    }

    &::placeholder {
      color: ${({ theme }) => theme.palette.gray300};
    }
  }
`;
export const Container = styled.div `
  .react-datepicker {
    font-family: Source Sans Pro, sans-serif;
    width: 100%;

    &__current-month {
      margin-top: 0.675rem;
    }
  }

  & svg {
    top: unset;
    right: unset;
    width: auto;
  }

  & input {
    font-family: Source Sans Pro, sans-serif;
    font-size: 14px;
    color: ${({ theme }) => theme.palette.gray900};
    border: 1px solid ${({ error, theme }) => (error ? theme.palette.error200 : theme.palette.gray400)};

    &::placeholder {
      font-family: Source Sans Pro, sans-serif;
      font-size: 14px;
    }

    &:active,
    &:focus-within {
      line-height: 1.25em;
      font-size: 0.875rem;
      border: 1px solid ${({ error, theme }) => (error ? theme.palette.error500 : theme.palette.primary200)};
      box-shadow: ${({ error, theme }) => `0 1px 2px rgba(16, 24, 40, 0.05), 0 0 0 4px ${error ? theme.palette.error50 : theme.palette.primary50}`};
    }

    ${DisabledInputStyle}
  }

  ${({ disabled, theme }) => disabled &&
    `
      & svg > path {
        stroke: ${theme.palette.gray200} !important;
      }

      p {
        color: ${theme.palette.gray200} !important; 
      }
    `}

  & svg > path {
    stroke: ${({ theme, error }) => (error ? theme.palette.error500 : theme.palette.gray900)};
  }

  .react-datepicker__day--in-range {
    background-color: ${({ theme }) => theme.palette.primary50};
    color: ${({ theme }) => theme.palette.gray700};

    &.react-datepicker__day--selected {
      background-color: ${({ theme }) => theme.palette.primary500};
      color: ${({ theme }) => theme.palette.white};
    }
  }

  .react-datepicker__day--in-selecting-range:not(
      .react-datepicker__day--in-range,
      .react-datepicker__month-text--in-range,
      .react-datepicker__quarter-text--in-range,
      .react-datepicker__year-text--in-range,
      .react-datepicker__day--selected
    ) {
    background-color: ${({ theme }) => theme.palette.primary50};
    color: ${({ theme }) => theme.palette.gray700};
  }
`;
//# sourceMappingURL=container.js.map