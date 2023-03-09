import React, { useState } from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";

import { TabsContainer } from "./style/tabs-container";
import { Tab } from "./style/tab";
import { TabsProps } from "./types";

export const Tabs = ({ style, theme = Theme, disabledTabs, tabs, renderContent }: TabsProps) => {
  const indexOFFirstEnabledTab = () => {
    const enabledTabs = tabs.filter((tab) => !disabledTabs?.find((disabledTab) => disabledTab === tab.title));

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
              disabled={!!disabledTabs?.find((disabledTab) => disabledTab === tab.title)}
              style={style}
              active={activeTab === index}
              onClick={() => setActiveTab(index)}
            >
              {tab.title}
            </Tab>
          );
        })}
      </TabsContainer>

      {renderContent &&
        !disabledTabs?.find((disabledTab) => disabledTab === tabs[activeTab].title) &&
        renderContent(tabs[activeTab].content)}
    </Container>
  );
};
