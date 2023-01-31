var q=Object.defineProperty;var s=(e,t)=>q(e,"name",{value:t,configurable:!0});import{s as y,C as A,T as C,S as I}from"./index-4ae2c517.js";import{X as E,D as N,C as O}from"./CircleCheckIcon-3119f231.js";import{a as x,j as n}from"./jsx-runtime-82e0d3de.js";import{T as g}from"./index-b11d07c1.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var m=(e=>(e.primary="primary",e.error="error",e.success="success",e.info="info",e))(m||{}),p=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(p||{});const R=y.div`
  display: flex;
  align-self: flex-start;
  position: relative;
  flex-direction: row;
  align-items: flex-start;
  padding: 0;
  gap: 1rem;
`,c=s(({variant:e,closeIcon:t,onClose:o,children:a})=>x(R,{children:[s(()=>{switch(e){case"success":return n(O,{});case"info":case"primary":case"error":return n(N,{});default:return null}},"renderIcon")(),a,t&&n(E,{onClick:o})]}),"IconContainer");try{c.displayName="IconContainer",c.__docgenInfo={description:"",displayName:"IconContainer",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/icon-container.tsx#IconContainer"]={docgenInfo:c.__docgenInfo,name:"IconContainer",path:"src/components/alert/styles/icon-container.tsx#IconContainer"})}catch{}const b=y.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
`,d=s(({content:e,variant:t=m.success,additionalText:o="",closeIcon:a=!1,onClose:l,size:r=p.lg,style:i,theme:f})=>x(b,{children:[n(c,{variant:t,className:"left",size:r,closeIcon:a,onClose:l,children:n(g,{variant:"h6",content:e,theme:f,style:i})}),o&&n(g,{variant:"p",content:o})]}),"Content");try{d.displayName="Content",d.__docgenInfo={description:"",displayName:"Content",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:{value:"false"},description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:{value:""},description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/styles/content.tsx#Content"]={docgenInfo:d.__docgenInfo,name:"Content",path:"src/components/alert/styles/content.tsx#Content"})}catch{}const z=y.div(()=>({theme:e,variant:t,size:o,style:a})=>{var v;const l=e||C,{white:r,primary500:i,success500:f,error500:_,gray600:h}=l.palette||{},S={primary:i,success:f,error:_,info:h},V={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},T={primary:r,success:r,error:r,info:r};return A`
    font-family: ${((v=l.fontFamily)==null?void 0:v.one)||"sans-serif"};
    background-color: ${S[t]};
    color: ${(a==null?void 0:a.color)||T[t]};
    display: flex;
    align-content: center;
    border-radius: 0.5rem;
    padding: ${V[o]};
    gap: 0.75rem;
    z-index: 999;
    flex: none;
    order: 0;
    flex-grow: 1;

    ${{...a}}
  `}),u=s(({variant:e=m.primary,content:t,additionalText:o,closeIcon:a,size:l=p.lg,style:r,theme:i})=>n(z,{variant:e,size:l,style:r,theme:i,children:n(d,{variant:e,content:t,size:l,additionalText:o,closeIcon:a,style:r})}),"Alert");try{u.displayName="Alert",u.__docgenInfo={description:"",displayName:"Alert",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"AlertVariants.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/index.tsx#Alert"]={docgenInfo:u.__docgenInfo,name:"Alert",path:"src/components/alert/index.tsx#Alert"})}catch{}const $={parameters:{storySource:{source:`import React from "react";
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
  size: AlertSizes.lg,
  theme: Theme,
};
`,locationsMap:{custom:{startLoc:{col:47,line:44},endLoc:{col:1,line:48},startBody:{col:47,line:44},endBody:{col:1,line:48}}}}},component:u,title:"Example/Alert",argTypes:{content:{defaultValue:()=>n("span",{children:"Test"})},variant:{control:{type:"radio",options:["primary","success","error","info"]}},onClose:{defaultValue:()=>alert("Closed!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},M=s(e=>n(I,{children:n(u,{...e})}),"Template"),w=M.bind({});w.args={content:"Title",variant:m.success,size:p.lg,theme:C};const W=["Custom"];export{w as Custom,W as __namedExportsOrder,$ as default};
//# sourceMappingURL=index.stories-1a421f22.js.map
