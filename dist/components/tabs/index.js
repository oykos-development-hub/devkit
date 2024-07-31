import React, { useMemo } from "react";
import { Tabs } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSTabs = (props) => {
    const mergedProps = useMemo(() => (Object.assign(Object.assign({}, props), { theme: Theme })), [props]);
    return React.createElement(Tabs, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map