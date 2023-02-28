import { TypographyProps } from "../types";
export declare const themeToUse: (props: TypographyProps) => import("styled-components").DefaultTheme;
export declare const fontSize: (props: TypographyProps) => import("csstype").Property.FontSize<string | number> | undefined;
export declare const fontWeight: (props: TypographyProps) => import("csstype").Property.FontWeight | undefined;
export declare const shared: import("styled-components").FlattenInterpolation<import("styled-components").ThemedStyledProps<TypographyProps, import("styled-components").DefaultTheme>>;
