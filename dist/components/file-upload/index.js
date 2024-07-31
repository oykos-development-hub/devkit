import React, { useMemo } from "react";
import { FileUpload } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSFileUpload = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(FileUpload, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map