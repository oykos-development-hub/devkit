import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon, UserIcon, InstagramIcon, LinkedinIcon, FacebookIcon, GithubIcon, GoogleIcon, CheckIcon, } from "./";
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
    React.createElement(CircleCheckIcon, Object.assign({}, args)),
    React.createElement(UserIcon, Object.assign({}, args)),
    React.createElement(InstagramIcon, Object.assign({}, args)),
    React.createElement(LinkedinIcon, Object.assign({}, args)),
    React.createElement(FacebookIcon, Object.assign({}, args)),
    React.createElement(GithubIcon, Object.assign({}, args)),
    React.createElement(GoogleIcon, Object.assign({}, args)),
    React.createElement(CheckIcon, Object.assign({}, args))));
export const DefaultIcons = Default.bind({});
DefaultIcons.args = {};
const Custom = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(AssignIcon, Object.assign({}, args)),
    React.createElement(XIcon, Object.assign({}, args)),
    React.createElement(DangerIcon, Object.assign({}, args)),
    React.createElement(CircleCheckIcon, Object.assign({}, args)),
    React.createElement(UserIcon, Object.assign({}, args)),
    React.createElement(InstagramIcon, Object.assign({}, args)),
    React.createElement(LinkedinIcon, Object.assign({}, args)),
    React.createElement(FacebookIcon, Object.assign({}, args)),
    React.createElement(GithubIcon, Object.assign({}, args)),
    React.createElement(GoogleIcon, Object.assign({}, args)),
    React.createElement(CheckIcon, Object.assign({}, args))));
export const CustomIcons = Custom.bind({});
CustomIcons.args = {
    size: "100px",
};
//# sourceMappingURL=index.stories.js.map