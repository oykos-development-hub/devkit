var a=Object.defineProperty;var o=(r,t)=>a(r,"name",{value:t,configurable:!0});import{s as i,r as p,S as s}from"./story-wrapper-3e82a7e2.js";import{j as e}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const n=i.div`
  width: ${r=>r.width||"80px"};
  height: ${r=>r.width||"80px"};
  border: 3px solid;
  border-color: ${r=>r.primaryColor||r.theme.primaryColor||"red"};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  animation-name: ${p};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  &:after {
    content: '';
    box-sizing: border-box;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid;
    border-color: ${r=>r.secondaryColor||r.theme.secondaryColor||"green"} transparent;
  } 
`,f={parameters:{storySource:{source:`import React from 'react';\r
import { ComponentStory, ComponentMeta } from '@storybook/react';\r
import { Loader } from './index';\r
import { StoryWrapper } from "../../../shared/components/story-wrapper";\r
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
  <StoryWrapper>\r
    <Loader {...args} />\r
  </StoryWrapper>\r
);\r
\r
export const LoaderOne = Template.bind({});\r
`,locationsMap:{"loader-one":{startLoc:{col:48,line:23},endLoc:{col:1,line:27},startBody:{col:48,line:23},endBody:{col:1,line:27}}}}},title:"Example/Loader One",component:n,argTypes:{className:{control:{type:"text"}},fullComponent:{control:{type:"boolean"}}}},d=o(r=>e(s,{children:e(n,{...r})}),"Template"),L=d.bind({}),h=["LoaderOne"];export{L as LoaderOne,h as __namedExportsOrder,f as default};
//# sourceMappingURL=LoaderOne.stories-96f8bd4c.js.map
