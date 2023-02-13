var u=Object.defineProperty;var l=(a,T)=>u(a,"name",{value:T,configurable:!0});import{T as g,V as p,W as o,a as n}from"./index-e2e3fe9f.js";import{T as e,S as f}from"./index-b018fede.js";import{j as r}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var i="C:\\Development\\Oykos\\devkit\\src\\components\\typography\\index.stories.tsx";const F={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{headings:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-large":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-medium":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-small":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},caption:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"helper-text":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},code:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}}}}},title:"Components/Typography",component:g,argTypes:{content:{defaultValue:()=>r("span",{children:"Button"},void 0,!1,{fileName:i,lineNumber:21,columnNumber:27},void 0)},variant:{control:{type:"select",options:[...p]}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}},variant:{control:{type:"select",options:[...p]}},fontWeight:{options:Object.keys(o),mapping:o,control:{type:"radio"}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}},t=l(a=>r(f,{children:r(g,{...a,children:a.content},void 0,!1,{fileName:i,lineNumber:67,columnNumber:5},void 0)},void 0,!1,{fileName:i,lineNumber:66,columnNumber:3},void 0),"Template"),b=t.bind({});b.args={variant:n.h1,content:"Headline",theme:e};const B=t.bind({});B.args={variant:n.bodyLarge,fontWeight:o.regular,content:"Body Large",theme:e};const v=t.bind({});v.args={variant:n.bodyMedium,fontWeight:o.regular,content:"Body Medium",theme:e};const S=t.bind({});S.args={variant:n.bodySmall,fontWeight:o.regular,content:"Body Small",theme:e};const V=t.bind({});var s,c;V.args={variant:n.caption,fontSize:(c=(s=e)==null?void 0:s.typographyFontSize)==null?void 0:c.caption,content:"Caption",theme:e};const x=t.bind({});var d,y;x.args={variant:n.helperText,fontSize:(y=(d=e)==null?void 0:d.typographyFontSize)==null?void 0:y.helperText,content:"Helper Text",theme:e};const L=t.bind({});var m,h;L.args={variant:n.code,fontSize:(h=(m=e)==null?void 0:m.typographyFontSize)==null?void 0:h.code,content:"Code",theme:e};const k=["Headings","BodyLarge","BodyMedium","BodySmall","Caption","HelperText","Code"];export{B as BodyLarge,v as BodyMedium,S as BodySmall,V as Caption,L as Code,b as Headings,x as HelperText,k as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-1089aea9.js.map
