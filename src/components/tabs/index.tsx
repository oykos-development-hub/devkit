import React from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";

import { TabsContainer } from "./style/tabs-container";
import { StyledTab } from "./style/tab";
import { TabsProps } from "./types";

export const Tabs = ({ style, theme = Theme, tabs, onChange, className, activeTab }: TabsProps) => {
  return (
    <Container className={className}>
      <TabsContainer>
        {tabs?.map((tab) => {
          return (
            <StyledTab
              key={tab.id}
              theme={theme}
              disabled={tab.disabled}
              style={style}
              active={activeTab === tab.id}
              onClick={() => onChange(tab)}
            >
              {tab.title}
            </StyledTab>
          );
        })}
      </TabsContainer>
    </Container>
  );
};
