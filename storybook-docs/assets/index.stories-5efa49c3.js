var f=Object.defineProperty;var d=(e,n)=>f(e,"name",{value:n,configurable:!0});import{s as p,C as m,T as g}from"./index-4d56f514.js";import{H as c,B as h,a as b,T as s}from"./index-402a8805.js";import{P as v,X as M}from"./CircleCheckIcon-2e67a8b8.js";import{j as t,a}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const C=p.div(({open:e})=>m`
    display: ${e?"flex":"none"};
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
  `),T=p.div(()=>({theme:e,variant:n,style:i})=>{const{white:r,black:o}=e.palette;return m`
    background-color: ${n==="dark"?o:r};
    width: fit-content;
    min-width: 25%;
    padding: 1.5em;
    box-shadow: 0px 4px 8px -2px rgba(33, 33, 33, 0.07), 0px 12px 16px -4px rgba(33, 33, 33, 0.1);
    border-radius: 0.5em;

    ${c}, ${h}, ${b} {
      color: ${n==="dark"?r:o};
    }

    ${{...i}}
  `}),_=p.div(()=>({theme:e})=>{const{gray500:n}=e.palette;return m`
    display: flex;
    justify-content: flex-end;
    align-items: center;

    ${c} {
      flex-grow: 1;
    }

    & ${v} {
      fill: ${n};
    }
  `}),l=d(({theme:e=g,title:n,content:i,open:r,onClose:o,variant:u="light",style:y})=>t(C,{open:r,onClick:o&&o(),children:a(T,{theme:e,variant:u,onClick:x=>{x.stopPropagation()},style:y,children:[a(_,{theme:e,children:[n&&t(s,{content:n,variant:"h6"}),t(M,{size:"16px",onClick:o&&o()})]}),i]})}),"Modal");try{l.displayName="Modal",l.__docgenInfo={description:"",displayName:"Modal",props:{theme:{defaultValue:{value:`{
  mediaScreenBreakpoints: {
    xs: "480px",
    sm: "576px",
    md: "767px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
  borderRadius: {
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "16px",
    full: "50%",
  },
  borderWidth: {
    xs: "1px",
    sm: "2px",
    md: "3px",
    lg: "4px",
  },
  fontSize: {
    xs: "0.6rem",
    sm: "1rem",
    md: "1.6rem",
    lg: "2.8rem",
    xl: "4rem",
    xxl: "7rem",
  },
  lineHeight: {
    xs: "0.85rem",
    sm: "1.2rem",
    md: "2rem",
    lg: "3.4rem",
    xl: "5rem",
    xxl: "8.5rem",
  },
  fontFamily: {
    one: "Rubik, sans-serif",
  },
  palette: {
    ...colors,
  },
}`},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!1,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},open:{defaultValue:null,description:"",name:"open",required:!1,type:{name:"boolean"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"any"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},variant:{defaultValue:{value:"light"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"dark"'},{value:'"light"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/modal/index.tsx#Modal"]={docgenInfo:l.__docgenInfo,name:"Modal",path:"src/components/modal/index.tsx#Modal"})}catch{}const E={parameters:{storySource:{source:`import React from "react";

import { ComponentMeta, ComponentStory } from "@storybook/react";

import { Modal } from "./index";
import { ModalProps } from "./types";
import { Typography } from "../typography";

export default {
  component: Modal,
  title: "Components/Modal",
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
    },
    open: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
    },
    variant: {
      control: {
        type: "select",
        options: ["light", "dark"],
      },
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args: ModalProps) => {
  return <Modal {...args} />;
};

export const ModalDefault = Template.bind({});
ModalDefault.args = {
  title: "Modal title",
  content: (
    <div>
      <div style={{ padding: "2em 0.5em", width: "300px" }}>
        <Typography content="This is modal content." variant="body1" />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Typography content="This is footer text." variant="body2" />
        <div style={{ display: "flex", gap: "0.5em" }}>
          <button>Ok</button>
          <button>Cancel</button>
        </div>
      </div>
    </div>
  ),
};
`,locationsMap:{"modal-default":{startLoc:{col:47,line:33},endLoc:{col:1,line:35},startBody:{col:47,line:33},endBody:{col:1,line:35}}}}},component:l,title:"Components/Modal",argTypes:{theme:{control:{type:"object"}},open:{control:{type:"boolean"},defaultValue:!0},variant:{control:{type:"select",options:["light","dark"]}}}},S=d(e=>t(l,{...e}),"Template"),k=S.bind({});k.args={title:"Modal title",content:a("div",{children:[t("div",{style:{padding:"2em 0.5em",width:"300px"},children:t(s,{content:"This is modal content.",variant:"body1"})}),a("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[t(s,{content:"This is footer text.",variant:"body2"}),a("div",{style:{display:"flex",gap:"0.5em"},children:[t("button",{children:"Ok"}),t("button",{children:"Cancel"})]})]})]})};const I=["ModalDefault"];export{k as ModalDefault,I as __namedExportsOrder,E as default};
//# sourceMappingURL=index.stories-5efa49c3.js.map
