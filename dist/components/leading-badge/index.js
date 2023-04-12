import React from "react";
import { Container } from "./styles/container";
import { Badge } from "../badge";
export const LeadingBadge = ({ variant = "primary", content, badgeContent, size = "md", style, leadingBadgeTheme = "light", theme, }) => (React.createElement(Container, { variant: variant, size: size, style: style, leadingBadgeTheme: leadingBadgeTheme, theme: theme },
    React.createElement(Badge, { variant: variant, size: size, content: badgeContent, style: style, theme: theme }),
    content));
//# sourceMappingURL=index.js.map