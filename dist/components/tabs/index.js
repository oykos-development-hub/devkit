import React from "react";
import { Theme } from "../../shared/theme";
import { Container } from "./style/container";
import { TabsContainer } from "./style/tabs-container";
import { StyledTab } from "./style/tab";
export const Tabs = ({ style, theme = Theme, tabs, onChange, className, activeTab }) => {
    return (React.createElement(Container, { className: className },
        React.createElement(TabsContainer, null, tabs === null || tabs === void 0 ? void 0 : tabs.map((tab) => {
            return (React.createElement(StyledTab, { key: tab.id, theme: theme, disabled: tab.disabled, style: style, active: activeTab === tab.id, onClick: () => onChange(tab) }, tab.title));
        }))));
};
//# sourceMappingURL=index.js.map