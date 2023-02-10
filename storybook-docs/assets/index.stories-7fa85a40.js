var A=Object.defineProperty;var d=(n,e)=>A(n,"name",{value:e,configurable:!0});import{s as f,C as g,T as h,S as _}from"./index-6d3d827b.js";import{X as $,D as w}from"./CircleCheckIcon-8f1547e2.js";import{T as S}from"./index-82ce28a5.js";import{a as s,j as a}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var x=(n=>(n.primary="primary",n.error="error",n.success="success",n.info="info",n))(x||{}),v=(n=>(n.sm="sm",n.md="md",n.lg="lg",n))(v||{});const u=f.div(()=>({size:n,style:e,theme:c})=>{const m=c||h,{white:p}=m.palette,i=(e==null?void 0:e.color)||p,t={sm:"0.75rem",md:"0.875rem",lg:"1rem"},r={sm:"1.25rem",md:"1.25rem",lg:"1.5rem"},o={sm:"1rem",md:"1.25rem",lg:"1.5rem"};return g`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 0.75rem;

    & p {
      font-size: ${(e==null?void 0:e.fontSize)||t[n]};
      line-height: ${(e==null?void 0:e.lineHeight)||o[n]};
      color: ${(e==null?void 0:e.color)||i};
    }

    & p:nth-child(1) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${(e==null?void 0:e.color)||i};
    }

    & svg:first-child {
      width: ${(e==null?void 0:e.width)||r[n]} !important;
      height: ${(e==null?void 0:e.height)||r[n]} !important;
    }

    & svg:last-child {
      width: ${(e==null?void 0:e.width)||r[n]} !important;
      height: ${(e==null?void 0:e.height)||r[n]} !important;
    }

    & svg path {
      fill: ${(e==null?void 0:e.color)||i} !important;
      color: ${(e==null?void 0:e.color)||i} !important;
    }

    ${{...e}}
  `}),b=f.div(()=>({theme:n,variant:e,style:c})=>{var C;const m=n||h,{primary500:p,success500:i,error500:t,gray600:r}=m.palette||{},o={primary:p,success:i,error:t,info:r};return g`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${((C=m.fontFamily)==null?void 0:C.one)||"sans-serif"};
    background-color: ${o[e]};
    border-radius: 0.125rem;
    padding: 0;
    gap: 0.75rem;
    z-index: 999;

    ${{...c}}
  `}),T=f.div(()=>({size:n})=>{const e={sm:"0.75rem",md:"0.75rem",lg:"1rem"};return g`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${{sm:"0.5rem",md:"0.75rem",lg:"1rem"}[n]};
    gap: ${e[n]};
  `}),l=d(({variant:n=x.success,content:e,additionalText:c,icon:m,closeIcon:p=!0,onClose:i,size:t=v.md,style:r,theme:o})=>s(b,{variant:n,style:r,theme:o,children:[s(T,{size:t,children:[s(u,{style:r,size:t,theme:o,children:[m&&m,a(S,{content:e,theme:o,style:r})]}),p&&a(u,{style:r,size:t,theme:o,children:a($,{onClick:i})})]}),c&&a(T,{size:t,children:a(u,{style:r,size:t,theme:o,children:a(S,{content:c,theme:o,style:r})})})]}),"Alert");try{l.displayName="Alert",l.__docgenInfo={description:"",displayName:"Alert",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode | Element"}},closeIcon:{defaultValue:{value:"true"},description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/index.tsx#Alert"]={docgenInfo:l.__docgenInfo,name:"Alert",path:"src/components/alert/index.tsx#Alert"})}catch{}const z={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { AlertProps, AlertSizes, AlertVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Alert } from "./index";
import { Theme } from "../../shared/theme";
import { DangerIcon } from "../icon";

export default {
  component: Alert,
  title: "Example/Alert",
  argTypes: {
    content: {
      control: {
        type: "text",
      },
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
      control: {
        type: "object",
      },
    },
    size: {
      control: {
        type: "radio",
        options: ["sm", "md", "lg"],
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
  size: AlertSizes.md,
  icon: <DangerIcon />,
  theme: Theme,
};
`,locationsMap:{custom:{startLoc:{col:47,line:46},endLoc:{col:1,line:50},startBody:{col:47,line:46},endBody:{col:1,line:50}}}}},component:l,title:"Example/Alert",argTypes:{content:{control:{type:"text"}},variant:{control:{type:"radio",options:["primary","success","error","info"]}},onClose:{defaultValue:()=>alert("Closed!")},theme:{control:{type:"object"}},style:{control:{type:"object"}},size:{control:{type:"radio",options:["sm","md","lg"]}}}},V=d(n=>a(_,{children:a(l,{...n})}),"Template"),E=V.bind({});E.args={content:"Title",variant:x.success,size:v.md,icon:a(w,{}),theme:h};const B=["Custom"];export{E as Custom,B as __namedExportsOrder,z as default};
//# sourceMappingURL=index.stories-7fa85a40.js.map
