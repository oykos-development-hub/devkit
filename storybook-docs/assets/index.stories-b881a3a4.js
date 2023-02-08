var T=Object.defineProperty;var d=(e,n)=>T(e,"name",{value:n,configurable:!0});import{s as g,C as y,T as h,S as A}from"./index-6d3d827b.js";import{X as _,D as $}from"./CircleCheckIcon-8f1547e2.js";import{T as C}from"./index-82ce28a5.js";import{a as u,j as a}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var x=(e=>(e.primary="primary",e.error="error",e.success="success",e.info="info",e))(x||{}),v=(e=>(e.sm="sm",e.md="md",e.lg="lg",e))(v||{});const f=g.div(()=>({size:e,style:n,theme:l})=>{const s=l||h,{white:c}=s.palette||{},i=(n==null?void 0:n.color)||c,o={sm:"0.75rem",md:"0.875rem",lg:"1rem"},t={sm:"1.25rem",md:"1.25rem",lg:"1.5rem"},r={sm:"0.729rem",md:"0.729rem",lg:"0.875rem"},p={sm:"1rem",md:"1.25rem",lg:"1.5rem"};return y`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 0.75rem;

    & p {
      font-size: ${o[e]};
      line-height: ${p[e]};
      color: ${i};
    }

    & p:nth-child(1) {
      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${i};
    }

    & svg:first-child {
      width: ${t[e]} !important;
      height: ${t[e]} !important;
    }

    & svg:last-child {
      width: ${r[e]} !important;
      height: ${r[e]} !important;
    }

    & svg path {
      fill: ${i} !important;
      color: ${i} !important;
    }

    ${{...n}}
  `}),w=g.div(()=>({theme:e,variant:n,style:l})=>{var p;const s=e||h,{primary500:c,success500:i,error500:o,gray600:t}=s.palette||{},r={primary:c,success:i,error:o,info:t};return y`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${((p=s.fontFamily)==null?void 0:p.one)||"sans-serif"};
    background-color: ${r[n]};
    border-radius: 0.125rem;
    padding: 0;
    gap: 0.75rem;
    z-index: 999;

    ${{...l}}
  `}),S=g.div(()=>({size:e})=>{const n={sm:"0.75rem",md:"0.75rem",lg:"1rem"};return y`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    align-items: center;
    align-self: stretch;
    word-wrap: break-word;
    padding: ${{sm:"0.5rem",md:"0.75rem",lg:"1rem"}[e]};
    gap: ${n[e]};
  `}),m=d(({variant:e=x.success,content:n,additionalText:l,icon:s,closeIcon:c=!0,onClose:i,size:o=v.md,style:t,theme:r})=>u(w,{variant:e,style:t,theme:r,children:[u(S,{size:o,children:[u(f,{style:t,size:o,theme:r,children:[s&&s,a(C,{content:n,theme:r,style:t})]}),c&&a(f,{style:t,size:o,theme:r,children:a(_,{onClick:i})})]}),l&&a(S,{size:o,children:a(f,{style:t,size:o,theme:r,children:a(C,{content:l,theme:r,style:t})})})]}),"Alert");try{m.displayName="Alert",m.__docgenInfo={description:"",displayName:"Alert",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode | Element"}},closeIcon:{defaultValue:{value:"true"},description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/index.tsx#Alert"]={docgenInfo:m.__docgenInfo,name:"Alert",path:"src/components/alert/index.tsx#Alert"})}catch{}const M={parameters:{storySource:{source:`import React from "react";
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
      defaultValue: {
        width: "fit-content",
        height: "fit-content",
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
`,locationsMap:{custom:{startLoc:{col:47,line:47},endLoc:{col:1,line:51},startBody:{col:47,line:47},endBody:{col:1,line:51}}}}},component:m,title:"Example/Alert",argTypes:{content:{control:{type:"text"}},variant:{control:{type:"radio",options:["primary","success","error","info"]}},onClose:{defaultValue:()=>alert("Closed!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content"}},size:{control:{type:"radio",options:["sm","md","lg"]}}}},V=d(e=>a(A,{children:a(m,{...e})}),"Template"),b=V.bind({});b.args={content:"Title",variant:x.success,size:v.md,icon:a($,{}),theme:h};const z=["Custom"];export{b as Custom,z as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-b881a3a4.js.map
