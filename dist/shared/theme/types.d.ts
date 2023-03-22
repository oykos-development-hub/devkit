import "styled-components";
import { BorderRadius, BorderWidth } from "./border-types";
import { MediaScreenBreakpoints } from "./media-types";
import { Palette } from "./color-types";
import { FontFamily, FontSize, FontWeight, LineHeight, TypographyFontSize, TypographyLineHeight } from "./font-types";
export interface DefaultTheme {
    mediaScreenBreakpoints: MediaScreenBreakpoints;
    borderRadius: BorderRadius;
    borderWidth: BorderWidth;
    palette: Palette;
    fontSize: FontSize;
    fontWeight: FontWeight;
    typographyFontSize: TypographyFontSize;
    typographyLineHeight: TypographyLineHeight;
    lineHeight: LineHeight;
    fontFamily: FontFamily;
}
declare module "styled-components" {
    interface DefaultTheme {
        mediaScreenBreakpoints: MediaScreenBreakpoints;
        borderRadius: BorderRadius;
        borderWidth: BorderWidth;
        palette: Palette;
        fontSize: FontSize;
        fontWeight: FontWeight;
        typographyFontSize: TypographyFontSize;
        typographyLineHeight: TypographyLineHeight;
        lineHeight: LineHeight;
        fontFamily: FontFamily;
    }
}
