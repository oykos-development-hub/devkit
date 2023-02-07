var V=Object.defineProperty;var d=(e,r)=>V(e,"name",{value:r,configurable:!0});import{s as f,C as x,T as g,S as w}from"./index-6d3d827b.js";import{X as q,D as E}from"./CircleCheckIcon-8f1547e2.js";import{T as C}from"./index-dabc6d02.js";import{a as u,j as a}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var h=(e=>(e.primary="primary",e.error="error",e.success="success",e.info="info",e))(h||{}),y=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(y||{});const T=f.div(()=>({size:e,style:r,theme:s})=>{const o=(s||g||{}).typographyFontSize.body,t={xs:o.sm,sm:o.sm,md:o.md,lg:o.lg,xl:o.lg};return x`
    display: flex;
    flex-direction: row;
    padding: 0;
    gap: 1rem;

    & p {
      font-size: ${(r==null?void 0:r.fontSize)||t[e]} !important;
    }

    ${{...r}}
  `}),$=f.div(()=>({theme:e,variant:r,size:s,style:n})=>{var v;const o=e||g,{white:t,primary500:l,success500:i,error500:m,gray600:A}=o.palette||{},_={primary:l,success:i,error:m,info:A},b={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},p={primary:t,success:t,error:t,info:t};return x`
    flex: none;
    align-items: center;
    max-width: 828px;
    max-height: fit-content;
    flex-grow: 1;
    font-family: ${((v=o.fontFamily)==null?void 0:v.one)||"sans-serif"};
    background-color: ${_[r]};
    color: ${(n==null?void 0:n.color)||p[r]} !important;
    border-radius: 0.5rem;
    padding: ${b[s]};
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
      color: ${(n==null?void 0:n.color)||p[r]};
    }

    & svg path {
      fill: ${(n==null?void 0:n.color)||p[r]} !important;
      color: ${(n==null?void 0:n.color)||p[r]} !important;
    }

    ${{...n}}
  `}),S=f.div(()=>({size:e})=>x`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-content: flex-start;
    order: 0;
    flex-grow: 1;
    word-wrap: break-word;
    padding: ${{xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"}[e]};
  `),c=d(({variant:e=h.success,content:r,additionalText:s,icon:n,closeIcon:o=!0,onClose:t,size:l=y.md,style:i,theme:m})=>u($,{variant:e,size:l,style:i,theme:m,children:[u(S,{size:l,children:[u(T,{style:i,size:l,theme:m,children:[n&&n,a(C,{content:r,theme:m,style:i})]}),o&&a(T,{style:i,size:l,theme:m,children:a(q,{onClick:t})})]}),s&&a(S,{size:l,children:a(C,{variant:"p",content:s})})]}),"Alert");try{c.displayName="Alert",c.__docgenInfo={description:"",displayName:"Alert",props:{content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"AlertSizes.md"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},variant:{defaultValue:{value:"AlertVariants.success"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"error"'},{value:'"success"'},{value:'"info"'}]}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"ReactNode | Element"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactNode | Element"}},closeIcon:{defaultValue:{value:"true"},description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/alert/index.tsx#Alert"]={docgenInfo:c.__docgenInfo,name:"Alert",path:"src/components/alert/index.tsx#Alert"})}catch{}const L={parameters:{storySource:{source:`import React from "react";
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
  icon: <DangerIcon />,
  size: AlertSizes.md,
  theme: Theme,
};
`,locationsMap:{custom:{startLoc:{col:47,line:47},endLoc:{col:1,line:51},startBody:{col:47,line:47},endBody:{col:1,line:51}}}}},component:c,title:"Example/Alert",argTypes:{content:{control:{type:"text"}},variant:{control:{type:"radio",options:["primary","success","error","info"]}},onClose:{defaultValue:()=>alert("Closed!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},I=d(e=>a(w,{children:a(c,{...e})}),"Template"),R=I.bind({});R.args={content:"Title",variant:h.success,icon:a(E,{}),size:y.md,theme:g};const W=["Custom"];export{R as Custom,W as __namedExportsOrder,L as default};
//# sourceMappingURL=index.stories-7d173916.js.map
