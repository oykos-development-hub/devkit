var i=Object.defineProperty;var n=(r,a)=>i(r,"name",{value:a,configurable:!0});import{s as t,r as l,a as s,S as d}from"./story-wrapper-3e82a7e2.js";import{j as e,a as p}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const c=t.div`
  width: 100%;
  height: 100%;
  background-color: ${r=>r.wrapperBackgroundColor||"transparent"};

  & #loader {
    width: ${r=>r.width||"120px"};
    height: ${r=>r.height||"120px"};
  }

  & #loader-ring-1 {
    stroke: ${r=>r.primaryColor||"red"};
    animation: ${l} 1.5s linear infinite;
    transform-origin: center;
  }

  & #loader-ring-2 {
    stroke: ${r=>r.secondaryColor||"green"};
    animation: ${s} 1.5s linear infinite;
    transform-origin: center;
  }
`,o=n(r=>e(c,{...r,children:p("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto"},display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",id:"loader",children:[e("circle",{cx:"50",cy:"50",r:"32",fill:"none",strokeDasharray:"50.26548245743669 50.26548245743669",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-1"}),e("circle",{cx:"50",cy:"50",r:"23",fill:"none",strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.128",strokeLinecap:"round",strokeWidth:"2",id:"loader-ring-2"})]})}),"Loader");try{o.displayName="Loader",o.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}},wrapperBackgroundColor:{defaultValue:null,description:"",name:"wrapperBackgroundColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/two/index.tsx#Loader"]={docgenInfo:o.__docgenInfo,name:"Loader",path:"src/components/loader/two/index.tsx#Loader"})}catch{}const x={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import styled from "styled-components";\r
import { Loader } from './index';\r
import { StoryWrapper } from "../../../shared/components/story-wrapper";\r
\r
export default {\r
  title: 'Example/Loader Two',\r
  component: Loader,\r
  argTypes: {\r
    className: {\r
      control: {\r
        type: 'text',\r
      },\r
    },\r
    fullComponent: {\r
      control: {\r
        type: 'boolean',\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Loader>;\r
\r
const SmallDiv = styled.div\`\r
  width: 10%;\r
\`;\r
\r
const Template: ComponentStory<typeof Loader> = (args) => (\r
  <StoryWrapper>\r
    <SmallDiv>\r
      <Loader { ...args } />\r
    </SmallDiv>\r
  </StoryWrapper>\r
);\r
\r
export const LoaderTwo = Template.bind({});\r
`,locationsMap:{"loader-two":{startLoc:{col:48,line:28},endLoc:{col:1,line:34},startBody:{col:48,line:28},endBody:{col:1,line:34}}}}},title:"Example/Loader Two",component:o,argTypes:{className:{control:{type:"text"}},fullComponent:{control:{type:"boolean"}}}},m=t.div`
  width: 10%;
`,y=n(r=>e(d,{children:e(m,{children:e(o,{...r})})}),"Template"),S=y.bind({}),C=["LoaderTwo"];export{S as LoaderTwo,C as __namedExportsOrder,x as default};
//# sourceMappingURL=LoaderTwo.stories-4d9daed1.js.map
