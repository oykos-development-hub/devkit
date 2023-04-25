import React, { useState } from "react";
import { AccordionContainer } from "./styles/container";
import { Header } from "./styles/header";
import { Content, ContentWrapper } from "./styles/content";
import { ChevronDownIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";
const AccordionItem = ({ title, content, customIcon, rightCustomIcon, style, theme = Theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);
    const openMenu = () => { console.log('Clicked additional icon on right side.'); };
    return (React.createElement(AccordionContainer, null,
        React.createElement(Header, { isOpen: isOpen, style: style, theme: theme },
            React.createElement("div", { onClick: toggleAccordion, style: { display: "flex", justifyContent: "space-between", flexGrow: "1" } },
                customIcon ? (React.createElement(IconWrapper, { isOpen: isOpen, style: style, theme: theme },
                    customIcon,
                    title)) : (title),
                React.createElement(IconWrapper, { isOpen: isOpen, style: style, theme: theme },
                    React.createElement(ChevronDownIcon, null))),
            React.createElement("div", { onClick: openMenu }, rightCustomIcon && rightCustomIcon)),
        React.createElement(ContentWrapper, { isOpen: isOpen },
            React.createElement(Content, { style: style, theme: theme }, content))));
};
export const Accordion = ({ data, customIcon, rightCustomIcon, style, theme }) => {
    return (React.createElement(React.Fragment, null, data.map((item, index) => (React.createElement(AccordionItem, { key: index, content: item.content, title: item.title, customIcon: customIcon, rightCustomIcon: rightCustomIcon, theme: theme, style: style })))));
};
//# sourceMappingURL=index.js.map