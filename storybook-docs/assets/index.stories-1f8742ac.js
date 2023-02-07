var w=Object.defineProperty;var s=(e,t)=>w(e,"name",{value:t,configurable:!0});import{s as u,C as x,T as S,S as b}from"./index-4ae2c517.js";import{D as E,C as O,X as L}from"./CircleCheckIcon-3119f231.js";import{T as C}from"./index-b11d07c1.js";import{j as r,a as f}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var y=(e=>(e.primary="primary",e.error="error",e.success="success",e.info="info",e))(y||{}),g=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(g||{});const v=u.div(()=>({style:e})=>x`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 1rem;

    ${{...e}}
  `),R=u.div(()=>({theme:e,variant:t,size:i,style:n})=>{var h;const c=e||S,{white:o,primary500:a,success500:m,error500:T,gray600:A}=c.palette||{},I={primary:a,success:m,error:T,info:A},V={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},p={primary:o,success:o,error:o,info:o};return x`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${((h=c.fontFamily)==null?void 0:h.one)||"sans-serif"};
    background-color: ${I[t]};
    color: ${(n==null?void 0:n.color)||p[t]} !important;
    border-radius: 0.5rem;
    padding: ${V[i]};
    gap: 0.75rem;
    z-index: 999;

    & p,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    span,
    label {
      color: ${(n==null?void 0:n.color)||p[t]};
    }

    & svg path {
      fill: ${(n==null?void 0:n.color)||p[t]} !important;
      color: ${(n==null?void 0:n.color)||p[t]} !important;
    }

    ${{...n}}
  `}),_=u.div(()=>({size:e})=>x`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    order: 0;
    flex-grow: 1;
    word-wrap: break-word;
    padding: ${{xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"}[e]};
  `),q=u.div`
  display: flex;
  align-self: stretch;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`,d=s(({variant:e})=>r(q,{children:s(()=>{switch(e){case"success":return r(O,{});case"info":case"primary":case"error":return r(E,{});default:return null}},"renderIcon")()}),"LeftIconContent");try{d.displayName="LeftIconContent",d.__docgenInfo={description:"",displayName:"LeftIconContent",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/icon-content.tsx#LeftIconContent"]={docgenInfo:d.__docgenInfo,name:"LeftIconContent",path:"src/components/alert/styles/icon-content.tsx#LeftIconContent"})}catch{}const l=s(({variant:e=y.success,content:t,additionalText:i,closeIcon:n=!0,onClose:c,size:o=g.xs,style:a,theme:m})=>f(R,{variant:e,size:o,style:a,theme:m,children:[f(_,{size:o,children:[f(v,{style:a,children:[r(d,{variant:e}),r(C,{variant:"h6",content:t,theme:m,style:a})]}),n&&r(v,{style:a,children:r(L,{onClick:c})})]}),i&&r(_,{size:o,children:r(C,{variant:"p",content:i})})]}),"Alert");try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:{value:"true"},description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/index.tsx#Alert"]={docgenInfo:l.__docgenInfo,name:"Alert",path:"src/components/alert/index.tsx#Alert"})}catch{}const D={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { Theme } from "../../shared/theme";

export default {
  component: Alert,
  title: "Example/Alert",
  argTypes: {
    content: {
      defaultValue: () => <span>Test</span>,
    },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "success", "error", "info"],
      },
    },
    onClose: {
      defaultValue: () => alert("Closed!"),
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
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["xs", "sm", "md", "lg", "xl"],
      },
    },
  },
} as ComponentMeta<typeof Alert>;

const Template: ComponentStory<typeof Alert> = (args: AlertProps) => (
  <StoryWrapper>
    <Alert {...args} />
  </StoryWrapper>
);

export const Custom = Template.bind({});
Custom.args = {
  content: "Title",
  variant: AlertVariants.success,
  size: AlertSizes.xs,
  theme: Theme,
};
`,locationsMap:{custom:{startLoc:{col:47,line:44},endLoc:{col:1,line:48},startBody:{col:47,line:44},endBody:{col:1,line:48}}}}},component:l,title:"Example/Alert",argTypes:{content:{defaultValue:()=>r("span",{children:"Test"})},variant:{control:{type:"radio",options:["primary","success","error","info"]}},onClose:{defaultValue:()=>alert("Closed!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},$=s(e=>r(b,{children:r(l,{...e})}),"Template"),N=$.bind({});N.args={content:"Title",variant:y.success,size:g.xs,theme:S};const P=["Custom"];export{N as Custom,P as __namedExportsOrder,D as default};
//# sourceMappingURL=index.stories-1f8742ac.js.map
