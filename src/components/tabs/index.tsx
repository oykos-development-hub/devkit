import React, { useState } from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";

import { TabsContainer } from "./style/tabs-container";
import { StyledTab } from "./style/tab";
import { Tab, TabsProps } from "./types";

export const Tabs = ({ style, theme = Theme, tabs, onChange }: TabsProps) => {
  const firstEnabledTab = () => {
    const enabledTabs = tabs.filter((tab) => !tab.disabled);

    return tabs.find((tab) => tab.id === enabledTabs[0].id);
  };

  const [activeTab, setActiveTab] = useState(firstEnabledTab);

  const handleChange = (tab: Tab) => {
    onChange && onChange(tab);
    setActiveTab(tab);
  };

  return (
    <Container>
      <TabsContainer>
        {tabs?.map((tab) => {
          return (
            <StyledTab
              key={tab.id}
              theme={theme}
              disabled={tab.disabled}
              style={style}
              active={activeTab?.id === tab.id}
              onClick={() => handleChange(tab)}
            >
              {tab.title}
            </StyledTab>
          );
        })}
      </TabsContainer>
    </Container>
  );
};
