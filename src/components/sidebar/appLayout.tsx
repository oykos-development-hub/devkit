import React, { ReactNode } from "react";
import { Footer, Header } from "../..";
import styled from "styled-components";

export const Content = styled.div`
  position: fixed;
  top: 100px;
  left: 0;
  height: calc(100vh - 157px);
  display: flex;
  width: 100vw;
`;

const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </div>
  );
};

export default AppLayout;
