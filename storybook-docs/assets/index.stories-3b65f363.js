var w=Object.defineProperty;var g=(e,t)=>w(e,"name",{value:t,configurable:!0});import{S as q}from"./story-wrapper-f2e77747.js";import{s as x,C,T as s}from"./index-4d56f514.js";import{j as p}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var y=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(y||{}),f=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(f||{});const E=x.button(()=>({theme:e,disabled:t,variant:o,size:l,style:n})=>{const r=e||s,{gray50:a,white:d,primary500:c,secondary500:u,gray200:i,error500:B,error100:h,primary800:b,secondary800:T,error800:k}=r.palette,S={primary:t?i:c,secondary:t?i:u,tertiary:t?h:B},_={primary:b,secondary:T,tertiary:k},V={primary:t?i:c,secondary:t?i:u,tertiary:t?h:B},z={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},$={primary:d,secondary:a,tertiary:d};return C`
    align-items: center;
    justify-content: center;
    background-color: ${S[o]};
    border: 1px solid ${V[o]};
    border-radius: ${r.borderRadius.lg||"0.5rem"};
    padding: ${z[l]};
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${_[o]};
      div {
        color: ${$[o]};
      }
    }
    ${{...n}}
  `}),O=x.div(({disabled:e,theme:t,size:o,variant:l,customStyle:n})=>{const r=t||s,{gray300:a,gray700:d,white:c}=r.palette,u={xs:"0.875rem",sm:"0.875rem",md:"1rem",lg:"1rem",xl:"1.125rem"},i={primary:e?a:c,secondary:e?a:d,tertiary:c};return C`
    color: ${(n==null?void 0:n.color)||i[l]};
    font-size: ${(n==null?void 0:n.fontSize)||u[o]};
  `}),m=g(({onClick:e,content:t,disabled:o=!1,variant:l=y.primary,size:n=f.lg,style:r,theme:a})=>p(E,{style:r,disabled:o,variant:l,size:n,onClick:e,theme:a,children:p(O,{size:n,disabled:o,variant:l,theme:a,customStyle:r,children:t})}),"Button");try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"ButtonVariants.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"ButtonSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}const K={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"custom-button":{startLoc:{col:48,line:52},endLoc:{col:1,line:56},startBody:{col:48,line:52},endBody:{col:1,line:56}},"styled-button":{startLoc:{col:48,line:52},endLoc:{col:1,line:56},startBody:{col:48,line:52},endBody:{col:1,line:56}}}}},component:m,title:"Components/Button",argTypes:{content:{defaultValue:()=>p("span",{children:"Button"})},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",margin:"0em",borderWidth:"1px",gap:"0.5em"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},v=g(e=>p(q,{children:p(m,{...e})}),"Template"),R=v.bind({});R.args={content:"Button CTA",onClick:()=>alert("Button clicked!"),variant:y.primary,size:f.lg,theme:s};const A=v.bind({});A.args={content:"Styled Button",onClick:()=>alert("Button clicked!"),variant:y.primary,size:f.lg,theme:s,style:{backgroundColor:s.palette.success500,color:s.palette.white}};const U=["CustomButton","StyledButton"];export{R as CustomButton,A as StyledButton,U as __namedExportsOrder,K as default};
//# sourceMappingURL=index.stories-3b65f363.js.map
