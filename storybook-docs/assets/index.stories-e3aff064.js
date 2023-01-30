var w=Object.defineProperty;var g=(e,t)=>w(e,"name",{value:t,configurable:!0});import{s as b,C,T as s,S as E}from"./index-81b13a9a.js";import{j as d}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var y=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(y||{}),f=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(f||{});const j=b.button(()=>({theme:e,disabled:t,variant:o,size:l,style:n})=>{const r=e||s,{gray50:a,white:u,primary500:m,secondary500:p,gray200:i,error500:v,error100:h,primary800:T,secondary800:N,error800:_}=r.palette,S={primary:t?i:m,secondary:t?i:p,tertiary:t?h:v},V={primary:T,secondary:N,tertiary:_},z={primary:t?i:m,secondary:t?i:p,tertiary:t?h:v},$={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},O={primary:u,secondary:a,tertiary:u};return C`
    align-items: center;
    justify-content: center;
    background-color: ${S[o]};
    border: 1px solid ${z[o]};
    border-radius: ${r.borderRadius.lg||"0.5rem"};
    padding: ${$[l]};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${V[o]};
      div {
        color: ${O[o]};
      }
    }
    ${{...n}}
  `}),q=b.div(({disabled:e,theme:t,size:o,variant:l,customStyle:n})=>{const r=t||s,{gray300:a,gray700:u,white:m}=r.palette,p={xs:"0.875rem",sm:"0.875rem",md:"1rem",lg:"1rem",xl:"1.125rem"},i={primary:e?a:m,secondary:e?a:u,tertiary:m};return C`
    color: ${(n==null?void 0:n.color)||i[l]};
    font-size: ${(n==null?void 0:n.fontSize)||p[o]};
  `});var x="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.tsx";const c=g(({onClick:e,content:t,disabled:o=!1,variant:l=y.primary,size:n=f.lg,style:r,theme:a})=>d(j,{style:r,disabled:o,variant:l,size:n,onClick:e,theme:a,children:d(q,{size:n,disabled:o,variant:l,theme:a,customStyle:r,children:t},void 0,!1,{fileName:x,lineNumber:17,columnNumber:7},void 0)},void 0,!1,{fileName:x,lineNumber:16,columnNumber:5},void 0),"Button");try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"ButtonVariants.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"ButtonSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:c.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}var B="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.stories.tsx";const F={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Button } from "./index";

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
  variant: ButtonVariants.primary,
  size: ButtonSizes.lg,
  theme: Theme,
};

export const StyledButton = Template.bind({});
StyledButton.args = {
  content: "Styled Button",
  onClick: () => alert("Button clicked!"),
  variant: ButtonVariants.primary,
  size: ButtonSizes.lg,
  theme: Theme,
  style: {
    backgroundColor: Theme.palette.success500,
    color: Theme.palette.white,
  },
};
`,locationsMap:{"custom-button":{startLoc:{col:48,line:52},endLoc:{col:1,line:56},startBody:{col:48,line:52},endBody:{col:1,line:56}},"styled-button":{startLoc:{col:48,line:52},endLoc:{col:1,line:56},startBody:{col:48,line:52},endBody:{col:1,line:56}}}}},component:c,title:"Components/Button",argTypes:{content:{defaultValue:()=>d("span",{children:"Button"},void 0,!1,{fileName:B,lineNumber:21,columnNumber:27},void 0)},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",margin:"0em",borderWidth:"1px",gap:"0.5em"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},k=g(e=>d(E,{children:d(c,{...e},void 0,!1,{fileName:B,lineNumber:62,columnNumber:5},void 0)},void 0,!1,{fileName:B,lineNumber:61,columnNumber:3},void 0),"Template"),R=k.bind({});R.args={content:"Button CTA",onClick:()=>alert("Button clicked!"),variant:y.primary,size:f.lg,theme:s};const A=k.bind({});A.args={content:"Styled Button",onClick:()=>alert("Button clicked!"),variant:y.primary,size:f.lg,theme:s,style:{backgroundColor:s.palette.success500,color:s.palette.white}};const K=["CustomButton","StyledButton"];export{R as CustomButton,A as StyledButton,K as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-e3aff064.js.map
