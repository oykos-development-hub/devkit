import React from "react";
import { Container } from "./styles/container";
import { Theme } from "../../shared/theme";
export const Divider = ({ width, height, color, style, theme = Theme, className }) => {
    return React.createElement(Container, { width: width, height: height, color: color, style: style, theme: theme, className: className });
};
//# sourceMappingURL=index.js.map