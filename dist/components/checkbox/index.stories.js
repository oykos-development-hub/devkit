import React, { useState } from "react";
import { Checkbox } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { CheckboxSize } from "./types";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/Checkbox",
    component: Checkbox,
    argTypes: {
        size: {
            control: {
                type: "radio",
                options: ["sm", "md"],
            },
        },
        disabled: {
            control: {
                type: "boolean",
            },
        },
        checked: {
            control: {
                disable: true,
            },
        },
        style: {
            control: {
                type: "object",
            },
        },
        theme: {
            control: {
                type: "object",
            },
        },
    },
};
const Template = (args) => {
    const [checked, setIsChecked] = useState(false);
    return (React.createElement(StoryWrapper, null,
        React.createElement(Checkbox, Object.assign({}, args, { onClick: () => setIsChecked((prev) => !prev), checked: checked }))));
};
export const Default = Template.bind({});
Default.args = {
    size: CheckboxSize.sm,
    disabled: false,
    theme: Theme,
};
//# sourceMappingURL=index.stories.js.map