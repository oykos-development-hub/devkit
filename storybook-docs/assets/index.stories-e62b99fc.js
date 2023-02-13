var i=Object.defineProperty;var o=(t,r)=>i(t,"name",{value:r,configurable:!0});import{I as l}from"./index-ab32a371.js";import{T as p,S as a}from"./index-25fcb85b.js";import{C as c,X as d}from"./CircleCheckIcon-d077aa17.js";import{j as e}from"./jsx-runtime-82e0d3de.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-c42abb34.js";import"./index-4cb24bae.js";const S={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"input-default":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"styled-input":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-content":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-error":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}},"with-hint":{startLoc:{col:47,line:22},endLoc:{col:1,line:28},startBody:{col:47,line:22},endBody:{col:1,line:28}}}}},title:"Components/Input",component:l,argTypes:{theme:{control:{type:"object"},defaultValue:p}}},n=o(t=>e(a,{children:e("div",{style:{width:"300px"},children:e(l,{...t})})}),"Template"),s=n.bind({});s.args={placeholder:"placeholder..."};const h=n.bind({});h.args={label:"Input Label*",placeholder:"placeholder...",style:{border:"2px solid blue",padding:"2em"}};const m=n.bind({});m.args={label:"Input Label*",placeholder:"placeholder...",leftContent:e("div",{style:{padding:"0 0.75em",display:"flex",alignItems:"center"},children:e(c,{style:{color:"grey"},size:"24px"})}),rightContent:e("div",{style:{padding:"0 0.75em",display:"flex",alignItems:"center"},children:e(d,{style:{color:"grey"},size:"14px"})})};const y=n.bind({});y.args={label:"Input Label*",placeholder:"placeholder...",error:"This is error."};const u=n.bind({});u.args={label:"Input Label*",placeholder:"placeholder...",hint:"This is hint."};const B=["InputDefault","StyledInput","WithContent","WithError","WithHint"];export{s as InputDefault,h as StyledInput,m as WithContent,y as WithError,u as WithHint,B as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories-e62b99fc.js.map
