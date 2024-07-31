import React, { useMemo } from "react";
import { Alert } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSAlert = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(Alert, Object.assign({}, mergedProps, { style: { zIndex: "999" } }));
};
//# sourceMappingURL=index.js.map