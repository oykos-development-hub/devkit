import React, { useState } from "react";
import { AccordionData, AccordionProps } from "./types";
import { Container } from "./styles/container";
import { Header } from "./styles/header";
import { Content } from "./styles/content";
import { ChevronUpIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { animated, useSpring } from "react-spring";

const AccordionItem: React.FC<AccordionData> = ({ title, content, customIcon, style, theme = Theme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  const contentAnimation = useSpring({
    height: isOpen ? "auto" : "0",
    opacity: isOpen ? 1 : 0,
    transform: isOpen ? "translateY(0)" : "translateY(-6px)",
    overflow: "hidden",
  });

  return (
    <Container>
      <Header onClick={toggleAccordion} isOpen={isOpen} style={style} theme={theme}>
        {title}
        {customIcon ? customIcon : <ChevronUpIcon />}
      </Header>
      {isOpen && (
        <animated.div style={contentAnimation}>
          <Content style={style}>{content}</Content>
        </animated.div>
      )}
    </Container>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ data, customIcon, style, theme }) => {
  return (
    <>
      {data.map((item: AccordionData, index) => (
        <AccordionItem
          key={index}
          content={item.content}
          title={item.title}
          customIcon={customIcon}
          theme={theme}
          style={style}
        />
      ))}
    </>
  );
};
