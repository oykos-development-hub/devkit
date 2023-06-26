import React from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { Link } from "./style/link";
export const Breadcrumbs = ({ theme = Theme, onClick, items, separator, style, className }) => {
    return (React.createElement(Container, { style: style, className: className }, items === null || items === void 0 ? void 0 : items.map((item) => {
        const isLastItem = items.indexOf(item) === items.length - 1;
        const handleLinkClick = (e) => {
            if (onClick) {
                onClick(e, item);
            }
        };
        return (React.createElement("li", { key: item.name },
            React.createElement(Link, { href: item.to, theme: theme, className: isLastItem ? "active" : "", onClick: handleLinkClick },
                item.icon,
                item.name),
            !isLastItem && separator));
    })));
};
//# sourceMappingURL=index.js.map