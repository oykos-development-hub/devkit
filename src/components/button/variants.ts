export enum ButtonVariants {
  primary = "primary",
  secondary = "secondary",
  tertiary = "tertiary"
}

export const Variants = Object.keys(ButtonVariants).map((key: string) => key);
