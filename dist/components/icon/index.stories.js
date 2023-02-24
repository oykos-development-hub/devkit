import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./";
export default {
    title: "Components/Icons",
    component: XIcon,
    argTypes: {
        onClick: {
            defaultValue: () => alert("Icon clicked!"),
        },
        theme: {
            control: {
                type: "object",
            },
        },
        style: {
            defaultValue: {
                width: "40px",
                height: "40px",
                padding: "0.2rem",
            },
        },
    },
};
const Default = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(AssignIcon, Object.assign({}, args)),
    React.createElement(XIcon, Object.assign({}, args)),
    React.createElement(DangerIcon, Object.assign({}, args)),
    React.createElement(CircleCheckIcon, Object.assign({}, args))));
export const DefaultIcons = Default.bind({});
DefaultIcons.args = {};
const Custom = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(AssignIcon, Object.assign({}, args)),
    React.createElement(XIcon, Object.assign({}, args)),
    React.createElement(DangerIcon, Object.assign({}, args)),
    React.createElement(CircleCheckIcon, Object.assign({}, args))));
export const CustomIcons = Custom.bind({});
CustomIcons.args = {
    size: "100px",
};
//# sourceMappingURL=index.stories.js.map