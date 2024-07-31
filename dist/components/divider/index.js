import React, { useMemo } from "react";
import { Divider } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSDivider = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(Divider, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map