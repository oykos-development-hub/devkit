var d=Object.defineProperty;var l=(o,c)=>d(o,"name",{value:c,configurable:!0});import{T as r,V as s,i as n}from"./index-a597efea.js";import{T as t,S as p}from"./index-81b13a9a.js";import{j as a}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var i="C:\\Development\\Oykos\\devkit\\src\\components\\typography\\index.stories.tsx";const k={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Typography } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { TypographyVariants, VariantNames } from "./variants";

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
} as ComponentMeta<typeof Typography>;

const Template: ComponentStory<typeof Typography> = (args) => (
  <StoryWrapper>
    <Typography {...args}>{args.content}</Typography>
  </StoryWrapper>
);

export const HeadlineH1 = Template.bind({});
HeadlineH1.args = {
  variant: TypographyVariants.h1,
  content: "HeadlineH1",
  theme: Theme,
};

export const HeadlineH1Custom = Template.bind({});
HeadlineH1Custom.args = {
  variant: TypographyVariants.h1,
  content: "Headline H1 Custom Style",
  style: {
    color: "#51a322",
    margin: "5rem 2rem",
    letterSpacing: "3px",
  },
};

export const HeadlineH2 = Template.bind({});
HeadlineH2.args = {
  variant: TypographyVariants.h2,
  content: "HeadlineH2",
  theme: Theme,
};

export const HeadlineH3 = Template.bind({});
HeadlineH3.args = {
  variant: TypographyVariants.h3,
  content: "HeadlineH3",
  theme: Theme,
};

export const HeadlineH4 = Template.bind({});
HeadlineH4.args = {
  variant: TypographyVariants.h4,
  content: "HeadlineH4",
  theme: Theme,
};

export const HeadlineH5 = Template.bind({});
HeadlineH5.args = {
  variant: TypographyVariants.h5,
  content: "HeadlineH5",
  theme: Theme,
};

export const HeadlineH6 = Template.bind({});
HeadlineH6.args = {
  variant: TypographyVariants.h6,
  content: "HeadlineH6",
  theme: Theme,
};

export const Subtitle1 = Template.bind({});
Subtitle1.args = {
  variant: TypographyVariants.subtitle1,
  content: "Subtitle1",
  theme: Theme,
};

export const Subtitle2 = Template.bind({});
Subtitle2.args = {
  variant: TypographyVariants.subtitle2,
  content: "Subtitle2",
  theme: Theme,
};

export const Body1 = Template.bind({});
Body1.args = {
  variant: TypographyVariants.body1,
  content: "Body1",
  theme: Theme,
};

export const Body2 = Template.bind({});
Body2.args = {
  variant: TypographyVariants.body2,
  content: "Body2",
  theme: Theme,
};

export const Button = Template.bind({});
Button.args = {
  variant: TypographyVariants.button,
  content: "Button",
  theme: Theme,
};

export const Caption = Template.bind({});
Caption.args = {
  variant: TypographyVariants.caption,
  content: "Caption",
  theme: Theme,
};

export const Overline = Template.bind({});
Overline.args = {
  variant: TypographyVariants.overline,
  content: "Overline",
  theme: Theme,
};
`,locationsMap:{"headline-h-1":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"headline-h-1-custom":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"headline-h-2":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"headline-h-3":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"headline-h-4":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"headline-h-5":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"headline-h-6":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"subtitle-1":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"subtitle-2":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"body-1":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},"body-2":{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},button:{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},caption:{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}},overline:{startLoc:{col:52,line:34},endLoc:{col:1,line:38},startBody:{col:52,line:34},endBody:{col:1,line:38}}}}},title:"Components/Typography",component:r,argTypes:{content:{defaultValue:()=>a("span",{children:"Button"},void 0,!1,{fileName:i,lineNumber:21,columnNumber:27},void 0)},variant:{control:{type:"select",options:[...s]}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}}},e=l(o=>a(p,{children:a(r,{...o,children:o.content},void 0,!1,{fileName:i,lineNumber:44,columnNumber:5},void 0)},void 0,!1,{fileName:i,lineNumber:43,columnNumber:3},void 0),"Template"),m=e.bind({});m.args={variant:n.h1,content:"HeadlineH1",theme:t};const y=e.bind({});y.args={variant:n.h1,content:"Headline H1 Custom Style",style:{color:"#51a322",margin:"5rem 2rem",letterSpacing:"3px"}};const h=e.bind({});h.args={variant:n.h2,content:"HeadlineH2",theme:t};const H=e.bind({});H.args={variant:n.h3,content:"HeadlineH3",theme:t};const b=e.bind({});b.args={variant:n.h4,content:"HeadlineH4",theme:t};const g=e.bind({});g.args={variant:n.h5,content:"HeadlineH5",theme:t};const T=e.bind({});T.args={variant:n.h6,content:"HeadlineH6",theme:t};const u=e.bind({});u.args={variant:n.subtitle1,content:"Subtitle1",theme:t};const v=e.bind({});v.args={variant:n.subtitle2,content:"Subtitle2",theme:t};const B=e.bind({});B.args={variant:n.body1,content:"Body1",theme:t};const L=e.bind({});L.args={variant:n.body2,content:"Body2",theme:t};const x=e.bind({});x.args={variant:n.button,content:"Button",theme:t};const V=e.bind({});V.args={variant:n.caption,content:"Caption",theme:t};const S=e.bind({});S.args={variant:n.overline,content:"Overline",theme:t};const M=["HeadlineH1","HeadlineH1Custom","HeadlineH2","HeadlineH3","HeadlineH4","HeadlineH5","HeadlineH6","Subtitle1","Subtitle2","Body1","Body2","Button","Caption","Overline"];export{B as Body1,L as Body2,x as Button,V as Caption,m as HeadlineH1,y as HeadlineH1Custom,h as HeadlineH2,H as HeadlineH3,b as HeadlineH4,g as HeadlineH5,T as HeadlineH6,S as Overline,u as Subtitle1,v as Subtitle2,M as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories-7ed7d643.js.map
