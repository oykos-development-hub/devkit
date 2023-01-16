var u=Object.defineProperty;var o=(e,c)=>u(e,"name",{value:c,configurable:!0});import{T as r,S as p}from"./index-d650410b.js";import{j as n,a as i}from"./jsx-runtime-82e0d3de.js";import{S as m,P as t,X as d,D as f,C as g}from"./CircleCheckIcon-1182affb.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var s=(e=>(e.bottom="bottom",e.left="left",e.right="right",e.top="top",e))(s||{});const a=o(e=>n("div",{...e}),"DefaultIcon"),y=a;try{a.displayName="DefaultIcon",a.__docgenInfo={description:"",displayName:"DefaultIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"absolute"'},{value:'"relative"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/icon/icons/DefaultIcon.tsx#DefaultIcon"]={docgenInfo:a.__docgenInfo,name:"DefaultIcon",path:"src/components/icon/icons/DefaultIcon.tsx#DefaultIcon"})}catch{}const l=o(e=>i(m,{"data-testid":"assignicon",viewBox:"0 0 16 16",...e,children:[n(t,{d:"M14 2H10V0H16V6H14V2Z",...e}),n(t,{d:"M10 14H14V10H16V16H10V14Z",...e}),n(t,{d:"M6 2H2V6H0V0H6V2Z",...e}),n(t,{d:"M6 14H2V10H0V16H6V14Z",...e}),n(t,{d:"M8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5Z",...e})]}),"AssignIcon");try{l.displayName="AssignIcon",l.__docgenInfo={description:"",displayName:"AssignIcon",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string | number"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string | number"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'}]}},top:{defaultValue:null,description:"",name:"top",required:!1,type:{name:"string"}},bottom:{defaultValue:null,description:"",name:"bottom",required:!1,type:{name:"string"}},right:{defaultValue:null,description:"",name:"right",required:!1,type:{name:"string"}},left:{defaultValue:null,description:"",name:"left",required:!1,type:{name:"string"}},position:{defaultValue:null,description:"",name:"position",required:!1,type:{name:"enum",value:[{value:'"absolute"'},{value:'"relative"'},{value:'"absolute"'},{value:'"relative"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/icon/icons/AssignIcon.tsx#AssignIcon"]={docgenInfo:l.__docgenInfo,name:"AssignIcon",path:"src/components/icon/icons/AssignIcon.tsx#AssignIcon"})}catch{}const q={parameters:{storySource:{source:`import React from "react";

import { Directions } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { DefaultIcon, AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./icons";

export default {
  title: "Example/Icons",
  component: DefaultIcon,
  argTypes: {
    theme: {
      control: {
        type: "object",
        options: Theme,
      },
    },
    width: {
      control: {
        type: "range",
        min: 1,
        max: 100,
        step: 0.1,
      },
    },
    height: {
      control: {
        type: "text",
      },
    },
    top: {
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 0.1,
      },
    },
    bottom: {
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 0.1,
      },
    },
    left: {
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 0.1,
      },
    },
    right: {
      control: {
        type: "range",
        min: 1,
        max: 10,
        step: 0.1,
      },
    },
    direction: {
      control: {
        type: "select",
        options: ["No direction", ...Object.keys(Directions).map((key: string) => key)],
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
  },
} as ComponentMeta<typeof DefaultIcon>;

const Template: ComponentStory<typeof DefaultIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
  </StoryWrapper>
);

export const Icon = Template.bind({});
Icon.args = {
  color: "",
  width: 50,
  height: "",
  position: "relative",
  theme: Theme,
};
`,locationsMap:{icon:{startLoc:{col:53,line:78},endLoc:{col:1,line:85},startBody:{col:53,line:78},endBody:{col:1,line:85}}}}},title:"Example/Icons",component:y,argTypes:{theme:{control:{type:"object",options:r}},width:{control:{type:"range",min:1,max:100,step:.1}},height:{control:{type:"text"}},top:{control:{type:"range",min:1,max:10,step:.1}},bottom:{control:{type:"range",min:1,max:10,step:.1}},left:{control:{type:"range",min:1,max:10,step:.1}},right:{control:{type:"range",min:1,max:10,step:.1}},direction:{control:{type:"select",options:["No direction",...Object.keys(s).map(e=>e)]}},className:{control:{type:"text"}}}},h=o(e=>i(p,{children:[n(l,{...e}),n(d,{...e}),n(f,{...e}),n(g,{...e})]}),"Template"),I=h.bind({});I.args={color:"",width:50,height:"",position:"relative",theme:r};const T=["Icon"];export{I as Icon,T as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-bc598d97.js.map
