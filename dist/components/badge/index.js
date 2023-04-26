import React from "react";
import { Container } from "./styles/container";
export const Badge = ({ variant = "primary", content, leftSlot, rightSlot, size = "md", style, theme, }) => (React.createElement(Container, { variant: variant, size: size, style: style, theme: theme },
    React.createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
        } },
        leftSlot && React.createElement("div", { style: { marginRight: "7px", display: "flex" } }, leftSlot),
        React.createElement("div", null, content),
        rightSlot && React.createElement("div", { style: { marginLeft: "7px", display: "flex" } }, rightSlot))));
//# sourceMappingURL=index.js.map