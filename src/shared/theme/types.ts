import 'styled-components';
import { BorderRadius, BorderWidth } from "./border-types";
import { MediaScreenBreakpoints } from "./media-types";
import { Palette } from "./color-types";

declare module 'styled-components' {
  export interface DefaultTheme {
    mediaScreenBreakpoints: MediaScreenBreakpoints
    borderRadius: BorderRadius
    borderWidth: BorderWidth
    palette: Palette
  }
}