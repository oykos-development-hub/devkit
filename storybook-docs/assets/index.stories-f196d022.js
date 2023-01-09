var h=Object.defineProperty;var o=(e,t)=>h(e,"name",{value:t,configurable:!0});import{r as c}from"./index-d84d9d3b.js";import{U as u,s as m,T as f,S as g}from"./index-63a12349.js";import{j as a,a as w}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const y=u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,x=u`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
`,i=m.div`
  width: ${e=>e.width||"80px"};
  height: ${e=>e.width||"80px"};
  border: ${e=>{var t,n;return((n=(t=e.theme)==null?void 0:t.borderWidth)==null?void 0:n.md)||"3px"}} solid;
  border-color: ${e=>{var t,n,r;return e.primaryColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.main)==null?void 0:r.two)||"red"}};
  border-radius: ${e=>{var t,n;return((n=(t=e.theme)==null?void 0:t.borderRadius)==null?void 0:n.full)||"50%"}};
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${y};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;

  &:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: ${e=>e.secondaryWidth||"100px"};
    height: ${e=>e.secondaryHeight||"100px"};
    border-radius: ${e=>{var t,n;return((n=(t=e.theme)==null?void 0:t.borderRadius)==null?void 0:n.full)||"50%"}};
    border: ${e=>{var t,n;return((n=(t=e.theme)==null?void 0:t.borderWidth)==null?void 0:n.md)||"3px"}} solid;
    border-color: ${e=>{var t,n,r;return e.secondaryColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.important)==null?void 0:r.two)||"green"}}
      transparent;
  }
`;try{i.displayName="One",i.__docgenInfo={description:"",displayName:"One",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/one.tsx#One"]={docgenInfo:i.__docgenInfo,name:"One",path:"src/components/loader/one.tsx#One"})}catch{}const V=m.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>{var t,n,r;return e.wrapperBackgroundColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.dark)==null?void 0:r.four)||"transparent"}};
  display: flex;
  align-items: center;
  justify-content: center;

  & #loader {
    width: ${e=>e.width||"120px"};
    height: ${e=>e.height||"120px"};
  }

  & #loader-ring-1 {
    stroke: ${e=>{var t,n,r;return e.primaryColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.main)==null?void 0:r.two)||"red"}};
    animation: ${y} 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${e=>{var t,n,r;return e.secondaryColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.important)==null?void 0:r.two)||"green"}};
    animation: ${x} 1.5s linear infinite;
    transform-origin: center;
  }
`,d=o(e=>a(V,{...e,children:w("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto"},display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",id:"loader",children:[a("circle",{cx:"50",cy:"50",r:"32",fill:"none",strokeDasharray:"50.26548245743669 50.26548245743669",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-1"}),a("circle",{cx:"50",cy:"50",r:"23",fill:"none",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.128",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-2"})]})}),"Two");try{d.displayName="Two",d.__docgenInfo={description:"",displayName:"Two",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/two.tsx#Two"]={docgenInfo:d.__docgenInfo,name:"Two",path:"src/components/loader/two.tsx#Two"})}catch{}const p=o(e=>{if(!e)return"";const t=parseFloat(e),n=e.replace(new RegExp(String(t),"g"),"");return String(t+20)+n},"resolveSecondaryValue"),l=o(e=>{const t=e.variant??"one",n=c.useMemo(()=>p(e.width),[]),r=c.useMemo(()=>p(e.height),[]);return t==="one"?a(i,{...e,secondaryWidth:n,secondaryHeight:r}):t==="two"?a(d,{...e,secondaryWidth:n,secondaryHeight:r}):a(i,{...e})},"Loader");try{l.displayName="Loader",l.__docgenInfo={description:"",displayName:"Loader",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/index.tsx#Loader"]={docgenInfo:l.__docgenInfo,name:"Loader",path:"src/components/loader/index.tsx#Loader"})}catch{}const I={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { LoaderProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Example/Loader",
  component: Loader,
  argTypes: {
    variant: {
      control: {
        type: "text",
      },
    },
    width: {
      control: {
        type: "text",
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    primaryColor: {
      control: {
        type: "text",
      },
    },
    secondaryColor: {
      control: {
        type: "text",
      },
    },
    wrapperBackgroundColor: {
      control: {
        type: "text",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
    testId: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => (
  <StoryWrapper>
    <Loader {...args} />
  </StoryWrapper>
);

export const VariantOneDefault = Template.bind({});

VariantOneDefault.args = {
  width: "100px",
  height: "100px",
  testId: "VariantOneDefault",
  primaryColor: "#b2a422",
  secondaryColor: "#7199aa",
};

export const VariantOneThemed = Template.bind({});

VariantOneThemed.args = {
  testId: "VariantOneThemed",
  theme: Theme,
};

export const VariantTwoDefault = Template.bind({});

VariantTwoDefault.args = {
  variant: "two",
  width: "100px",
  height: "100px",
  testId: "VariantTwoDefault",
  primaryColor: "#b2a422",
  secondaryColor: "#7199aa",
};

export const VariantTwoThemed = Template.bind({});

VariantTwoThemed.args = {
  variant: "two",
  testId: "VariantTwoThemed",
  theme: Theme,
};
`,locationsMap:{"variant-one-default":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-one-themed":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-two-default":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-two-themed":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}}}}},title:"Example/Loader",component:l,argTypes:{variant:{control:{type:"text"}},width:{control:{type:"text"}},height:{control:{type:"text"}},primaryColor:{control:{type:"text"}},secondaryColor:{control:{type:"text"}},wrapperBackgroundColor:{control:{type:"text"}},theme:{control:{type:"object"}},testId:{control:{type:"text"}}}},s=o(e=>a(g,{children:a(l,{...e})}),"Template"),T=s.bind({});T.args={width:"100px",height:"100px",testId:"VariantOneDefault",primaryColor:"#b2a422",secondaryColor:"#7199aa"};const C=s.bind({});C.args={testId:"VariantOneThemed",theme:f};const _=s.bind({});_.args={variant:"two",width:"100px",height:"100px",testId:"VariantTwoDefault",primaryColor:"#b2a422",secondaryColor:"#7199aa"};const O=s.bind({});O.args={variant:"two",testId:"VariantTwoThemed",theme:f};const k=["VariantOneDefault","VariantOneThemed","VariantTwoDefault","VariantTwoThemed"];export{T as VariantOneDefault,C as VariantOneThemed,_ as VariantTwoDefault,O as VariantTwoThemed,k as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories-f196d022.js.map
