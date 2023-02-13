var u=Object.defineProperty;var l=(o,T)=>u(o,"name",{value:T,configurable:!0});import{T as g,V as p,W as t,a as n}from"./index-ffc48dc1.js";import{T as e,S as f}from"./index-5b3ad76a.js";import{j as a}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var i="C:\\Development\\Oykos\\devkit\\src\\components\\typography\\index.stories.tsx";const F={parameters:{storySource:{source:`import React from "react";\r
import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { Typography } from "./index";\r
import { StoryWrapper } from "../../shared/components/story-wrapper";\r
import { Theme } from "../../shared/theme";\r
import { TypographyVariants, VariantNames, WeightVariants } from "./variants";\r
\r
export default {\r
  title: "Components/Typography",\r
  component: Typography,\r
  argTypes: {\r
    content: {\r
      defaultValue: () => <span>Button</span>,\r
    },\r
    variant: {\r
      control: {\r
        type: "select",\r
        options: [...VariantNames],\r
      },\r
    },\r
    theme: {\r
      control: {\r
        type: "object",\r
      },\r
    },\r
    style: {\r
      defaultValue: {\r
        color: "#333",\r
      },\r
    },\r
  },\r
  variant: {\r
    control: {\r
      type: "select",\r
      options: [...VariantNames],\r
    },\r
  },\r
  fontWeight: {\r
    options: Object.keys(WeightVariants),\r
    mapping: WeightVariants,\r
    control: {\r
      type: "radio",\r
    },\r
  },\r
  theme: {\r
    control: {\r
      type: "object",\r
    },\r
  },\r
  style: {\r
    defaultValue: {\r
      color: "#333",\r
    },\r
  },\r
} as ComponentMeta<typeof Typography>;\r
\r
const Template: ComponentStory<typeof Typography> = (args) => (\r
  <StoryWrapper>\r
    <Typography {...args}>{args.content}</Typography>\r
  </StoryWrapper>\r
);\r
\r
export const Headings = Template.bind({});\r
Headings.args = {\r
  variant: TypographyVariants.h1,\r
  content: "Headline",\r
  theme: Theme,\r
};\r
\r
export const BodyLarge = Template.bind({});\r
BodyLarge.args = {\r
  variant: TypographyVariants.bodyLarge,\r
  fontWeight: WeightVariants.regular,\r
  content: "Body Large",\r
  theme: Theme,\r
};\r
\r
export const BodyMedium = Template.bind({});\r
BodyMedium.args = {\r
  variant: TypographyVariants.bodyMedium,\r
  fontWeight: WeightVariants.regular,\r
  content: "Body Medium",\r
  theme: Theme,\r
};\r
\r
export const BodySmall = Template.bind({});\r
BodySmall.args = {\r
  variant: TypographyVariants.bodySmall,\r
  fontWeight: WeightVariants.regular,\r
  content: "Body Small",\r
  theme: Theme,\r
};\r
\r
export const Caption = Template.bind({});\r
Caption.args = {\r
  variant: TypographyVariants.caption,\r
  fontSize: Theme?.typographyFontSize?.caption,\r
  content: "Caption",\r
  theme: Theme,\r
};\r
\r
export const HelperText = Template.bind({});\r
HelperText.args = {\r
  variant: TypographyVariants.helperText,\r
  fontSize: Theme?.typographyFontSize?.helperText,\r
  content: "Helper Text",\r
  theme: Theme,\r
};\r
\r
export const Code = Template.bind({});\r
Code.args = {\r
  variant: TypographyVariants.code,\r
  fontSize: Theme?.typographyFontSize?.code,\r
  content: "Code",\r
  theme: Theme,\r
};\r
`,locationsMap:{headings:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-large":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-medium":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"body-small":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},caption:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},"helper-text":{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}},code:{startLoc:{col:52,line:57},endLoc:{col:1,line:61},startBody:{col:52,line:57},endBody:{col:1,line:61}}}}},title:"Components/Typography",component:g,argTypes:{content:{defaultValue:()=>a("span",{children:"Button"},void 0,!1,{fileName:i,lineNumber:21,columnNumber:27},void 0)},variant:{control:{type:"select",options:[...p]}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}},variant:{control:{type:"select",options:[...p]}},fontWeight:{options:Object.keys(t),mapping:t,control:{type:"radio"}},theme:{control:{type:"object"}},style:{defaultValue:{color:"#333"}}},r=l(o=>a(f,{children:a(g,{...o,children:o.content},void 0,!1,{fileName:i,lineNumber:67,columnNumber:5},void 0)},void 0,!1,{fileName:i,lineNumber:66,columnNumber:3},void 0),"Template"),b=r.bind({});b.args={variant:n.h1,content:"Headline",theme:e};const B=r.bind({});B.args={variant:n.bodyLarge,fontWeight:t.regular,content:"Body Large",theme:e};const v=r.bind({});v.args={variant:n.bodyMedium,fontWeight:t.regular,content:"Body Medium",theme:e};const S=r.bind({});S.args={variant:n.bodySmall,fontWeight:t.regular,content:"Body Small",theme:e};const V=r.bind({});var s,c;V.args={variant:n.caption,fontSize:(c=(s=e)==null?void 0:s.typographyFontSize)==null?void 0:c.caption,content:"Caption",theme:e};const x=r.bind({});var d,y;x.args={variant:n.helperText,fontSize:(y=(d=e)==null?void 0:d.typographyFontSize)==null?void 0:y.helperText,content:"Helper Text",theme:e};const L=r.bind({});var m,h;L.args={variant:n.code,fontSize:(h=(m=e)==null?void 0:m.typographyFontSize)==null?void 0:h.code,content:"Code",theme:e};const k=["Headings","BodyLarge","BodyMedium","BodySmall","Caption","HelperText","Code"];export{B as BodyLarge,v as BodyMedium,S as BodySmall,V as Caption,L as Code,b as Headings,x as HelperText,k as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-a4254485.js.map
