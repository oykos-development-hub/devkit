var a=Object.defineProperty;var l=(o,i)=>a(o,"name",{value:i,configurable:!0});import{I as r}from"./index-46262157.js";import{T as p,S as d}from"./index-b018fede.js";import{C as s,X as c}from"./CircleCheckIcon-63b7cf1f.js";import{j as e}from"./jsx-dev-runtime-21a8a8df.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-e2e3fe9f.js";import"./index-f4c43bdd.js";var n="C:\\Development\\Oykos\\devkit\\src\\components\\input\\index.stories.tsx";const W={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputProps } from "./types";
import { Theme } from "../../shared/theme";
import { CircleCheckIcon, XIcon } from "../icon";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
      defaultValue: Theme,
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <StoryWrapper>
    <div style={{ width: "300px" }}>
      <Input {...args} />
    </div>
  </StoryWrapper>
);

export const InputDefault = Template.bind({});

InputDefault.args = {
  placeholder: "placeholder...",
};

//

export const StyledInput = Template.bind({});

StyledInput.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  style: {
    border: "2px solid blue",
    padding: "2em",
  },
};

//

export const WithContent = Template.bind({});

WithContent.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  leftContent: (
    <div style={{ padding: "0 0.75em", display: "flex", alignItems: "center" }}>
      <CircleCheckIcon style={{ color: "grey" }} size="24px" />
    </div>
  ),
  rightContent: (
    <div style={{ padding: "0 0.75em", display: "flex", alignItems: "center" }}>
      <XIcon style={{ color: "grey" }} size="14px" />
    </div>
  ),
};

//

export const WithError = Template.bind({});

WithError.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  error: "This is error.",
};

//

export const WithHint = Template.bind({});

WithHint.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  hint: "This is hint.",
};
`,locationsMap:{"input-default":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"styled-input":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-content":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-error":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-hint":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}}}}},title:"Components/Input",component:r,argTypes:{theme:{control:{type:"object"},defaultValue:p}}},t=l(o=>e(d,{children:e("div",{style:{width:"300px"},children:e(r,{...o},void 0,!1,{fileName:n,lineNumber:33,columnNumber:7},void 0)},void 0,!1,{fileName:n,lineNumber:32,columnNumber:5},void 0)},void 0,!1,{fileName:n,lineNumber:31,columnNumber:3},void 0),"Template"),m=t.bind({});m.args={placeholder:"placeholder..."};const u=t.bind({});u.args={label:"Input Label*",placeholder:"placeholder...",style:{border:"2px solid blue",padding:"2em"}};const h=t.bind({});h.args={label:"Input Label*",placeholder:"placeholder...",leftContent:e("div",{style:{padding:"0 0.75em",display:"flex",alignItems:"center"},children:e(s,{style:{color:"grey"},size:"24px"},void 0,!1,{fileName:n,lineNumber:66,columnNumber:7},void 0)},void 0,!1,{fileName:n,lineNumber:65,columnNumber:5},void 0),rightContent:e("div",{style:{padding:"0 0.75em",display:"flex",alignItems:"center"},children:e(c,{style:{color:"grey"},size:"14px"},void 0,!1,{fileName:n,lineNumber:71,columnNumber:7},void 0)},void 0,!1,{fileName:n,lineNumber:70,columnNumber:5},void 0)};const y=t.bind({});y.args={label:"Input Label*",placeholder:"placeholder...",error:"This is error."};const b=t.bind({});b.args={label:"Input Label*",placeholder:"placeholder...",hint:"This is hint."};const S=["InputDefault","StyledInput","WithContent","WithError","WithHint"];export{m as InputDefault,u as StyledInput,h as WithContent,y as WithError,b as WithHint,S as __namedExportsOrder,W as default};
//# sourceMappingURL=index.stories-8eb73ee0.js.map
