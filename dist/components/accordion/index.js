import React, { useMemo } from "react";
import { AccordionItem } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export const SSSAccordion = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return React.createElement(AccordionItem, Object.assign({}, mergedProps));
};
//# sourceMappingURL=index.js.map