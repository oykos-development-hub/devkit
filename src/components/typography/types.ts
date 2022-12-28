import { TypographyVariants } from "./variants";

export interface TypographyProps {
  variant?: TypographyVariants | string;
  children?: string;
  color?: string;
  className?: string;
  noMargins?: boolean;
}
