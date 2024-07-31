import React, { useMemo } from "react";
import { Breadcrumbs, ChevronRightIcon } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSBreadcrumbs = (props) => {
    const mergedProps = useMemo(() => (Object.assign(Object.assign({}, props), { theme: Theme })), [props]);
    const { gray900 } = mergedProps.theme.palette;
    return React.createElement(Breadcrumbs, Object.assign({}, mergedProps, { separator: React.createElement(ChevronRightIcon, { stroke: gray900 || "#000" }) }));
};
//# sourceMappingURL=index.js.map