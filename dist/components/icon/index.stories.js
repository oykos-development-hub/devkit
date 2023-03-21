import React from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon, UserIcon, InstagramIcon, LinkedinIcon, FacebookIcon, GithubIcon, GoogleIcon, DangerAlertIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon, } from "./";
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
    React.createElement(DangerAlertIcon, Object.assign({}, args)),
    React.createElement(ChevronUpIcon, Object.assign({}, args)),
    React.createElement(ChevronDownIcon, Object.assign({}, args)),
    React.createElement(ChevronLeftIcon, Object.assign({}, args)),
    React.createElement(ChevronRightIcon, Object.assign({}, args))));
export const DefaultIcons = Default.bind({});
DefaultIcons.args = {
    width: "100px",
    height: "100px",
};
//# sourceMappingURL=index.stories.js.map