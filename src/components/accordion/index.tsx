import React, { useState } from "react";
import { AccordionData, AccordionProps } from "./types";
import { AccordionContainer } from "./styles/container";
import { Header } from "./styles/header";
import { Content, ContentWrapper } from "./styles/content";
import { ChevronDownIcon } from "../icon";
import { Theme } from "../../shared/theme";
import { IconWrapper } from "./styles/iconWrapper";

export const AccordionItem: React.FC<AccordionData> = ({
  title,
  content,
  customHeader,
  customContent,
  style,
  theme = Theme,
  isOpen = false,
  toggle,
}) => {
  return (
    <AccordionContainer>
      <Header isOpen={isOpen} style={style} theme={theme}>
        <div onClick={toggle} style={{ width: "100%" }}>
          {customHeader ? (
            customHeader
          ) : (
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              {title}
              <IconWrapper isOpen={isOpen} style={style} theme={theme}>
                <ChevronDownIcon />
              </IconWrapper>
            </div>
          )}
        </div>
      </Header>

      <ContentWrapper isOpen={isOpen}>
        {customContent ? (
          customContent
        ) : (
          <Content style={style} theme={theme}>
            {content}
          </Content>
        )}
      </ContentWrapper>
    </AccordionContainer>
  );
};

export const Accordion: React.FC<AccordionProps> = ({ data, style, theme, className }) => {
  return (
    <div className={className}>
      {data.map((item: AccordionData, index) => (
        <AccordionItem
          key={index}
          content={item.content}
          customHeader={item.customHeader}
          customContent={item.customContent}
          title={item.title}
          theme={theme}
          style={style}
        />
      ))}
    </div>
  );
};
