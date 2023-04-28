import React, { useState } from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { Link } from "./style/link";
export const Breadcrumbs = ({ theme = Theme, onClick, items, separator, style, className }) => {
    const [links, setLinks] = useState(items);
    return (React.createElement(Container, { theme: theme, style: style, className: className }, links === null || links === void 0 ? void 0 : links.map((item) => {
        const isLastItem = links.indexOf(item) === links.length - 1;
        const handleLinkClick = (e) => {
            e.preventDefault();
            const newLinks = links === null || links === void 0 ? void 0 : links.splice(0, links.indexOf(item) + 1);
            setLinks(newLinks);
            if (onClick)
                onClick(e);
        };
        return (React.createElement("li", { key: item.name },
            React.createElement(Link, { href: item.to, theme: theme, className: isLastItem ? "active" : "", onClick: handleLinkClick },
                item.icon,
                item.name),
            !isLastItem && separator));
    })));
};
//# sourceMappingURL=index.js.map