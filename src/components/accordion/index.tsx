import React, { useState } from "react";
import { AccordionData, AccordionProps } from "./types";
import { Container } from "./styles/container";
import { Header } from "./styles/header";
import { Content } from "./styles/content";
import { ChevronUpIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";

const AccordionItem: React.FC<AccordionData> = ({ title, content, customIcon, style, theme = Theme }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAccordion = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Header onClick={toggleAccordion} isOpen={isOpen} style={style} theme={theme}>
        {customIcon ? (
          <IconWrapper isOpen={isOpen} style={style} theme={theme}>
            {customIcon}
            {title}
          </IconWrapper>
        ) : (
          title
        )}
        <ChevronUpIcon />
      </Header>

      <Content isOpen={isOpen} style={style} theme={theme}>
        {content}
      </Content>
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
