import React from "react";
import { Container } from "./styles/container";
export const Badge = ({ variant = "primary", content, extraContent, size = "md", style, theme }) => (React.createElement(Container, { variant: variant, size: size, style: style, theme: theme },
    React.createElement("div", { style: {
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            columnGap: "7px",
        } },
        extraContent,
        content)));
//# sourceMappingURL=index.js.map