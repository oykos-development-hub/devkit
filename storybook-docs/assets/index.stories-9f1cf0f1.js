var g=Object.defineProperty;var i=(a,h)=>g(a,"name",{value:h,configurable:!0});import{T as m,V as T,W as o,a as e}from"./index-82ce28a5.js";import{T as n,S as B}from"./index-6d3d827b.js";import{j as r}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const F={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames, WeightVariants } from "./variants";

export default {
  title: "Components/Typography",
  component: Typography,
  argTypes: {
    content: {
      defaultValue: () => <span>Button</span>,
    },
    variant: {
      control: {
        type: "select",
        options: [...VariantNames],
      },
    },
    fontWeight: {
      options: Object.keys(WeightVariants),
      mapping: WeightVariants,
      control: {
        type: "radio",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        color: "#333",
      },
    },
  },
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <StoryWrapper>
    <Typography {...args}>{args.content}</Typography>
  </StoryWrapper>
);

export const Headings = Template.bind({});
Headings.args = {
  variant: TypographyVariants.h1,
  content: "Headline",
  theme: Theme,
};

export const BodyLarge = Template.bind({});
BodyLarge.args = {
  variant: TypographyVariants.bodyLarge,
  fontWeight: WeightVariants.regular,
  content: "Body Large",
  theme: Theme,
};

export const BodyMedium = Template.bind({});
BodyMedium.args = {
  variant: TypographyVariants.bodyMedium,
  fontWeight: WeightVariants.regular,
  content: "Body Medium",
  theme: Theme,
};

export const BodySmall = Template.bind({});
BodySmall.args = {
  variant: TypographyVariants.bodySmall,
  fontWeight: WeightVariants.regular,
  content: "Body Small",
  theme: Theme,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: TypographyVariants.caption,
  fontSize: Theme?.typographyFontSize?.caption,
  content: "Caption",
  theme: Theme,
};

export const HelperText = Template.bind({});
HelperText.args = {
  variant: TypographyVariants.helperText,
  fontSize: Theme?.typographyFontSize?.helperText,
  content: "Helper Text",
  theme: Theme,
};

export const Code = Template.bind({});
Code.args = {
  variant: TypographyVariants.code,
  fontSize: Theme?.typographyFontSize?.code,
  content: "Code",
  theme: Theme,
};
`,locationsMap:{headings:{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}},"body-large":{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}},"body-medium":{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}},"body-small":{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}},caption:{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}},"helper-text":{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}},code:{startLoc:{col:52,line:41},endLoc:{col:1,line:45},startBody:{col:52,line:41},endBody:{col:1,line:45}}}}},title:"Components/Typography",component:m,argTypes:{content:{defaultValue:()=>r("span",{children:"Button"})},variant:{control:{type:"select",options:[...T]}},fontWeight:{options:Object.keys(o),mapping:o,control:{type:"radio"}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}}},t=i(a=>r(B,{children:r(m,{...a,children:a.content})}),"Template"),f=t.bind({});f.args={variant:e.h1,content:"Headline",theme:n};const u=t.bind({});u.args={variant:e.bodyLarge,fontWeight:o.regular,content:"Body Large",theme:n};const b=t.bind({});b.args={variant:e.bodyMedium,fontWeight:o.regular,content:"Body Medium",theme:n};const S=t.bind({});S.args={variant:e.bodySmall,fontWeight:o.regular,content:"Body Small",theme:n};const x=t.bind({});var p,l;x.args={variant:e.caption,fontSize:(l=(p=n)==null?void 0:p.typographyFontSize)==null?void 0:l.caption,content:"Caption",theme:n};const V=t.bind({});var c,d;V.args={variant:e.helperText,fontSize:(d=(c=n)==null?void 0:c.typographyFontSize)==null?void 0:d.helperText,content:"Helper Text",theme:n};const L=t.bind({});var s,y;L.args={variant:e.code,fontSize:(y=(s=n)==null?void 0:s.typographyFontSize)==null?void 0:y.code,content:"Code",theme:n};const k=["Headings","BodyLarge","BodyMedium","BodySmall","Caption","HelperText","Code"];export{u as BodyLarge,b as BodyMedium,S as BodySmall,x as Caption,L as Code,f as Headings,V as HelperText,k as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-9f1cf0f1.js.map
