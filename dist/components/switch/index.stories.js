import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Switch } from "./index";
export default {
    component: Switch,
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
        rtl: {
            control: {
                type: "boolean",
            },
        },
    },
};
const Template = (args) => {
    const [checked, setIsChecked] = useState(false);
    return (React.createElement(StoryWrapper, null,
        React.createElement(Switch, Object.assign({}, args, { onChange: () => setIsChecked((prev) => !prev), checked: checked }))));
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
    content: "Switch Label",
};
//# sourceMappingURL=index.stories.js.map