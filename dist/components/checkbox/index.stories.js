import React, { useState } from "react";
import { SSSCheckbox } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { CheckboxSize } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/Checkbox",
    component: SSSCheckbox,
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
            defaultValue: Theme,
        },
    },
};
const Template = (args) => {
    const [checked, setIsChecked] = useState(false);
    return (React.createElement(StoryWrapper, null,
        React.createElement(SSSCheckbox, Object.assign({}, args, { checked: checked, name: "test", onChange: () => setIsChecked((prev) => !prev) }))));
};
export const Default = Template.bind({});
Default.args = {
    size: CheckboxSize.sm,
    disabled: false,
};
//# sourceMappingURL=index.stories.js.map