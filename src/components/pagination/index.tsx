import React, { FC, useMemo } from "react";
import { SSSPaginationProps } from "./types";
import { Theme } from "../../shared/theme";
import { StyledPagination } from "./styles/customStyledPagination";

export const SSSPagination: FC<SSSPaginationProps> = (props) => {
  const mergedProps = useMemo(
    () => ({
      ...props,
      theme: Theme,
      previousLabel: "Prethodna",
      nextLabel: "Sljedeća",
    }),
    [props],
  );

  return <StyledPagination {...mergedProps} />;
};
