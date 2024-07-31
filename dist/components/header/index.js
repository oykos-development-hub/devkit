import React from "react";
import { Theme } from "../../shared/theme";
import { HeaderContainer } from "./styles/headerContainer";
import { LogoMontenegro } from "../logos/montenegro";
export const SSSHeader = ({ icon, style, theme = Theme }) => {
    return (React.createElement(HeaderContainer, { style: style, theme: theme },
        React.createElement("div", { className: "header" },
            React.createElement("div", { className: "logo" },
                React.createElement(LogoMontenegro, null)),
            React.createElement("div", { className: "header-icon" },
                React.createElement("div", { className: "icon" }, icon)))));
};
//# sourceMappingURL=index.js.map