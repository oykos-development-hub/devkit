import React from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./styles/container";
import { NoDataElement } from "./styles/noDataElement";
import { StyledTable } from "./styles/table";
import { TableProps } from "./types";

export const Table = ({
  theme = Theme,
  style,
  headerContent,
  bodyContent,
  titleElement,
  noDataMessage,
}: TableProps) => {
  return (
    <Container theme={theme}>
      {titleElement && titleElement}

      <StyledTable theme={theme} style={style}>
        <thead>{headerContent && headerContent}</thead>

        <tbody>{bodyContent && bodyContent}</tbody>
      </StyledTable>

      {!bodyContent && noDataMessage && <NoDataElement>{noDataMessage}</NoDataElement>}
    </Container>
  );
};
