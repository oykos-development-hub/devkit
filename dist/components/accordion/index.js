import React, { useState } from "react";
import { Container } from "./styles/container";
import { Header } from "./styles/header";
import { Content, ContentWrapper } from "./styles/content";
import { ChevronDownIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";
const AccordionItem = ({ title, content, customIcon, style, theme = Theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);
    return (React.createElement(Container, null,
        React.createElement(Header, { onClick: toggleAccordion, isOpen: isOpen, style: style, theme: theme },
            customIcon ? (React.createElement(IconWrapper, { isOpen: isOpen, style: style, theme: theme },
                customIcon,
                title)) : (title),
            React.createElement(ChevronDownIcon, null)),
        React.createElement(ContentWrapper, { isOpen: isOpen },
            React.createElement(Content, { style: style, theme: theme }, content))));
};
export const Accordion = ({ data, customIcon, style, theme }) => {
    return (React.createElement(React.Fragment, null, data.map((item, index) => (React.createElement(AccordionItem, { key: index, content: item.content, title: item.title, customIcon: customIcon, theme: theme, style: style })))));
};
//# sourceMappingURL=index.js.map