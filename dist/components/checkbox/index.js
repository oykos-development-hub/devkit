import React, { useMemo } from "react";
import { Checkbox } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSCheckbox = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(Checkbox, Object.assign({}, mergedProps, { onClick: (e) => mergedProps.onChange(!mergedProps.checked, e) }));
};
//# sourceMappingURL=index.js.map