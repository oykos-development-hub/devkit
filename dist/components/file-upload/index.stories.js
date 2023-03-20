import React from "react";
import { FileUpload } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
export default {
    title: "Components/FileUpload",
    component: FileUpload,
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary"],
            },
        },
        buttonVariant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
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
const onFileUpload = (acceptedFiles) => {
    console.log("File(s) uploaded:", acceptedFiles);
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(FileUpload, Object.assign({}, args, { onUpload: onFileUpload }))));
export const Default = Template.bind({});
Default.args = {
    variant: "primary",
    multiple: false,
    note: "Select a file or drag and drop here",
    hint: "JPG, PNG or PDF, file size no more than 10MB",
};
export const Multiple = Template.bind({});
Multiple.args = {
    variant: "secondary",
    buttonVariant: "secondary",
    buttonText: "SELECT FILES",
    multiple: true,
    note: "Select a files or drag and drop here",
    hint: "JPG, PNG or PDF, file size no more than 10MB",
};
//# sourceMappingURL=index.stories.js.map