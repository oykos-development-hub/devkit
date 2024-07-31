import { PaginationProps } from "@oykos-development/devkit-react-ts-styled-components/dist";
import { ReactNode } from "react";
export type SSSPaginationProps = Omit<PaginationProps, "previousLabel" | "nextLabel"> & {
    previousLabel?: ReactNode;
    nextLabel?: ReactNode;
};
