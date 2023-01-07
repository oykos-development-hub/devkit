var h=Object.defineProperty;var o=(e,t)=>h(e,"name",{value:t,configurable:!0});import{r as p}from"./index-d84d9d3b.js";import{U as m,s as u,S as g}from"./story-wrapper-45417fff.js";import{j as a,a as x}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const f=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,w=m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
`,i=u.div`
  width: ${e=>e.width||"80px"};
  height: ${e=>e.width||"80px"};
  border: ${e=>{var t,n;return((n=(t=e.theme)==null?void 0:t.borderWidth)==null?void 0:n.md)||"3px"}} solid;
  border-color: ${e=>{var t,n,r;return e.primaryColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.main)==null?void 0:r.two)||"red"}};
  border-radius: ${e=>{var t,n;return((n=(t=e.theme)==null?void 0:t.borderRadius)==null?void 0:n.full)||"50%"}};
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${f};
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
`;try{i.displayName="One",i.__docgenInfo={description:"",displayName:"One",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"any"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/one.tsx#One"]={docgenInfo:i.__docgenInfo,name:"One",path:"src/components/loader/one.tsx#One"})}catch{}const V=u.div`
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
    animation: ${f} 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${e=>{var t,n,r;return e.secondaryColor||((r=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.important)==null?void 0:r.two)||"green"}};
    animation: ${w} 1.5s linear infinite;
    transform-origin: center;
  }
`,d=o(e=>a(V,{...e,children:x("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto"},display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",id:"loader",children:[a("circle",{cx:"50",cy:"50",r:"32",fill:"none",strokeDasharray:"50.26548245743669 50.26548245743669",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-1"}),a("circle",{cx:"50",cy:"50",r:"23",fill:"none",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.128",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-2"})]})}),"Two");try{d.displayName="Two",d.__docgenInfo={description:"",displayName:"Two",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/two.tsx#Two"]={docgenInfo:d.__docgenInfo,name:"Two",path:"src/components/loader/two.tsx#Two"})}catch{}const c=o(e=>{if(!e)return"";const t=parseFloat(e),n=e.replace(new RegExp(String(t),"g"),"");return String(t+20)+n},"resolveSecondaryValue"),l=o(e=>{const t=e.variant??"one",n=p.useMemo(()=>c(e.width),[]),r=p.useMemo(()=>c(e.height),[]);return t==="one"?a(i,{...e,secondaryWidth:n,secondaryHeight:r}):t==="two"?a(d,{...e,secondaryWidth:n,secondaryHeight:r}):a(i,{...e})},"Loader");try{l.displayName="Loader",l.__docgenInfo={description:"",displayName:"Loader",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/index.tsx#Loader"]={docgenInfo:l.__docgenInfo,name:"Loader",path:"src/components/loader/index.tsx#Loader"})}catch{}const y={mediaScreenBreakpoints:{xs:"480px",sm:"576px",md:"767px",lg:"992px",xl:"1200px",xxl:"1600px"},borderRadius:{xs:"1px",sm:"2px",md:"4px",lg:"8px",xl:"16px",full:"50%"},borderWidth:{xs:"1px",sm:"2px",md:"3px",lg:"4px"},fontSize:{xs:"0.6rem",sm:"1rem",md:"1.6rem",lg:"2.8rem",xl:"4rem",xxl:"7rem"},palette:{main:{one:"#0068B6FF",two:"#00A1E0FF",three:"#00a1e0",four:"#d5f1ff"},dark:{one:"#181818",two:"#212121",three:"#424242",four:"#616161"},light:{one:"#fafafa",two:"#f2f2f2",three:"#d9d9d9",four:"#9e9e9e",five:"#7f7f7f"},important:{one:"#ff0000",two:"#f44336",three:"#ff5722",four:"#fcae53",five:"#ffc107"},info:{one:"#00b300",two:"#00c47b",three:"#74b560",four:"#598d82",five:"#31b3e5"}}},k={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"variant-one-default":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-one-themed":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-two-default":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-two-themed":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}}}}},title:"Example/Loader",component:l,argTypes:{variant:{control:{type:"text"}},width:{control:{type:"text"}},height:{control:{type:"text"}},primaryColor:{control:{type:"text"}},secondaryColor:{control:{type:"text"}},wrapperBackgroundColor:{control:{type:"text"}},theme:{control:{type:"object"}},testId:{control:{type:"text"}}}},s=o(e=>a(g,{children:a(l,{...e})}),"Template"),T=s.bind({});T.args={width:"100px",height:"100px",testId:"VariantOneDefault",primaryColor:"#b2a422",secondaryColor:"#7199aa"};const C=s.bind({});C.args={testId:"VariantOneThemed",theme:y};const _=s.bind({});_.args={variant:"two",width:"100px",height:"100px",testId:"VariantTwoDefault",primaryColor:"#b2a422",secondaryColor:"#7199aa"};const b=s.bind({});b.args={variant:"two",testId:"VariantTwoThemed",theme:y};const I=["VariantOneDefault","VariantOneThemed","VariantTwoDefault","VariantTwoThemed"];export{T as VariantOneDefault,C as VariantOneThemed,_ as VariantTwoDefault,b as VariantTwoThemed,I as __namedExportsOrder,k as default};
//# sourceMappingURL=index.stories-00f4f3c9.js.map
