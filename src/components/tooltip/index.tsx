import React, { useMemo } from "react";
import { Tooltip } from "@oykos-development/devkit-react-ts-styled-components";
import { SSSTooltipProps } from "./types";
import { Theme } from "../../shared/theme";
import Container from "./styles/container";
import TooltipText from "./styles/tooltipText";

export const SSSTooltip = (props: SSSTooltipProps) => {
  const mergedProps = useMemo(
    () => ({
      ...props,
      arrow: true,
      theme: Theme,
    }),
    [props],
  );

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <Container
      theme={mergedProps.theme}
      variant={mergedProps.variant}
      hasContent={!!mergedProps.content}
      className={mergedProps.className}
    >
      <Tooltip
        {...mergedProps}
        content={
          <TooltipText
            tooltipVariant={mergedProps.variant}
            variant="bodySmall"
            content={mergedProps.content}
            theme={mergedProps.theme}
          />
        }
      />
    </Container>
  );
};
