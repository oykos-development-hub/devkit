var a=Object.defineProperty;var o=(t,i)=>a(t,"name",{value:i,configurable:!0});import{I as l}from"./index-4d8d9e4d.js";import{T as p,S as d}from"./index-5b3ad76a.js";import{C as s,X as c}from"./CircleCheckIcon-4cd4c6e9.js";import{j as e}from"./jsx-dev-runtime-21a8a8df.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-ffc48dc1.js";import"./index-f4c43bdd.js";var r="C:\\Development\\Oykos\\devkit\\src\\components\\input\\index.stories.tsx";const W={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
import { Input } from "./index";\r
import { StoryWrapper } from "../../shared/components/story-wrapper";\r
import { InputProps } from "./types";\r
import { Theme } from "../../shared/theme";\r
import { CircleCheckIcon, XIcon } from "../icon";\r
\r
export default {\r
  title: "Components/Input",\r
  component: Input,\r
  argTypes: {\r
    theme: {\r
      control: {\r
        type: "object",\r
      },\r
      defaultValue: Theme,\r
    },\r
  },\r
} as ComponentMeta<typeof Input>;\r
\r
const Template: ComponentStory<typeof Input> = (args: InputProps) => (\r
  <StoryWrapper>\r
    <div style={{ width: "300px" }}>\r
      <Input {...args} />\r
    </div>\r
  </StoryWrapper>\r
);\r
\r
export const InputDefault = Template.bind({});\r
\r
InputDefault.args = {\r
  placeholder: "placeholder...",\r
};\r
\r
//\r
\r
export const StyledInput = Template.bind({});\r
\r
StyledInput.args = {\r
  label: "Input Label*",\r
  placeholder: "placeholder...",\r
  style: {\r
    border: "2px solid blue",\r
    padding: "2em",\r
  },\r
};\r
\r
//\r
\r
export const WithContent = Template.bind({});\r
\r
WithContent.args = {\r
  label: "Input Label*",\r
  placeholder: "placeholder...",\r
  leftContent: (\r
    <div style={{ padding: "0 0.75em", display: "flex", alignItems: "center" }}>\r
      <CircleCheckIcon style={{ color: "grey" }} size="24px" />\r
    </div>\r
  ),\r
  rightContent: (\r
    <div style={{ padding: "0 0.75em", display: "flex", alignItems: "center" }}>\r
      <XIcon style={{ color: "grey" }} size="14px" />\r
    </div>\r
  ),\r
};\r
\r
//\r
\r
export const WithError = Template.bind({});\r
\r
WithError.args = {\r
  label: "Input Label*",\r
  placeholder: "placeholder...",\r
  error: "This is error.",\r
};\r
\r
//\r
\r
export const WithHint = Template.bind({});\r
\r
WithHint.args = {\r
  label: "Input Label*",\r
  placeholder: "placeholder...",\r
  hint: "This is hint.",\r
};\r
`,locationsMap:{"input-default":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"styled-input":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-content":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-error":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-hint":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}}}}},title:"Components/Input",component:l,argTypes:{theme:{control:{type:"object"},defaultValue:p}}},n=o(t=>e(d,{children:e("div",{style:{width:"300px"},children:e(l,{...t},void 0,!1,{fileName:r,lineNumber:33,columnNumber:7},void 0)},void 0,!1,{fileName:r,lineNumber:32,columnNumber:5},void 0)},void 0,!1,{fileName:r,lineNumber:31,columnNumber:3},void 0),"Template"),m=n.bind({});m.args={placeholder:"placeholder..."};const u=n.bind({});u.args={label:"Input Label*",placeholder:"placeholder...",style:{border:"2px solid blue",padding:"2em"}};const h=n.bind({});h.args={label:"Input Label*",placeholder:"placeholder...",leftContent:e("div",{style:{padding:"0 0.75em",display:"flex",alignItems:"center"},children:e(s,{style:{color:"grey"},size:"24px"},void 0,!1,{fileName:r,lineNumber:66,columnNumber:7},void 0)},void 0,!1,{fileName:r,lineNumber:65,columnNumber:5},void 0),rightContent:e("div",{style:{padding:"0 0.75em",display:"flex",alignItems:"center"},children:e(c,{style:{color:"grey"},size:"14px"},void 0,!1,{fileName:r,lineNumber:71,columnNumber:7},void 0)},void 0,!1,{fileName:r,lineNumber:70,columnNumber:5},void 0)};const y=n.bind({});y.args={label:"Input Label*",placeholder:"placeholder...",error:"This is error."};const b=n.bind({});b.args={label:"Input Label*",placeholder:"placeholder...",hint:"This is hint."};const S=["InputDefault","StyledInput","WithContent","WithError","WithHint"];export{m as InputDefault,u as StyledInput,h as WithContent,y as WithError,b as WithHint,S as __namedExportsOrder,W as default};
//# sourceMappingURL=index.stories-d96538be.js.map
