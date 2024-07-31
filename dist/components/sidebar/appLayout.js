import React from "react";
import { Footer, Header } from "../..";
import styled from "styled-components";
export const Content = styled.div `
  position: fixed;
  top: 100px;
  left: 0;
  height: calc(100vh - 157px);
  display: flex;
  width: 100vw;
`;
const AppLayout = ({ children }) => {
    return (React.createElement("div", null,
        React.createElement(Header, null),
        React.createElement(Content, null, children),
        React.createElement(Footer, null)));
};
export default AppLayout;
//# sourceMappingURL=appLayout.js.map