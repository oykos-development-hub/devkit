var y=Object.defineProperty;var e=(t,p)=>y(t,"name",{value:p,configurable:!0});import{T as i}from"./index-3cea5ae0.js";import{C as o,s as h,S as b}from"./story-wrapper-07e05087.js";import{a as s,j as a}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const n=e(t=>t.variant==="standard"?"white":"#004FFF","backgroundColor"),g=e(t=>t.variant==="standard"?"black":"white","color"),v={top:o`
    & #tooltip-content {
      left: 50%;
      bottom: 100%;
      transform: translate(-50%, -0.75em);
    }
  `,topLeft:o`
    & #tooltip-content {
      right: 100%;
      bottom: 100%;
      transform: translate(1.5em, -0.75em);
    }
  `,topRight:o`
    & #tooltip-content {
      left: 100%;
      bottom: 100%;
      transform: translate(-1.5em, -0.75em);
    }
  `,left:o`
    & #tooltip-content {
      top: 50%;
      right: 100%;
      transform: translate(-0.75em, -50%);
    }
  `,bottom:o`
    & #tooltip-content {
      top: 100%;
      left: 50%;
      transform: translate(-50%, 0.75em);
    }
  `,right:o`
    & #tooltip-content {
      top: 50%;
      left: 100%;
      transform: translate(0.75em, -50%);
    }
  `},r=o`
  content: "";
  position: absolute;
  border: 6px solid;
`,T={top:o`
    #tooltip-content::after {
      ${r}
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      border-color: ${n} transparent transparent transparent;
    }
  `,topLeft:o`
    #tooltip-content::after {
      ${r}
      top: 100%;
      left: 100%;
      transform: translateX(-1.5em);
      border-color: ${n} transparent transparent transparent;
    }
  `,topRight:o`
    #tooltip-content::after {
      ${r}
      top: 100%;
      right: 100%;
      transform: translateX(1.5em);
      border-color: ${n} transparent transparent transparent;
    }
  `,left:o`
    #tooltip-content::after {
      ${r}
      top: 50%;
      left: 100%;
      transform: translateY(-50%);
      border-color: transparent transparent transparent ${n};
    }
  `,bottom:o`
    #tooltip-content::after {
      ${r}
      left: 50%;
      bottom: 100%;
      transform: translateX(-50%);
      border-color: transparent transparent ${n} transparent;
    }
  `,right:o`
    #tooltip-content::after {
      ${r}
      top: 50%;
      right: 100%;
      transform: translateY(-50%);
      border-color: transparent ${n} transparent transparent;
    }
  `},S=e(t=>v[t.position],"tooltipPosition"),x=e(t=>t.arrow?T[t.position]:null,"arrowPosition"),_=h.div`
  position: relative;

  #tooltip-content {
    visibility: hidden;
    background-color: ${n};
    border-radius: 0.5em;
    white-space: nowrap;
    z-index: 1;
    text-align: center;
    padding: 0.5em 0.75em;
    position: absolute;
    box-shadow: 0px 8px 14px 3px rgba(0, 0, 0, 0.1);
    & h6,
    & p {
      color: ${g};
    }
  }

  &:hover #tooltip-content {
    visibility: visible;
  }

  ${S}
  ${x}
`;var m=(t=>(t.bottom="bottom",t.left="left",t.right="right",t.top="top",t.topLeft="topLeft",t.topRight="topRight",t))(m||{});const $=e(({position:t,content:p,children:d,title:l,...f})=>{const u=m[t]||"bottom";return s(_,{...f,position:u,content:p,children:[d,s("div",{id:"tooltip-content",children:[l&&a(i,{content:l,variant:"h6"}),a(i,{content:p,variant:"body1"})]})]})},"Tooltip"),c=$;try{tooltip.displayName="tooltip",tooltip.__docgenInfo={description:"",displayName:"tooltip",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'}]}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},position:{defaultValue:null,description:"",name:"position",required:!0,type:{name:"enum",value:[{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"topLeft"'},{value:'"topRight"'},{value:'"bottom"'},{value:'"left"'},{value:'"right"'},{value:'"top"'},{value:'"topLeft"'},{value:'"topRight"'}]}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},title:{defaultValue:null,description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"string | ReactElement<any, string | JSXElementConstructor<any>>"}},arrow:{defaultValue:null,description:"",name:"arrow",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/tooltip/index.tsx#tooltip"]={docgenInfo:tooltip.__docgenInfo,name:"tooltip",path:"src/components/tooltip/index.tsx#tooltip"})}catch{}const j={parameters:{storySource:{source:`import React from "react";
import Tooltip from "./index";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { TooltipProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    theme: {
      control: {
        type: "object",
      },
    },
    style: {},
    position: {
      control: {
        type: "radio",
        options: ["right", "left", "top", "bottom", "topLeft", "topRight"],
      },
    },
    arrow: {
      control: {
        type: "boolean",
      },
    },
    variant: {
      control: {
        type: "radio",
        options: ["standard", "filled"],
      },
    },
  },
} as ComponentMeta<typeof Tooltip>;

const Template: ComponentStory<typeof Tooltip> = (args: TooltipProps) => (
  <StoryWrapper>
    <Tooltip {...args}>
      <span>Hover over me!</span>
    </Tooltip>
  </StoryWrapper>
);
export const TooltipDefault = Template.bind({});

TooltipDefault.args = {
  content: "This is a tooltip",
};
`,locationsMap:{"tooltip-default":{startLoc:{col:49,line:38},endLoc:{col:1,line:44},startBody:{col:49,line:38},endBody:{col:1,line:44}}}}},title:"Components/Tooltip",component:c,argTypes:{theme:{control:{type:"object"}},style:{},position:{control:{type:"radio",options:["right","left","top","bottom","topLeft","topRight"]}},arrow:{control:{type:"boolean"}},variant:{control:{type:"radio",options:["standard","filled"]}}}},C=e(t=>a(b,{children:a(c,{...t,children:a("span",{children:"Hover over me!"})})}),"Template"),w=C.bind({});w.args={content:"This is a tooltip"};const D=["TooltipDefault"];export{w as TooltipDefault,D as __namedExportsOrder,j as default};
//# sourceMappingURL=index.stories-785c2cc7.js.map
