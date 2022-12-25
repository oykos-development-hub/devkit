var i=Object.defineProperty;var t=(e,n)=>i(e,"name",{value:n,configurable:!0});import{a as d,j as r}from"./jsx-runtime-82e0d3de.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const o=t(({className:e,width:n,height:a,primaryColor:s="#e3e3e3",secondaryColor:l="#333333"})=>d("svg",{xmlns:"http://www.w3.org/2000/svg",style:{margin:"auto"},width:n,height:a,className:e,display:"block",preserveAspectRatio:"xMidYMid",viewBox:"0 0 100 100",id:"loader",children:[r("circle",{cx:"50",cy:"50",r:"32",fill:"none",stroke:s,strokeDasharray:"50.26548245743669 50.26548245743669",strokeLinecap:"round",strokeWidth:"4",id:"loader-ring-1"}),r("circle",{cx:"50",cy:"50",r:"23",fill:"none",stroke:l,strokeDasharray:"36.12831551628262 36.12831551628262",strokeDashoffset:"36.128",strokeLinecap:"round",strokeWidth:"4",id:"loader-ring-2"})]}),"Loader");try{o.displayName="Loader",o.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},primaryColor:{defaultValue:{value:"#e3e3e3"},description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:{value:"#333333"},description:"",name:"secondaryColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/two/index.tsx#Loader"]={docgenInfo:o.__docgenInfo,name:"Loader",path:"src/components/loader/two/index.tsx#Loader"})}catch{}const u={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Loader } from './index';\r
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
const Template: ComponentStory<typeof Loader> = (args) => (\r
  <div className="w-12 h-12 position-absolute top-0 left-0 d-flex align-center justify-center">\r
    <div className="w-1">\r
      <Loader { ...args } />\r
    </div>\r
  </div>\r
);\r
\r
export const LoaderTwo = Template.bind({});\r
`,locationsMap:{"loader-two":{startLoc:{col:48,line:22},endLoc:{col:1,line:28},startBody:{col:48,line:22},endBody:{col:1,line:28}}}}},title:"Example/Loader Two",component:o,argTypes:{className:{control:{type:"text"}},fullComponent:{control:{type:"boolean"}}}},c=t(e=>r("div",{className:"w-12 h-12 position-absolute top-0 left-0 d-flex align-center justify-center",children:r("div",{className:"w-1",children:r(o,{...e})})}),"Template"),g=c.bind({}),L=["LoaderTwo"];export{g as LoaderTwo,L as __namedExportsOrder,u as default};
//# sourceMappingURL=LoaderTwo.stories-492ce92f.js.map
