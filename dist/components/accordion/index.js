import React, { useState } from "react";
import { Container } from "./styles/container";
import { Header } from "./styles/header";
import { Content } from "./styles/content";
import { ChevronUpIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { animated, useSpring } from "react-spring";
const AccordionItem = ({ title, content, customIcon, style, theme = Theme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleAccordion = () => setIsOpen(!isOpen);
    const contentAnimation = useSpring({
        height: isOpen ? "auto" : "0",
        opacity: isOpen ? 1 : 0,
        transform: isOpen ? "translateY(0)" : "translateY(-6px)",
        overflow: "hidden",
    });
    return (React.createElement(Container, null,
        React.createElement(Header, { onClick: toggleAccordion, isOpen: isOpen, style: style, theme: theme },
            title,
            customIcon ? customIcon : React.createElement(ChevronUpIcon, null)),
        isOpen && (React.createElement(animated.div, { style: contentAnimation },
            React.createElement(Content, { style: style }, content)))));
};
export const Accordion = ({ data, customIcon, style, theme }) => {
    return (React.createElement(React.Fragment, null, data.map((item, index) => (React.createElement(AccordionItem, { key: index, content: item.content, title: item.title, customIcon: customIcon, theme: theme, style: style })))));
};
//# sourceMappingURL=index.js.map