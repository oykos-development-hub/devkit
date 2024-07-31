import React, { useMemo } from "react";
import { Theme } from "../../shared/theme";
import { StyledButton } from "./styles/styledButton";
import CircleLoader from "../loader/circleLoader";
export const SSSButton = (props) => {
    const mergedProps = useMemo(() => (Object.assign({ theme: Theme }, props)), [props]);
    return (React.createElement(StyledButton, Object.assign({}, mergedProps, { loader: React.createElement(CircleLoader, { width: "16px", height: "16px", color: mergedProps.variant === "primary" ? Theme.palette.white : Theme.palette.primary500 }) })));
};
//# sourceMappingURL=index.js.map