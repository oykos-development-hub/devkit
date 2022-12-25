var s=Object.defineProperty;var o=(e,n)=>s(e,"name",{value:n,configurable:!0});import{j as t}from"./jsx-runtime-82e0d3de.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const r=o(({className:e})=>{const n="loader",a=[n,`${e||""}`];return t("div",{className:a.join(" "),"data-testid":n})},"Loader");try{r.displayName="Loader",r.__docgenInfo={description:"",displayName:"Loader",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},primaryColor:{defaultValue:null,description:"",name:"primaryColor",required:!1,type:{name:"string"}},secondaryColor:{defaultValue:null,description:"",name:"secondaryColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/loader/one/index.tsx#Loader"]={docgenInfo:r.__docgenInfo,name:"Loader",path:"src/components/loader/one/index.tsx#Loader"})}catch{}const f={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Loader } from './index';\r
\r
export default {\r
  title: 'Example/Loader One',\r
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
  <div\r
    className="w-12 h-12 position-absolute top-0 left-0 d-flex align-center justify-center"\r
  >\r
    <Loader {...args} />\r
  </div>\r
);\r
\r
export const LoaderOne = Template.bind({});\r
LoaderOne.args = {\r
  className: 'loader',\r
};\r
`,locationsMap:{"loader-one":{startLoc:{col:48,line:22},endLoc:{col:1,line:28},startBody:{col:48,line:22},endBody:{col:1,line:28}}}}},title:"Example/Loader One",component:r,argTypes:{className:{control:{type:"text"}},fullComponent:{control:{type:"boolean"}}}},l=o(e=>t("div",{className:"w-12 h-12 position-absolute top-0 left-0 d-flex align-center justify-center",children:t(r,{...e})}),"Template"),d=l.bind({});d.args={className:"loader"};const u=["LoaderOne"];export{d as LoaderOne,u as __namedExportsOrder,f as default};
//# sourceMappingURL=LoaderOne.stories-a4377d78.js.map
