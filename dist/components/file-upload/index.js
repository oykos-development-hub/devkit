import React, { useMemo } from "react";
import { FileUpload } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSFileUpload = (props) => {
    const mergedProps = useMemo(() => {
        const defaultProps = {
            layout: 'vertical',
        };
        const merged = Object.assign(Object.assign({ theme: Theme }, defaultProps), props);
        const existingStyle = merged.style || {};
        merged.style = Object.assign(Object.assign({}, existingStyle), { display: 'flex', flexDirection: merged.layout === 'vertical' ? 'column' : 'row' });
        return merged;
    }, [props]);
    return React.createElement(FileUpload, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map