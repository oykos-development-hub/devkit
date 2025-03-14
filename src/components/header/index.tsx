import React from "react";
import { HeaderProps } from "./types";
import { Theme } from "../../shared/theme";
import { HeaderContainer } from "./styles/headerContainer";
import { LogoMontenegro } from "../logos/montenegro";

export const SSSHeader: React.FC<HeaderProps> = ({ icon, style, theme = Theme }) => {
  return (
    <HeaderContainer style={style} theme={theme}>
      <div className="header">
        <div className="logo">
          <LogoMontenegro />
        </div>
        <div className="header-icon">
          <div className="icon">{icon}</div>
        </div>
      </div>
    </HeaderContainer>
  );
};
