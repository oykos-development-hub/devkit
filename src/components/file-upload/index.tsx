import React, { useMemo } from "react";
import { FileUpload } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSFileUploadProps } from "./types";
import { Theme } from "../../shared/theme";

export const SSSFileUpload = (props: SSSFileUploadProps) => {
  const mergedProps = useMemo(() => {
    const defaultProps: Pick<SSSFileUploadProps, 'layout'> = {
      layout: 'vertical', 
    };

    const merged = {
      theme: Theme,
      ...defaultProps,
      ...props,
    };

    const existingStyle = merged.style || {};
    merged.style = {
      ...existingStyle,
      display: 'flex',
      flexDirection: merged.layout === 'vertical' ? 'column' : 'row',
    };

    return merged;
  }, [props]);

  return <FileUpload {...mergedProps} />;
};
