var w=Object.defineProperty;var c=(t,e)=>w(t,"name",{value:e,configurable:!0});import{s as v,C as h,T as y,S as O}from"./index-81b13a9a.js";import{j as p}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const $=v.button(()=>({theme:t,disabled:e,variant:n,size:r})=>{const a=t||y,{gray50:l,white:o,primary500:i,secondary500:m,gray200:s,error500:f,error100:x,primary800:b,secondary800:C,error800:T}=a.palette,N={primary:e?s:i,secondary:e?s:m,tertiary:e?x:f},k={primary:b,secondary:C,tertiary:T},S={primary:e?s:i,secondary:e?s:m,tertiary:e?x:f},_={xs:"8px 14px",sm:"10px 16px",md:"10px 18px",lg:"12px 20px",xl:"16px 28px"},V={primary:o,secondary:l,tertiary:o};return h`
    align-items: center;
    justify-content: center;
    background-color: ${N[n]};
    border: 1px solid ${S[n]};
    border-radius: 8px;
    padding: ${_[r]};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${k[n]};
      div {
        color: ${V[n]};
      }
    }
  `}),E=v.div(({disabled:t,theme:e,size:n,variant:r})=>{const a=e||y,{gray300:l,gray700:o,white:i}=a.palette,m={xs:"14px",sm:"14px",md:"16px",lg:"16px",xl:"18px"};return h`
    color: ${{primary:t?l:i,secondary:t?l:o,tertiary:i}[r]};
    font-size: ${m[n]};
  `});var g="C:\\Development\\Oykos\\devkit\\src\\components\\button-new\\Button.tsx";const u=c(({onClick:t,content:e,disabled:n=!1,variant:r="primary",size:a="lg",style:l,theme:o})=>p($,{style:l,disabled:n,variant:r,size:a,onClick:t,theme:o,children:p(E,{size:a,disabled:n,variant:r,theme:o,children:e},void 0,!1,{fileName:g,lineNumber:16,columnNumber:7},void 0)},void 0,!1,{fileName:g,lineNumber:15,columnNumber:5},void 0),"Button"),B=u;try{u.displayName="Button",u.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button-new/Button.tsx#Button"]={docgenInfo:u.__docgenInfo,name:"Button",path:"src/components/button-new/Button.tsx#Button"})}catch{}var d="C:\\Development\\Oykos\\devkit\\src\\components\\button-new\\button.stories.tsx";const L={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonProps } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { TypographyVariants } from "../typography/variants";
import Button from "./Button";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    content: {
      defaultValue: () => <span>Button</span>,
    },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      defaultValue: () => alert("Button clicked!"),
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        width: "fit-content",
        height: "fit-content",
        margin: "0em",
        borderWidth: "1px",
        gap: "0.5em",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
);

export const CustomButton = Template.bind({});
CustomButton.args = {
  content: "Button CTA",
  onClick: () => alert("Button clicked!"),
  variant: "primary",
  size: "lg",
  theme: Theme,
};
`,locationsMap:{"custom-button":{startLoc:{col:48,line:54},endLoc:{col:1,line:58},startBody:{col:48,line:54},endBody:{col:1,line:58}}}}},component:B,title:"Components/Button",argTypes:{content:{defaultValue:()=>p("span",{children:"Button"},void 0,!1,{fileName:d,lineNumber:23,columnNumber:27},void 0)},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",margin:"0em",borderWidth:"1px",gap:"0.5em"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},j=c(t=>p(O,{children:p(B,{...t},void 0,!1,{fileName:d,lineNumber:64,columnNumber:5},void 0)},void 0,!1,{fileName:d,lineNumber:63,columnNumber:3},void 0),"Template"),q=j.bind({});q.args={content:"Button CTA",onClick:()=>alert("Button clicked!"),variant:"primary",size:"lg",theme:y};const I=["CustomButton"];export{q as CustomButton,I as __namedExportsOrder,L as default};
//# sourceMappingURL=button.stories-25e4ac13.js.map
