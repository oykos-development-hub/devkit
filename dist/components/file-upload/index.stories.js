import React from "react";
import { SSSFileUpload } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Button, Typography } from "@oykos-development/devkit-react-ts-styled-components";
import { UploadCloudIcon } from "@oykos-development/devkit-react-ts-styled-components";
export default {
    title: "Components/FileUpload",
    component: SSSFileUpload,
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
        buttonSize: {
            control: {
                type: "radio",
                options: ["xs", "sm", "md", "lg", "xl"],
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
    React.createElement(SSSFileUpload, Object.assign({}, args, { onUpload: onFileUpload }))));
export const Primary = Template.bind({});
Primary.args = {
    variant: "primary",
    multiple: false,
    note: "Select a file or drag and drop here",
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
export const Tertiary = Template.bind({});
Tertiary.args = {
    variant: "tertiary",
    buttonVariant: "primary",
    buttonText: "SELECT FILE",
    multiple: false,
    note: "Title",
    hint: (React.createElement(Typography, { variant: "helperText", style: { marginTop: "2rem", textDecoration: "underline" }, content: "Passport.png" })),
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
            React.createElement(Typography, { variant: "bodyMedium", content: "Ucitaj", style: { color: "white" } })), onClick: () => alert("Success!"), theme: Theme })),
    hint: (React.createElement(Typography, { variant: "helperText", style: { marginTop: "2rem", textDecoration: "underline", fontWeight: 600 }, content: "Passport.png" })),
    icon: React.createElement(React.Fragment, null),
    disabled: false,
};
//# sourceMappingURL=index.stories.js.map