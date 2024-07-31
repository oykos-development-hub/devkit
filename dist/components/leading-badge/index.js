import React, { useMemo } from "react";
import { LeadingBadge } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSLeadingBadge = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(LeadingBadge, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map