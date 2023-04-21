import React from "react";
import { Accordion } from "./index";
import { Typography } from "../../index";
import { Theme } from "../../shared/theme";
import { MenuIcon } from "../icon";
import { StoryWrapper } from "../../shared/components/story-wrapper";
export default {
    component: Accordion,
    title: "Components/Accordion",
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        style: {
            control: {
                type: "object",
            },
        },
    },
};
const accordionData = [
    {
        title: React.createElement(Typography, { variant: "bodySmall", content: "Accordion Title" }),
        content: (React.createElement(Typography, { variant: "bodySmall", content: "Lorem ipsum dolor sit amet. Aut internos autem et dolorem consequuntur a culpa itaque! Lorem ipsum dolor sit amet. Aut internos autem et dolorem consequuntur a culpa itaque!", style: { color: "#616161" } })),
    },
    {
        title: React.createElement(Typography, { variant: "bodySmall", content: "Accordion 1" }),
        content: React.createElement(Typography, { variant: "bodySmall", content: "Accordion 1 content.", style: { color: "#616161" } }),
    },
];
const Template = (args) => (React.createElement(StoryWrapper, { style: { display: "grid", alignContent: "center" } },
    React.createElement(Accordion, Object.assign({ style: { width: "400px" } }, args, { data: accordionData }))));
export const Default = Template.bind({});
Default.args = {
    customIcon: React.createElement(MenuIcon, null),
};
//# sourceMappingURL=index.stories.js.map