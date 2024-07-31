import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { SSSSidebar } from ".";
import { data2, settingsData, sidebarData } from "./constants";
import AppLayout from "./appLayout";
const user = { name: "Dino", unit: "Oykos" };
export default {
    component: SSSSidebar,
    title: "Components/Sidebar",
    argTypes: {
        data: {
            control: {
                type: "object",
            },
            defaultValue: sidebarData,
        },
        user: {
            control: {
                type: "object",
            },
            defaultValue: user,
        },
    },
};
const Template = () => {
    const [clickedItem, setClickedItem] = useState("");
    return (React.createElement("div", { style: { height: "700px" } },
        React.createElement(StoryWrapper, null,
            React.createElement(AppLayout, null,
                React.createElement(SSSSidebar, { data: data2, settingsData: settingsData, user: user, onClick: (item) => setClickedItem(item.title), onSettingsClick: (item) => setClickedItem(item.title) })))));
};
export const CustomSidebar = Template.bind({});
//# sourceMappingURL=index.stories.js.map