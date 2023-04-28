import React, { useState } from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { TabsContainer } from "./style/tabs-container";
import { StyledTab } from "./style/tab";
export const Tabs = ({ style, theme = Theme, tabs, onChange, className }) => {
    const firstEnabledTab = () => {
        const enabledTabs = tabs.filter((tab) => !tab.disabled);
        return tabs.find((tab) => tab.id === enabledTabs[0].id);
    };
    const [activeTab, setActiveTab] = useState(firstEnabledTab);
    const handleChange = (tab) => {
        onChange && onChange(tab);
        setActiveTab(tab);
    };
    return (React.createElement(Container, { className: className },
        React.createElement(TabsContainer, null, tabs === null || tabs === void 0 ? void 0 : tabs.map((tab) => {
            return (React.createElement(StyledTab, { key: tab.id, theme: theme, disabled: tab.disabled, style: style, active: (activeTab === null || activeTab === void 0 ? void 0 : activeTab.id) === tab.id, onClick: () => handleChange(tab) }, tab.title));
        }))));
};
//# sourceMappingURL=index.js.map