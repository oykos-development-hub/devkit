var I=Object.defineProperty;var s=(e,t)=>I(e,"name",{value:t,configurable:!0});import{s as i,C as v,T,S as O}from"./index-4ae2c517.js";import{D as L,C as b,X as w}from"./CircleCheckIcon-a7d560ce.js";import{j as a,a as x}from"./jsx-runtime-82e0d3de.js";import{T as V}from"./index-b11d07c1.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var g=(e=>(e.primary="primary",e.error="error",e.success="success",e.info="info",e))(g||{}),_=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(_||{});const N=i.div`
  display: flex;
  align-self: stretch;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`,p=s(({variant:e})=>a(N,{children:s(()=>{switch(e){case"success":return a(b,{});case"info":case"primary":case"error":return a(L,{});default:return null}},"renderIcon")()}),"LeftIconContent");try{p.displayName="LeftIconContent",p.__docgenInfo={description:"",displayName:"LeftIconContent",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/icon-content.tsx#LeftIconContent"]={docgenInfo:p.__docgenInfo,name:"LeftIconContent",path:"src/components/alert/styles/icon-content.tsx#LeftIconContent"})}catch{}const M=i.div`
  display: flex;
  order: 0;
  flex-direction: row;
  padding: 0;
  gap: 1rem;
`,C=i.div(()=>({style:e})=>v`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 1rem;

    ${{...e}}
  `),f=s(({content:e,variant:t=g.success,size:o,style:n,theme:l})=>x(M,{children:[a(p,{variant:t,size:o}),a(V,{variant:"h6",content:e,theme:l,style:n})]}),"LeftContent"),y=i.div(()=>({style:e})=>v`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0;
    gap: 1rem;

    & svg:hover {
      cursor: pointer;
    }

    ${{...e}}
  `);try{C.displayName="Content",C.__docgenInfo={description:"",displayName:"Content",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/content.tsx#Content"]={docgenInfo:C.__docgenInfo,name:"Content",path:"src/components/alert/styles/content.tsx#Content"})}catch{}try{f.displayName="LeftContent",f.__docgenInfo={description:"",displayName:"LeftContent",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/content.tsx#LeftContent"]={docgenInfo:f.__docgenInfo,name:"LeftContent",path:"src/components/alert/styles/content.tsx#LeftContent"})}catch{}try{y.displayName="RightContent",y.__docgenInfo={description:"",displayName:"RightContent",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/content.tsx#RightContent"]={docgenInfo:y.__docgenInfo,name:"RightContent",path:"src/components/alert/styles/content.tsx#RightContent"})}catch{}const D=i.div(()=>({theme:e,variant:t,size:o,style:n})=>{var h;const l=e||T,{white:r,primary500:u,success500:c,error500:q,gray600:A}=l.palette||{},E={primary:u,success:c,error:q,info:A},R={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},m={primary:r,success:r,error:r,info:r};return v`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${((h=l.fontFamily)==null?void 0:h.one)||"sans-serif"};
    background-color: ${E[t]};
    color: ${(n==null?void 0:n.color)||m[t]} !important;
    border-radius: 0.5rem;
    padding: ${R[o]};
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
      color: ${(n==null?void 0:n.color)||m[t]};
    }

    & svg path {
      fill: ${(n==null?void 0:n.color)||m[t]} !important;
      color: ${(n==null?void 0:n.color)||m[t]} !important;
    }

    ${{...n}}
  `}),S=i.div(()=>({size:e})=>v`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    order: 0;
    flex-grow: 1;
    word-wrap: break-word;
    padding: ${{xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"}[e]};
  `),d=s(({variant:e=g.success,content:t,additionalText:o,closeIcon:n=!0,onClose:l,size:r=_.xs,style:u,theme:c})=>x(D,{variant:e,size:r,style:u,theme:c,children:[x(S,{size:r,children:[a(f,{variant:e,content:t,size:r,style:u,theme:c}),n&&a(y,{style:u,children:a(w,{onClick:l})})]}),o&&a(S,{size:r,children:a(V,{variant:"p",content:o})})]}),"Alert");try{d.displayName="Alert",d.__docgenInfo={description:"",displayName:"Alert",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.xs"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:{value:"true"},description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/index.tsx#Alert"]={docgenInfo:d.__docgenInfo,name:"Alert",path:"src/components/alert/index.tsx#Alert"})}catch{}const X={parameters:{storySource:{source:`import React from "react";
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
  additionalText: "Description",
  size: AlertSizes.xs,
  theme: Theme,
};
`,locationsMap:{custom:{startLoc:{col:47,line:44},endLoc:{col:1,line:48},startBody:{col:47,line:44},endBody:{col:1,line:48}}}}},component:d,title:"Example/Alert",argTypes:{content:{defaultValue:()=>a("span",{children:"Test"})},variant:{control:{type:"radio",options:["primary","success","error","info"]}},onClose:{defaultValue:()=>alert("Closed!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},B=s(e=>a(O,{children:a(d,{...e})}),"Template"),$=B.bind({});$.args={content:"Title",variant:g.success,additionalText:"Description",size:_.xs,theme:T};const F=["Custom"];export{$ as Custom,F as __namedExportsOrder,X as default};
//# sourceMappingURL=index.stories-33168db8.js.map
