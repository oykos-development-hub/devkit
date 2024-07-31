var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useMemo } from "react";
import { Modal } from "@oykos-development/devkit-react-ts-styled-components";
import { Theme } from "../../shared/theme";
import Container from "./styles/container";
import Content from "./styles/content";
import { Footer, HelpText } from "./styles/footer";
import Controls from "./styles/controls";
import { SSSButton } from "../button";
import ContentWrapper from "./styles/contentWrapper";
import { BackgroundBlur } from "./styles/backgroundBlur";
export const SSSModal = (_a) => {
    var { footerText, leftButtonOnClick, leftButtonText = "Cancel", rightButtonOnClick, rightButtonText = "Save", width, buttonLoading, customModalContent } = _a, props = __rest(_a, ["footerText", "leftButtonOnClick", "leftButtonText", "rightButtonOnClick", "rightButtonText", "width", "buttonLoading", "customModalContent"]);
    const mergedProps = useMemo(() => (Object.assign(Object.assign({ theme: Theme }, props), { variant: "light", style: Object.assign({ width }, props.style) })), [props]);
    return (React.createElement(React.Fragment, null,
        React.createElement(BackgroundBlur, { open: props.open }),
        React.createElement(Container, { theme: mergedProps.theme, open: props.open },
            React.createElement(Modal, Object.assign({}, mergedProps, { content: customModalContent ? (customModalContent) : (React.createElement(ContentWrapper, null,
                    React.createElement(Content, null, props.content),
                    React.createElement(Footer, { theme: mergedProps.theme },
                        React.createElement(HelpText, { content: footerText, variant: "bodySmall" }),
                        !props.customButtonsControls ? (React.createElement(Controls, null,
                            React.createElement(SSSButton, { content: leftButtonText, onClick: leftButtonOnClick || mergedProps.onClose, variant: "secondary" }),
                            React.createElement(SSSButton, { content: rightButtonText, onClick: rightButtonOnClick, variant: "primary", isLoading: buttonLoading }))) : (props.customButtonsControls)))), outsideClickClose: false })))));
};
//# sourceMappingURL=index.js.map