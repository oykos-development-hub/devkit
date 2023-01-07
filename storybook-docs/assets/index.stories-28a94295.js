var p=Object.defineProperty;var e=(t,a)=>p(t,"name",{value:a,configurable:!0});import{I as r}from"./index-34d4c49a.js";import{S as d}from"./story-wrapper-eaf3a593.js";import{T as l}from"./index-9da8c206.js";import{j as o}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const g={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Input } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["standard", "outlined"],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    fontSize: {
      control: {
        type: "text",
      },
    },
    type: {
      control: {
        type: "text",
      },
    },
    placeholder: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    margin: {
      control: {
        type: "text",
      },
    },
    borderColor: {
      control: {
        type: "text",
      },
    },
    borderRadius: {
      control: {
        type: "text",
      },
    },
    error: {
      control: {
        type: "text",
      },
    },
    errorColor: {
      control: {
        type: "text",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    textarea: {
      control: {
        type: "boolean",
      },
    },
    iconLeft: {
      control: {
        type: "boolean",
      },
    },
    iconRight: {
      control: {
        type: "boolean",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args: InputProps) => (
  <StoryWrapper>
    <Input {...args} />
  </StoryWrapper>
);

// standard
export const StandardInputDefault = Template.bind({});

StandardInputDefault.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "standard",
};

export const StandardInputThemed = Template.bind({});

StandardInputThemed.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "standard",
  theme: Theme,
};

// outlined
export const OutlinedInputDefault = Template.bind({});

OutlinedInputDefault.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "outlined",
};

export const OutlinedInputThemed = Template.bind({});

OutlinedInputThemed.args = {
  label: "Input Label*",
  placeholder: "placeholder...",
  variant: "outlined",
  theme: Theme,
};
`,locationsMap:{"standard-input-default":{startLoc:{col:47,line:106},endLoc:{col:1,line:110},startBody:{col:47,line:106},endBody:{col:1,line:110}},"standard-input-themed":{startLoc:{col:47,line:106},endLoc:{col:1,line:110},startBody:{col:47,line:106},endBody:{col:1,line:110}},"outlined-input-default":{startLoc:{col:47,line:106},endLoc:{col:1,line:110},startBody:{col:47,line:106},endBody:{col:1,line:110}},"outlined-input-themed":{startLoc:{col:47,line:106},endLoc:{col:1,line:110},startBody:{col:47,line:106},endBody:{col:1,line:110}}}}},title:"Components/Input",component:r,argTypes:{variant:{control:{type:"radio",options:["standard","outlined"]}},label:{control:{type:"text"}},fontSize:{control:{type:"text"}},type:{control:{type:"text"}},placeholder:{control:{type:"text"}},width:{control:{type:"text"}},fullWidth:{control:{type:"boolean"}},height:{control:{type:"text"}},margin:{control:{type:"text"}},borderColor:{control:{type:"text"}},borderRadius:{control:{type:"text"}},error:{control:{type:"text"}},errorColor:{control:{type:"text"}},disabled:{control:{type:"boolean"}},textarea:{control:{type:"boolean"}},iconLeft:{control:{type:"boolean"}},iconRight:{control:{type:"boolean"}},theme:{control:{type:"object"}}}},n=e(t=>o(d,{children:o(r,{...t})}),"Template"),c=n.bind({});c.args={label:"Input Label*",placeholder:"placeholder...",variant:"standard"};const i=n.bind({});i.args={label:"Input Label*",placeholder:"placeholder...",variant:"standard",theme:l};const u=n.bind({});u.args={label:"Input Label*",placeholder:"placeholder...",variant:"outlined"};const s=n.bind({});s.args={label:"Input Label*",placeholder:"placeholder...",variant:"outlined",theme:l};const L=["StandardInputDefault","StandardInputThemed","OutlinedInputDefault","OutlinedInputThemed"];export{u as OutlinedInputDefault,s as OutlinedInputThemed,c as StandardInputDefault,i as StandardInputThemed,L as __namedExportsOrder,g as default};
//# sourceMappingURL=index.stories-28a94295.js.map
