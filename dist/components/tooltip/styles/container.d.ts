import { TooltipVariants } from "@oykos-development/devkit-react-ts-styled-components";
import { DefaultTheme } from "styled-components";
declare const Container: import("styled-components").StyledComponent<"div", DefaultTheme, {
    hasContent: boolean;
    variant: TooltipVariants | `${TooltipVariants}`;
    theme: DefaultTheme;
}, never>;
export default Container;
