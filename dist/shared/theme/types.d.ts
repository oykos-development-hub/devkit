import "styled-components";
import { BorderRadius, BorderWidth } from "./border-types";
import { MediaScreenBreakpoints } from "./media-types";
import { Palette } from "./color-types";
import { FontSize } from "./font-types";
declare module "styled-components" {
    interface DefaultTheme {
        mediaScreenBreakpoints: MediaScreenBreakpoints;
        borderRadius: BorderRadius;
        borderWidth: BorderWidth;
        palette: Palette;
        fontSize: FontSize;
    }
}
