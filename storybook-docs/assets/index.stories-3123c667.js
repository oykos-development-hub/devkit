var x=Object.defineProperty;var a=(e,r)=>x(e,"name",{value:r,configurable:!0});import{r as u}from"./index-8457a19c.js";import{U as y,s as h,T as g,S as v}from"./index-5b3ad76a.js";import{j as t}from"./jsx-dev-runtime-21a8a8df.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-f4c43bdd.js";const w=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,V=y`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(-360deg);
  }
`,o=h.div`
  width: ${e=>e.width||"80px"};
  height: ${e=>e.width||"80px"};
  border: ${e=>{var r,n;return((n=(r=e.theme)==null?void 0:r.borderWidth)==null?void 0:n.md)||"3px"}} solid;
  border-color: ${e=>{var r,n;return e.primaryColor||((n=(r=e.theme)==null?void 0:r.palette)==null?void 0:n.primary500)||"red"}};
  border-radius: ${e=>{var r,n;return((n=(r=e.theme)==null?void 0:r.borderRadius)==null?void 0:n.full)||"50%"}};
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${w};
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
    border-radius: ${e=>{var r,n;return((n=(r=e.theme)==null?void 0:r.borderRadius)==null?void 0:n.full)||"50%"}};
    border: ${e=>{var r,n;return((n=(r=e.theme)==null?void 0:r.borderWidth)==null?void 0:n.md)||"3px"}} solid;
    border-color: ${e=>{var r,n;return e.secondaryColor||((n=(r=e.theme)==null?void 0:r.palette)==null?void 0:n.error500)||"green"}}
      transparent;
  }
`;try{o.displayName="One",o.__docgenInfo={description:"",displayName:"One",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"((instance: HTMLDivElement | null) => void) | RefObject<HTMLDivElement> | null"}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},as:{defaultValue:null,description:"",name:"as",required:!1,type:{name:"undefined"}},forwardedAs:{defaultValue:null,description:"",name:"forwardedAs",required:!1,type:{name:"undefined"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/one.tsx#One"]={docgenInfo:o.__docgenInfo,name:"One",path:"src/components/loader/one.tsx#One"})}catch{}var l="C:\\Development\\Oykos\\devkit\\src\\components\\loader\\two.tsx";const T=h.div`
  width: 100%;
  height: 100%;
  background-color: ${e=>{var r,n;return e.wrapperBackgroundColor||((n=(r=e.theme)==null?void 0:r.palette)==null?void 0:n.secondary500)||"transparent"}};
  display: flex;
  align-items: center;
  justify-content: center;

  & #loader {
    width: ${e=>e.width||"120px"};
    height: ${e=>e.height||"120px"};
  }

  & #loader-ring-1 {
    stroke: ${e=>{var r,n;return e.primaryColor||((n=(r=e.theme)==null?void 0:r.palette)==null?void 0:n.primary500)||"red"}};
    animation: ${w} 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${e=>{var r,n;return e.secondaryColor||((n=(r=e.theme)==null?void 0:r.palette)==null?void 0:n.error500)||"green"}};
    animation: ${V} 1.5s linear infinite;
    transform-origin: center;
  }
