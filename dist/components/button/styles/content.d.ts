import { ButtonVariants, ButtonSizes } from "../types";
import { DefaultTheme } from "../../../types";
export declare const Content: import("styled-components").StyledComponent<"div", import("styled-components").DefaultTheme, {
    disabled: boolean;
    variant: keyof typeof ButtonVariants;
    size: keyof typeof ButtonSizes;
    theme: DefaultTheme;
    customStyle: React.CSSProperties | undefined;
}, never>;
