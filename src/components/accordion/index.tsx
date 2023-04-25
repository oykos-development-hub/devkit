import React, { useState } from "react";
import { AccordionData, AccordionProps } from "./types";
import { AccordionContainer } from "./styles/container";
import { Header } from "./styles/header";
import { Content, ContentWrapper } from "./styles/content";
import { ChevronDownIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";

const AccordionItem: React.FC<AccordionData> = ({
  title,
  content,
  customIcon,
  rightCustomIcon,
  style,
  theme = Theme,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleAccordion = () => setIsOpen(!isOpen);
  const openMenu = () => {
    console.log("Clicked additional icon on right side.");
  };

  return (
    <AccordionContainer>
      <Header isOpen={isOpen} style={style} theme={theme}>
        <div onClick={toggleAccordion} style={{ display: "flex", justifyContent: "space-between", flexGrow: "1" }}>
          {customIcon ? (
            <IconWrapper isOpen={isOpen} style={style} theme={theme}>
              {customIcon}
              {title}
            </IconWrapper>
          ) : (
            title
          )}
          <IconWrapper isOpen={isOpen} style={style} theme={theme}>
            <ChevronDownIcon />
          </IconWrapper>
        </div>
        <div onClick={openMenu}>{rightCustomIcon && rightCustomIcon}</div>
      </Header>

      <ContentWrapper isOpen={isOpen}>
        <Content style={style} theme={theme}>
          {content}
        </Content>
      </ContentWrapper>
    </AccordionContainer>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ data, customIcon, rightCustomIcon, style, theme }) => {
  return (
    <>
      {data.map((item: AccordionData, index) => (
        <AccordionItem
          key={index}
          content={item.content}
          title={item.title}
          customIcon={customIcon}
          rightCustomIcon={rightCustomIcon}
          theme={theme}
          style={style}
        />
      ))}
    </>
  );
};
