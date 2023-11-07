import React, { useState } from "react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Button } from "../button";
import UploadCloudIcon from "../icon/variations/UploadCloudIcon";
import { Typography } from "../typography";
import { FileUpload } from "./index";
export default {
    component: FileUpload,
    title: "Components/FileUpload",
    argTypes: {
        variant: {
            control: {
                type: "radio",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        accept: {
            control: {
                type: "text",
            },
        },
        buttonVariant: {
            control: {
                type: "select",
                options: ["primary", "secondary", "tertiary"],
            },
        },
        error: {
            control: {
                type: "text",
            },
        },
        maxSize: {
            control: {
                type: "number",
            },
        },
    },
};
const Template = (args) => {
    const [files, setFiles] = useState();
    const onUpload = (acceptedFiles) => {
        setFiles(acceptedFiles);
        console.log("File(s) uploaded:", acceptedFiles);
    };
    return (React.createElement(StoryWrapper, null,
        React.createElement(FileUpload, Object.assign({}, args, { onUpload: onUpload, files: files }))));
};
export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    multiple: false,
    hint: "JPG, PNG or PDF, file size no more than 10MB",
    disabled: false,
};
export const PrimaryMultiple = Template.bind({});
PrimaryMultiple.args = {
    variant: "primary",
    multiple: true,
    hint: "JPG, PNG or PDF, file size no more than 10MB",
    disabled: false,
};
export const Secondary = Template.bind({});
Secondary.args = {
    variant: "secondary",
    buttonVariant: "secondary",
    buttonText: "SELECT FILES",
    multiple: true,
    note: "Select a files or drag and drop here",
    hint: "JPG, PNG or PDF, file size no more than 10MB",
    disabled: false,
};
export const SecondaryMultiple = Template.bind({});
SecondaryMultiple.args = {
    variant: "secondary",
    buttonVariant: "secondary",
    buttonText: "SELECT FILES",
    multiple: true,
    note: React.createElement(Typography, { variant: "bodySmall", content: "Select a files or drag and drop here" }),
    hint: "JPG, PNG or PDF, file size no more than 10MB",
    disabled: false,
};
export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: "tertiary",
    buttonVariant: "primary",
    buttonText: "SELECT FILE",
    multiple: false,
    note: "Title",
    hint: (React.createElement(Typography, { variant: "helperText", style: { marginTop: "2rem", textDecoration: "underline" }, content: "JPG or PNG, file size no more than 10MB" })),
    icon: React.createElement(React.Fragment, null),
    disabled: false,
};
export const TertiaryWithCustomButton = Template.bind({});
TertiaryWithCustomButton.args = {
    variant: "tertiary",
    multiple: false,
    note: "Title",
    customButton: (React.createElement(Button, { size: "sm", variant: "primary", content: React.createElement("div", { style: { display: "flex", alignItems: "center", gap: "8px" } },
            React.createElement(UploadCloudIcon, { stroke: "white", width: "20px" }),
            React.createElement(Typography, { variant: "bodyMedium", content: "Učitaj", style: { color: "white" } })), theme: Theme })),
    hint: (React.createElement(Typography, { variant: "helperText", style: { marginTop: "2rem", textDecoration: "underline", fontWeight: 600 }, content: "JPG or PNG, file size no more than 10MB" })),
    icon: React.createElement(React.Fragment, null),
    disabled: false,
};
//# sourceMappingURL=index.stories.js.map