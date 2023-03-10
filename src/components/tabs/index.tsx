import React, { useState } from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";

import { TabsContainer } from "./style/tabs-container";
import { Tab } from "./style/tab";
import { TabsProps } from "./types";

export const Tabs = ({ style, theme = Theme, tabs, renderContent }: TabsProps) => {
  const indexOFFirstEnabledTab = () => {
    const enabledTabs = tabs.filter((tab) => !tab.disabled);

    return tabs.findIndex((tab) => tab.title === enabledTabs[0].title);
  };

  const [activeTab, setActiveTab] = useState(indexOFFirstEnabledTab());

  return (
    <Container>
      <TabsContainer>
        {tabs?.map((tab, index) => {
          return (
            <Tab
              key={tab.title}
              theme={theme}
              disabled={tab.disabled}
              style={style}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </Tab>
          );
        })}
      </TabsContainer>

      {renderContent && !tabs[activeTab].disabled && renderContent(tabs[activeTab].content)}
    </Container>
  );
};
