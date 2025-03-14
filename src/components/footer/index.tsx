import React from "react";
import { FooterProps } from "./types";
import { Theme } from "../../shared/theme";
import { FooterContainer } from "./styles/footerContainer";
import { SSSTypography } from "../typography";

export const SSSFooter: React.FC<FooterProps> = ({ style, theme = Theme }) => {
  return (
    <FooterContainer style={style} theme={theme}>
      <div className="footer">
        <SSSTypography
          content={"© 2023 SUDOVI ERP"}
          variant={"bodyMedium"}
          style={{ color: Theme.palette.white }}
        ></SSSTypography>
      </div>
    </FooterContainer>
  );
};
