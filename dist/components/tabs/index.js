import React, { useState } from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { TabsContainer } from "./style/tabs-container";
import { Tab } from "./style/tab";
export const Tabs = ({ style, theme = Theme, disabledTabs, tabs, renderContent }) => {
    const indexOFFirstEnabledTab = () => {
        const enabledTabs = tabs.filter((tab) => !(disabledTabs === null || disabledTabs === void 0 ? void 0 : disabledTabs.find((disabledTab) => disabledTab === tab.title)));
        return tabs.findIndex((tab) => tab.title === enabledTabs[0].title);
    };
    const [activeTab, setActiveTab] = useState(indexOFFirstEnabledTab());
    return (React.createElement(Container, null,
        React.createElement(TabsContainer, null, tabs === null || tabs === void 0 ? void 0 : tabs.map((tab, index) => {
            return (React.createElement(Tab, { key: tab.title, theme: theme, disabled: !!(disabledTabs === null || disabledTabs === void 0 ? void 0 : disabledTabs.find((disabledTab) => disabledTab === tab.title)), style: style, active: activeTab === index, onClick: () => setActiveTab(index) }, tab.title));
        })),
        renderContent &&
            !(disabledTabs === null || disabledTabs === void 0 ? void 0 : disabledTabs.find((disabledTab) => disabledTab === tabs[activeTab].title)) &&
            renderContent(tabs[activeTab].content)));
};
//# sourceMappingURL=index.js.map