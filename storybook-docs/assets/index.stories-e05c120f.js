var $=Object.defineProperty;var f=(e,t)=>$(e,"name",{value:t,configurable:!0});import{s as h,C as x,T as u,S as w}from"./index-25fcb85b.js";import{j as d}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var m=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(m||{}),y=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(y||{});const q=h.button(()=>({theme:e,disabled:t,variant:o,size:l,style:n})=>{const{gray50:r,white:a,primary500:s,secondary500:p,gray200:i,error500:g,error100:B,primary800:v,secondary800:b,error800:k}=e.palette,T={primary:t?i:s,secondary:t?i:p,tertiary:t?B:g},S={primary:v,secondary:b,tertiary:k},V={primary:t?i:s,secondary:t?i:p,tertiary:t?B:g},_={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},z={primary:a,secondary:r,tertiary:a};return x`
    align-items: center;
    justify-content: center;
    background-color: ${T[o]};
    border: 1px solid ${V[o]};
    border-radius: ${e.borderRadius.lg||"0.5rem"};
    padding: ${_[l]};
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${S[o]};
      div {
        color: ${z[o]};
      }
    }
    ${{...n}}
  `}),E=h.div(({disabled:e,theme:t,size:o,variant:l,customStyle:n})=>{const{gray300:r,gray700:a,white:s}=t.palette,p={xs:"0.875rem",sm:"0.875rem",md:"1rem",lg:"1rem",xl:"1.125rem"},i={primary:e?r:s,secondary:e?r:a,tertiary:s};return x`
    color: ${(n==null?void 0:n.color)||i[l]};
    font-size: ${(n==null?void 0:n.fontSize)||p[o]};
  `}),c=f(({onClick:e,content:t,disabled:o=!1,variant:l=m.primary,size:n=y.lg,style:r,theme:a})=>d(q,{style:r,disabled:o,variant:l,size:n,onClick:e,theme:a||u,children:d(E,{size:n,disabled:o,variant:l,theme:a,customStyle:r,children:t})}),"Button");try{c.displayName="Button",c.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"ButtonVariants.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"ButtonSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:c.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}const N={parameters:{storySource:{source:`import React from "react";
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
      defaultValue: Theme,
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
};

export const StyledButton = Template.bind({});
StyledButton.args = {
  content: "Styled Button",
  onClick: () => alert("Button clicked!"),
  variant: ButtonVariants.primary,
  size: ButtonSizes.lg,
  style: {
    backgroundColor: Theme.palette.success500,
    color: Theme.palette.white,
  },
};
`,locationsMap:{"custom-button":{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},"styled-button":{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}}}}},component:c,title:"Components/Button",argTypes:{content:{defaultValue:()=>d("span",{children:"Button"})},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"},defaultValue:u},style:{defaultValue:{width:"fit-content",height:"fit-content",margin:"0em",borderWidth:"1px",gap:"0.5em"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},C=f(e=>d(w,{children:d(c,{...e})}),"Template"),O=C.bind({});O.args={content:"Button CTA",onClick:()=>alert("Button clicked!"),variant:m.primary,size:y.lg};const R=C.bind({});R.args={content:"Styled Button",onClick:()=>alert("Button clicked!"),variant:m.primary,size:y.lg,style:{backgroundColor:u.palette.success500,color:u.palette.white}};const P=["CustomButton","StyledButton"];export{O as CustomButton,R as StyledButton,P as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-e05c120f.js.map
