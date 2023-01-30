var w=Object.defineProperty;var g=(e,n)=>w(e,"name",{value:n,configurable:!0});import{s as b,C,T as m,S as E}from"./index-81b13a9a.js";import{j as u}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var y=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(y||{}),f=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(f||{});const R=b.button(()=>({theme:e,disabled:n,variant:o,size:i,style:t})=>{const r=e||m,{gray50:a,white:d,primary500:c,secondary500:p,gray200:l,error500:v,error100:h,primary800:S,secondary800:T,error800:N}=r.palette,_={primary:n?l:c,secondary:n?l:p,tertiary:n?h:v},V={primary:S,secondary:T,tertiary:N},z={primary:n?l:c,secondary:n?l:p,tertiary:n?h:v},O={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},$={primary:d,secondary:a,tertiary:d};return C`
    align-items: center;
    justify-content: center;
    background-color: ${(t==null?void 0:t.backgroundColor)||_[o]};
    border: 1px solid ${(t==null?void 0:t.borderColor)||z[o]};
    border-radius: ${(t==null?void 0:t.borderRadius)||r.borderRadius.lg||"0.5rem"};
    padding: ${(t==null?void 0:t.padding)||O[i]};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${V[o]};
      div {
        color: ${$[o]};
      }
    }
  `}),j=b.div(({disabled:e,theme:n,size:o,variant:i,style:t})=>{const r=n||m,{gray300:a,gray700:d,white:c}=r.palette,p={xs:"0.875rem",sm:"0.875rem",md:"1rem",lg:"1rem",xl:"1.125rem"},l={primary:e?a:c,secondary:e?a:d,tertiary:c};return C`
    color: ${(t==null?void 0:t.color)||l[i]};
    font-size: ${(t==null?void 0:t.fontSize)||p[o]};
  `});var x="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.tsx";const s=g(({onClick:e,content:n,disabled:o=!1,variant:i=y.primary,size:t=f.lg,style:r,theme:a})=>u(R,{style:r,disabled:o,variant:i,size:t,onClick:e,theme:a,children:u(j,{size:t,disabled:o,variant:i,theme:a,style:r,children:n},void 0,!1,{fileName:x,lineNumber:17,columnNumber:7},void 0)},void 0,!1,{fileName:x,lineNumber:16,columnNumber:5},void 0),"Button");try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"ButtonVariants.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"ButtonSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}var B="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.stories.tsx";const F={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"custom-button":{startLoc:{col:48,line:52},endLoc:{col:1,line:56},startBody:{col:48,line:52},endBody:{col:1,line:56}},"styled-button":{startLoc:{col:48,line:52},endLoc:{col:1,line:56},startBody:{col:48,line:52},endBody:{col:1,line:56}}}}},component:s,title:"Components/Button",argTypes:{content:{defaultValue:()=>u("span",{children:"Button"},void 0,!1,{fileName:B,lineNumber:21,columnNumber:27},void 0)},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",margin:"0em",borderWidth:"1px",gap:"0.5em"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},k=g(e=>u(E,{children:u(s,{...e},void 0,!1,{fileName:B,lineNumber:62,columnNumber:5},void 0)},void 0,!1,{fileName:B,lineNumber:61,columnNumber:3},void 0),"Template"),q=k.bind({});q.args={content:"Button CTA",onClick:()=>alert("Button clicked!"),variant:y.primary,size:f.lg,theme:m};const A=k.bind({});A.args={content:"Styled Button",onClick:()=>alert("Button clicked!"),variant:y.primary,size:f.lg,theme:m,style:{backgroundColor:m.palette.success500,color:m.palette.white}};const K=["CustomButton","StyledButton"];export{q as CustomButton,A as StyledButton,K as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-9570019a.js.map
