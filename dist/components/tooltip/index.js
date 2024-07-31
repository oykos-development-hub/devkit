import React, { useMemo } from "react";
import { Tooltip } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import Container from "./styles/container";
import TooltipText from "./styles/tooltipText";
export const SSSTooltip = (props) => {
    const mergedProps = useMemo(() => (Object.assign(Object.assign({}, props), { arrow: true, theme: Theme })), [props]);
    return (React.createElement(Container, { theme: mergedProps.theme, variant: mergedProps.variant, hasContent: !!mergedProps.content, className: mergedProps.className },
        React.createElement(Tooltip, Object.assign({}, mergedProps, { content: React.createElement(TooltipText, { tooltipVariant: mergedProps.variant, variant: "bodySmall", content: mergedProps.content, theme: mergedProps.theme }) }))));
};
//# sourceMappingURL=index.js.map