import React, { useMemo } from "react";
import { Theme } from "../../shared/theme";
import StyledBadge from "./styles/styledBadge";
export const SSSBadge = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(StyledBadge, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map