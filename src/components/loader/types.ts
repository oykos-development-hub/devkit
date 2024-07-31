export type LoaderSizes = "sm" | "md" | "lg";
export type LoaderVariants = "circle" | "square" | "dots";

export type SSSLoaderProps = {
  size?: LoaderSizes;
  width?: string | number;
  height?: string | number;
  variant?: LoaderVariants;
  color?: string;
};
