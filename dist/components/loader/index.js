import React from "react";
import CircleLoader from "./circleLoader";
import { Theme } from "../../shared/theme";
const sizes = {
    sm: "24px",
    md: "48px",
    lg: "96px",
};
export const SSSLoader = (props) => {
    const { width, height, size, color } = props;
    const resolvedWidth = size ? sizes[size] : width ? (typeof width === "string" ? width : `${width}px`) : sizes["md"];
    const resolvedHeight = size
        ? sizes[size]
        : height
            ? typeof height === "string"
                ? height
                : `${height}px`
            : sizes["md"];
    return React.createElement(CircleLoader, { width: resolvedWidth, height: resolvedHeight, color: color !== null && color !== void 0 ? color : Theme.palette.primary500 });
};
//# sourceMappingURL=index.js.map