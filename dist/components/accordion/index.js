import React from "react";
import { AccordionContainer } from "./styles/container";
import { Header } from "./styles/header";
import { Content, ContentWrapper } from "./styles/content";
import { ChevronDownIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";
export const AccordionItem = ({ title, content, customHeader, customContent, style, theme = Theme, isOpen = false, toggle, }) => {
    return (React.createElement(AccordionContainer, null,
        React.createElement(Header, { isOpen: isOpen, style: style, theme: theme },
            React.createElement("div", { onClick: toggle, style: { width: "100%" } }, customHeader ? (customHeader) : (React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } },
                title,
                React.createElement(IconWrapper, { isOpen: isOpen, style: style, theme: theme },
                    React.createElement(ChevronDownIcon, null)))))),
        React.createElement(ContentWrapper, { isOpen: isOpen }, customContent ? (customContent) : (React.createElement(Content, { style: style, theme: theme }, content)))));
};
export const Accordion = ({ data, style, theme, className }) => {
    return (React.createElement("div", { className: className }, data.map((item, index) => (React.createElement(AccordionItem, { key: index, content: item.content, customHeader: item.customHeader, customContent: item.customContent, title: item.title, theme: theme, style: style })))));
};
//# sourceMappingURL=index.js.map