`,d=a(e=>t(T,{...e,children:t("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto"},display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",id:"loader",children:[t("circle",{cx:"50",cy:"50",r:"32",fill:"none",strokeDasharray:"50.26548245743669 50.26548245743669",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-1"},void 0,!1,{fileName:l,lineNumber:44,columnNumber:9},void 0),t("circle",{cx:"50",cy:"50",r:"23",fill:"none",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.128",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-2"},void 0,!1,{fileName:l,lineNumber:54,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:36,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:35,columnNumber:5},void 0),"Two");try{d.displayName="Two",d.__docgenInfo={description:"",displayName:"Two",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/two.tsx#Two"]={docgenInfo:d.__docgenInfo,name:"Two",path:"src/components/loader/two.tsx#Two"})}catch{}var m="C:\\Development\\Oykos\\devkit\\src\\components\\loader\\index.tsx";const p=a(e=>{if(!e)return"";const r=parseFloat(e),n=e.replace(new RegExp(String(r),"g"),"");return String(r+20)+n},"resolveSecondaryValue"),i=a(e=>{const r=e.variant??"one",n=u.useMemo(()=>p(e.width),[]),c=u.useMemo(()=>p(e.height),[]);return r==="one"?t(o,{...e,secondaryWidth:n,secondaryHeight:c},void 0,!1,{fileName:m,lineNumber:20,columnNumber:33},void 0):r==="two"?t(d,{...e,secondaryWidth:n,secondaryHeight:c},void 0,!1,{fileName:m,lineNumber:21,columnNumber:33},void 0):t(o,{...e},void 0,!1,{fileName:m,lineNumber:23,columnNumber:10},void 0)},"Loader");try{i.displayName="Loader",i.__docgenInfo={description:"",displayName:"Loader",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"one"'},{value:'"two"'}]}},testId:{defaultValue:null,description:"",name:"testId",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},secondaryWidth:{defaultValue:null,description:"",name:"secondaryWidth",required:!1,type:{name:"string"}},secondaryHeight:{defaultValue:null,description:"",name:"secondaryHeight",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/index.tsx#Loader"]={docgenInfo:i.__docgenInfo,name:"Loader",path:"src/components/loader/index.tsx#Loader"})}catch{}var f="C:\\Development\\Oykos\\devkit\\src\\components\\loader\\index.stories.tsx";const I={parameters:{storySource:{source:`import React from "react";\r
import { ComponentStory, ComponentMeta } from "@storybook/react";\r
import { Loader } from "./index";\r
import { StoryWrapper } from "../../shared/components/story-wrapper";\r
import { LoaderProps } from "./types";\r
import { Theme } from "../../shared/theme";\r
\r
export default {\r
  title: "Components/Loader",\r
  component: Loader,\r
  argTypes: {\r
    variant: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
    width: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
    height: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
    primaryColor: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
    secondaryColor: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
    wrapperBackgroundColor: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
    theme: {\r
      control: {\r
        type: "object",\r
      },\r
    },\r
    testId: {\r
      control: {\r
        type: "text",\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Loader>;\r
\r
const Template: ComponentStory<typeof Loader> = (args: LoaderProps) => (\r
  <StoryWrapper>\r
    <Loader {...args} />\r
  </StoryWrapper>\r
);\r
\r
export const VariantOneDefault = Template.bind({});\r
\r
VariantOneDefault.args = {\r
  width: "100px",\r
  height: "100px",\r
  testId: "VariantOneDefault",\r
  primaryColor: "#b2a422",\r
  secondaryColor: "#7199aa",\r
};\r
\r
export const VariantOneThemed = Template.bind({});\r
\r
VariantOneThemed.args = {\r
  testId: "VariantOneThemed",\r
  theme: Theme,\r
};\r
\r
export const VariantTwoDefault = Template.bind({});\r
\r
VariantTwoDefault.args = {\r
  variant: "two",\r
  width: "100px",\r
  height: "100px",\r
  testId: "VariantTwoDefault",\r
  primaryColor: "#b2a422",\r
  secondaryColor: "#7199aa",\r
};\r
\r
export const VariantTwoThemed = Template.bind({});\r
\r
VariantTwoThemed.args = {\r
  variant: "two",\r
  testId: "VariantTwoThemed",\r
  theme: Theme,\r
};\r
`,locationsMap:{"variant-one-default":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-one-themed":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-two-default":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}},"variant-two-themed":{startLoc:{col:48,line:55},endLoc:{col:1,line:59},startBody:{col:48,line:55},endBody:{col:1,line:59}}}}},title:"Components/Loader",component:i,argTypes:{variant:{control:{type:"text"}},width:{control:{type:"text"}},height:{control:{type:"text"}},primaryColor:{control:{type:"text"}},secondaryColor:{control:{type:"text"}},wrapperBackgroundColor:{control:{type:"text"}},theme:{control:{type:"object"}},testId:{control:{type:"text"}}}},s=a(e=>t(v,{children:t(i,{...e},void 0,!1,{fileName:f,lineNumber:65,columnNumber:5},void 0)},void 0,!1,{fileName:f,lineNumber:64,columnNumber:3},void 0),"Template"),C=s.bind({});C.args={width:"100px",height:"100px",testId:"VariantOneDefault",primaryColor:"#b2a422",secondaryColor:"#7199aa"};const b=s.bind({});b.args={testId:"VariantOneThemed",theme:g};const _=s.bind({});_.args={variant:"two",width:"100px",height:"100px",testId:"VariantTwoDefault",primaryColor:"#b2a422",secondaryColor:"#7199aa"};const O=s.bind({});O.args={variant:"two",testId:"VariantTwoThemed",theme:g};const D=["VariantOneDefault","VariantOneThemed","VariantTwoDefault","VariantTwoThemed"];export{C as VariantOneDefault,b as VariantOneThemed,_ as VariantTwoDefault,O as VariantTwoThemed,D as __namedExportsOrder,I as default};
//# sourceMappingURL=index.stories-3123c667.js.map
