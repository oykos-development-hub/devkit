import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { SSSSwitch } from "./index";
import { SSSTypography } from "../typography";
export default {
    component: SSSSwitch,
    title: "Components/Switch",
    argTypes: {
        disabled: {
            control: {
                type: "boolean",
            },
        },
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
        size: {
            control: {
                type: "radio",
                options: ["sm", "md"],
            },
        },
    },
};
const Template = (args) => {
    const [checked, setIsChecked] = useState(false);
    return (React.createElement(StoryWrapper, null,
        React.createElement(SSSSwitch, Object.assign({}, args, { onChange: (name) => {
                setIsChecked((prev) => !prev);
            }, checked: checked, name: "test" }))));
};
export const NoContent = Template.bind({});
NoContent.args = {
    size: "md",
    disabled: false,
};
export const WithContent = Template.bind({});
WithContent.args = {
    size: "md",
    disabled: false,
    content: (React.createElement("div", { style: { marginLeft: "0.5rem" } },
        React.createElement(SSSTypography, { content: "Remember me" }))),
};
//# sourceMappingURL=index.stories.js.map