/// <reference types="react" />
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { AccordionProps } from "./types";
declare const _default: ComponentMeta<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
export default _default;
export declare const StandardDefault: ComponentStory<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
export declare const StandardTheme: ComponentStory<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
export declare const FilledDefault: ComponentStory<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
export declare const FilledThemed: ComponentStory<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
export declare const WithContentElement: ComponentStory<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
export declare const WithIconLeft: ComponentStory<({ variant, collapsed, scrollHeight, ...props }: AccordionProps) => JSX.Element>;
