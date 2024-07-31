import React from "react";
import { Theme } from "../../shared/theme";
import { FooterContainer } from "./styles/footerContainer";
import { SSSTypography } from "../typography";
export const SSSFooter = ({ style, theme = Theme }) => {
    return (React.createElement(FooterContainer, { style: style, theme: theme },
        React.createElement("div", { className: "footer" },
            React.createElement(SSSTypography, { content: "© 2023 SUDOVI ERP", variant: "bodyMedium", style: { color: Theme.palette.white } }))));
};
//# sourceMappingURL=index.js.map