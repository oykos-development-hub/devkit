import React, { useState } from "react";
import { Modal } from "./index";
import { Typography } from "../typography";
import { Button } from "../button";
export default {
    component: Modal,
    title: "Components/Modal",
    argTypes: {
        theme: {
            control: {
                type: "object",
            },
        },
        open: {
            control: {
                type: "boolean",
            },
            defaultValue: true,
        },
        variant: {
            control: {
                type: "select",
                options: ["light", "dark"],
            },
        },
    },
};
const Template = (args) => {
    const [open, setOpen] = useState(true);
    return (React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center" } },
        !open && React.createElement(Button, { content: "Open Modal", onClick: () => setOpen(true) }),
        React.createElement(Modal, Object.assign({}, args, { open: open, onClose: () => setOpen(false) }))));
};
export const ModalDefault = Template.bind({});
ModalDefault.args = {
    title: "Modal title",
    content: (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { padding: "2em 0.5em", width: "300px" } },
            React.createElement(Typography, { content: "This is modal content.", variant: "bodyLarge" })),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
            React.createElement(Typography, { content: "This is footer text.", variant: "bodyMedium" }),
            React.createElement("div", { style: { display: "flex", gap: "0.5em" } },
                React.createElement("button", null, "Ok"),
                React.createElement("button", null, "Cancel"))))),
};
export const ModalVariantDark = Template.bind({});
ModalVariantDark.args = {
    title: "Modal title",
    variant: "dark",
    content: (React.createElement(React.Fragment, null,
        React.createElement("div", { style: { padding: "2em 0.5em", width: "300px" } },
            React.createElement(Typography, { content: "This is modal content.", variant: "bodyMedium" })),
        React.createElement("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" } },
            React.createElement(Typography, { content: "This is footer text.", variant: "bodyMedium" }),
            React.createElement("div", { style: { display: "flex", gap: "0.5em" } },
                React.createElement("button", null, "Ok"),
                React.createElement("button", null, "Cancel"))))),
};
//# sourceMappingURL=index.stories.js.map