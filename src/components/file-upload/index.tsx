import React, { useMemo } from "react";
import { FileUpload } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSFileUploadProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSFileUpload = (props: SSSFileUploadProps) => {
  const mergedProps = useMemo(
    () => ({
      theme: Theme,
      ...props,
    }),
    [props],
  );

  return <FileUpload {...mergedProps} />;
};
