import React from "react";
import { FileUpload } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { UploadIcon } from "../icon";
import { Button, ButtonVariants, Typography } from "../../index";
export default {
    title: "Components/FileUpload",
    component: FileUpload,
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
            defaultValue: Theme,
        },
    },
};
const onFileUpload = (acceptedFiles) => {
    console.log("Files uploaded:", acceptedFiles);
};
const Template = (args) => (React.createElement(StoryWrapper, null,
    React.createElement(FileUpload, Object.assign({}, args, { onFileUpload: onFileUpload }))));
const customIcon = (size, color) => (React.createElement(UploadIcon, { style: {
        width: size,
        height: size,
        fill: "none",
        stroke: color,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: 2,
    } }));
export const Default = Template.bind({});
Default.args = {
    multiple: false,
    icon: customIcon("52px", "#212121"),
    content: (React.createElement("div", { style: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: 0,
            gap: "24px",
        } },
        React.createElement("div", { style: {
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 0,
                gap: "12px",
            } },
            React.createElement(Typography, { variant: "bodySmall", content: "Select a file or drag and drop here" }),
            React.createElement(Typography, { variant: "helperText", content: "JPG, PNG or PDF, file size no more than 10MB" })),
        React.createElement("div", { style: { display: "flex", flexDirection: "row", alignItems: "flex-start", padding: 0 } },
            React.createElement(Button, { variant: ButtonVariants.primary, content: "SELECT FILE" })))),
};
//# sourceMappingURL=index.stories.js.map