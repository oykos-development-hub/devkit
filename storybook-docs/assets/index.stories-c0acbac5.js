var T=Object.defineProperty;var i=(a,g)=>T(a,"name",{value:g,configurable:!0});import{T as h,V as p,W as o,a as e}from"./index-4e3d2c5e.js";import{T as n,S as B}from"./index-6d3d827b.js";import{j as r}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const F={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{headings:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-large":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-medium":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-small":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},caption:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"helper-text":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},code:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}}}}},title:"Components/Typography",component:h,argTypes:{content:{defaultValue:()=>r("span",{children:"Button"})},variant:{control:{type:"select",options:[...p]}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}},variant:{control:{type:"select",options:[...p]}},fontWeight:{options:Object.keys(o),mapping:o,control:{type:"radio"}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}},t=i(a=>r(B,{children:r(h,{...a,children:a.content})}),"Template"),f=t.bind({});f.args={variant:e.h1,content:"Headline",theme:n};const u=t.bind({});u.args={variant:e.bodyLarge,fontWeight:o.regular,content:"Body Large",theme:n};const b=t.bind({});b.args={variant:e.bodyMedium,fontWeight:o.regular,content:"Body Medium",theme:n};const S=t.bind({});S.args={variant:e.bodySmall,fontWeight:o.regular,content:"Body Small",theme:n};const V=t.bind({});var l,c;V.args={variant:e.caption,fontSize:(c=(l=n)==null?void 0:l.typographyFontSize)==null?void 0:c.caption,content:"Caption",theme:n};const x=t.bind({});var s,y;x.args={variant:e.helperText,fontSize:(y=(s=n)==null?void 0:s.typographyFontSize)==null?void 0:y.helperText,content:"Helper Text",theme:n};const L=t.bind({});var d,m;L.args={variant:e.code,fontSize:(m=(d=n)==null?void 0:d.typographyFontSize)==null?void 0:m.code,content:"Code",theme:n};const N=["Headings","BodyLarge","BodyMedium","BodySmall","Caption","HelperText","Code"];export{u as BodyLarge,b as BodyMedium,S as BodySmall,V as Caption,L as Code,f as Headings,x as HelperText,N as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-c0acbac5.js.map
