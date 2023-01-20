var i=Object.defineProperty;var l=(o,d)=>i(o,"name",{value:d,configurable:!0});import{I as r,a as e}from"./index-973ac81a.js";import{T as a,S as c}from"./story-wrapper-07e05087.js";import{j as n}from"./jsx-runtime-82e0d3de.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const C={parameters:{storySource:{source:`import React, { ChangeEventHandler, FocusEventHandler, FormEventHandler } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Input } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputProps, InputVariants } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: [InputVariants.standard, InputVariants.outlined],
      },
    },
    label: {
      control: {
        type: "text",
      },
    },
    id: {
      control: {
        type: "text",
      },
    },
    name: {
      control: {
        type: "text",
      },
    },
    value: {
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
    pattern: {
      control: {
        type: "text",
      },
    },
    maxLength: {
      control: {
        type: "text",
      },
    },
    fullWidth: {
      control: {
        type: "boolean",
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
    confirmed: {
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
        type: "object",
      },
    },
    iconRight: {
      control: {
        type: "object",
      },
    },
    clear: {
      defaultValue: () => console.log("Clear function"),
    },
    onChange: {
      defaultValue: () => console.log("Change function"),
    },
    onFocus: {
      defaultValue: () => console.log("Focus function"),
    },
    onBlur: {
      defaultValue: () => console.log("Blur function"),
    },
    style: {
      defaultValue: {
        width: "fit-content",
        height: "fit-content",
        padding: "1em 2em",
        margin: "0em",
        borderRadius: "1em",
        borderWidth: "1px",
        gap: "0.5em",
        borderColor: "#333",
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

export const StandardInputDefault = Template.bind({});

StandardInputDefault.args = {
  label: "StandardInputDefault",
  placeholder: "Placeholder...",
  variant: InputVariants.standard,
};

export const StandardInputThemed = Template.bind({});

StandardInputThemed.args = {
  label: "StandardInputThemed",
  placeholder: "Placeholder...",
  variant: InputVariants.standard,
  theme: Theme,
};

export const OutlinedInputDefault = Template.bind({});

OutlinedInputDefault.args = {
  label: "OutlinedInputDefault",
  placeholder: "Placeholder...",
  variant: InputVariants.outlined,
};

export const OutlinedInputThemed = Template.bind({});

OutlinedInputThemed.args = {
  label: "OutlinedInputThemed",
  placeholder: "Placeholder...",
  variant: InputVariants.outlined,
  theme: Theme,
};

export const WithError = Template.bind({});

WithError.args = {
  label: "WithError",
  placeholder: "Placeholder...",
  variant: InputVariants.standard,
  error: "This field is required",
  iconRight: (
    <svg width="20" height="20" fill="red" viewBox="0 0 20 20">
      <path fill="red" d="M10 4a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zM10 14a1 1 0 100 2 1 1 0 000-2z" />
    </svg>
  ),
};

export const Search = Template.bind({});

Search.args = {
  label: "Search",
  placeholder: "Placeholder...",
  variant: InputVariants.outlined,
  iconLeft: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" viewBox="0 0 20 20">
      <path
        fill="grey"
        fillRule="evenodd"
        d="M14.869 13.457A8.001 8.001 0 002.893 2.893 8 8 0 0013.457 14.87l.043.045 4.242 4.243a1 1 0 001.414-1.415L14.914 13.5a1.116 1.116 0 00-.045-.043zm-2.077-9.15a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486z"
        clipRule="evenodd"
      />
    </svg>
  ),
  search: true,
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" viewBox="0 0 8 8">
      <path
        fill="grey"
        fillRule="evenodd"
        d="M.646.646a.5.5 0 01.708 0L4 3.293 6.646.646a.5.5 0 11.708.708L4.707 4l2.647 2.646a.5.5 0 11-.708.708L4 4.707 1.354 7.354a.5.5 0 11-.708-.708L3.293 4 .646 1.354a.5.5 0 010-.708z"
        clipRule="evenodd"
      />
    </svg>
  ),
};
export const Confirmed = Template.bind({});

Confirmed.args = {
  label: "Confirmed",
  placeholder: "Placeholder...",
  variant: InputVariants.outlined,
  confirmed: true,
  iconRight: (
    <svg width="16" height="16" fill="#7CFC00" viewBox="0 0 17 13">
      <path fill="#7CFC00" d="M5.414 9.586l-4-4L0 7l5.414 5.414 11-11L15 0 5.414 9.586z" />
    </svg>
  ),
};
`,locationsMap:{"standard-input-default":{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}},"standard-input-themed":{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}},"outlined-input-default":{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}},"outlined-input-themed":{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}},"with-error":{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}},search:{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}},confirmed:{startLoc:{col:47,line:130},endLoc:{col:1,line:134},startBody:{col:47,line:130},endBody:{col:1,line:134}}}}},title:"Components/Input",component:r,argTypes:{variant:{control:{type:"radio",options:[e.standard,e.outlined]}},label:{control:{type:"text"}},id:{control:{type:"text"}},name:{control:{type:"text"}},value:{control:{type:"text"}},type:{control:{type:"text"}},placeholder:{control:{type:"text"}},pattern:{control:{type:"text"}},maxLength:{control:{type:"text"}},fullWidth:{control:{type:"boolean"}},error:{control:{type:"text"}},errorColor:{control:{type:"text"}},disabled:{control:{type:"boolean"}},confirmed:{control:{type:"boolean"}},textarea:{control:{type:"boolean"}},iconLeft:{control:{type:"object"}},iconRight:{control:{type:"object"}},clear:{defaultValue:()=>console.log("Clear function")},onChange:{defaultValue:()=>console.log("Change function")},onFocus:{defaultValue:()=>console.log("Focus function")},onBlur:{defaultValue:()=>console.log("Blur function")},style:{defaultValue:{width:"fit-content",height:"fit-content",padding:"1em 2em",margin:"0em",borderRadius:"1em",borderWidth:"1px",gap:"0.5em",borderColor:"#333"}},theme:{control:{type:"object"}}}},t=l(o=>n(c,{children:n(r,{...o})}),"Template"),p=t.bind({});p.args={label:"StandardInputDefault",placeholder:"Placeholder...",variant:e.standard};const u=t.bind({});u.args={label:"StandardInputThemed",placeholder:"Placeholder...",variant:e.standard,theme:a};const s=t.bind({});s.args={label:"OutlinedInputDefault",placeholder:"Placeholder...",variant:e.outlined};const h=t.bind({});h.args={label:"OutlinedInputThemed",placeholder:"Placeholder...",variant:e.outlined,theme:a};const m=t.bind({});m.args={label:"WithError",placeholder:"Placeholder...",variant:e.standard,error:"This field is required",iconRight:n("svg",{width:"20",height:"20",fill:"red",viewBox:"0 0 20 20",children:n("path",{fill:"red",d:"M10 4a1 1 0 011 1v6a1 1 0 11-2 0V5a1 1 0 011-1zM10 14a1 1 0 100 2 1 1 0 000-2z"})})};const f=t.bind({});f.args={label:"Search",placeholder:"Placeholder...",variant:e.outlined,iconLeft:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"grey",viewBox:"0 0 20 20",children:n("path",{fill:"grey",fillRule:"evenodd",d:"M14.869 13.457A8.001 8.001 0 002.893 2.893 8 8 0 0013.457 14.87l.043.045 4.242 4.243a1 1 0 001.414-1.415L14.914 13.5a1.116 1.116 0 00-.045-.043zm-2.077-9.15a6 6 0 11-8.485 8.486 6 6 0 018.485-8.486z",clipRule:"evenodd"})}),search:!0,iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"grey",viewBox:"0 0 8 8",children:n("path",{fill:"grey",fillRule:"evenodd",d:"M.646.646a.5.5 0 01.708 0L4 3.293 6.646.646a.5.5 0 11.708.708L4.707 4l2.647 2.646a.5.5 0 11-.708.708L4 4.707 1.354 7.354a.5.5 0 11-.708-.708L3.293 4 .646 1.354a.5.5 0 010-.708z",clipRule:"evenodd"})})};const g=t.bind({});g.args={label:"Confirmed",placeholder:"Placeholder...",variant:e.outlined,confirmed:!0,iconRight:n("svg",{width:"16",height:"16",fill:"#7CFC00",viewBox:"0 0 17 13",children:n("path",{fill:"#7CFC00",d:"M5.414 9.586l-4-4L0 7l5.414 5.414 11-11L15 0 5.414 9.586z"})})};const T=["StandardInputDefault","StandardInputThemed","OutlinedInputDefault","OutlinedInputThemed","WithError","Search","Confirmed"];export{g as Confirmed,s as OutlinedInputDefault,h as OutlinedInputThemed,f as Search,p as StandardInputDefault,u as StandardInputThemed,m as WithError,T as __namedExportsOrder,C as default};
//# sourceMappingURL=index.stories-c1e80173.js.map
