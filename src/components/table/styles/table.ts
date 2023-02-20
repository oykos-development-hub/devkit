import styled, { css, CSSProperties, DefaultTheme } from "styled-components";

export const StyledTable = styled.table<{ theme: DefaultTheme; style?: CSSProperties }>(({ theme, style }) => {
  const { gray300 } = theme.palette;

  return css`
    width: 100%;
    border-collapse: collapse;

    & thead {
      & th {
        padding: 1rem;
        font-size: 12px;
        font-weight: normal;
      }

      & div {
        display: flex;
        gap: 0.5em;
        align-items: center;
      }
    }

    & tbody {
      & td {
        height: 4.5rem;
        box-sizing: border-box;
        padding: 1rem;
        font-size: 14px;
      }

      & tr:last-child {
        border-bottom: 0;
      }
    }

    & tr {
      border-bottom: 1px solid ${gray300};
    }

    ${{ ...style }};
  `;
});
