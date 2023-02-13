var m=Object.defineProperty;var r=(n,a)=>m(n,"name",{value:a,configurable:!0});import{S as c}from"./index-5b3ad76a.js";import{X as t,A as i,D as l,C as s}from"./CircleCheckIcon-4cd4c6e9.js";import{j as o}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var e="C:\\Development\\Oykos\\devkit\\src\\components\\icon\\index.stories.tsx";const x={parameters:{storySource:{source:`import React from "react";\r
import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { StoryWrapper } from "../../shared/components/story-wrapper";\r
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./";\r
\r
export default {\r
  title: "Components/Icons",\r
  component: XIcon,\r
  argTypes: {\r
    onClick: {\r
      defaultValue: () => alert("Icon clicked!"),\r
    },\r
    theme: {\r
      control: {\r
        type: "object",\r
      },\r
    },\r
    style: {\r
      defaultValue: {\r
        width: "40px",\r
        height: "40px",\r
        padding: "0.2rem",\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof XIcon>;\r
\r
const Default: ComponentStory<typeof XIcon> = (args) => (\r
  <StoryWrapper>\r
    <AssignIcon {...args} />\r
    <XIcon {...args} />\r
    <DangerIcon {...args} />\r
    <CircleCheckIcon {...args} />\r
  </StoryWrapper>\r
);\r
\r
export const DefaultIcons = Default.bind({});\r
DefaultIcons.args = {};\r
\r
const Custom: ComponentStory<typeof XIcon> = (args) => (\r
  <StoryWrapper>\r
    <AssignIcon {...args} />\r
    <XIcon {...args} />\r
    <DangerIcon {...args} />\r
    <CircleCheckIcon {...args} />\r
  </StoryWrapper>\r
);\r
\r
export const CustomIcons = Custom.bind({});\r
CustomIcons.args = {\r
  size: "100px",\r
};\r
`,locationsMap:{"default-icons":{startLoc:{col:46,line:28},endLoc:{col:1,line:35},startBody:{col:46,line:28},endBody:{col:1,line:35}},"custom-icons":{startLoc:{col:45,line:40},endLoc:{col:1,line:47},startBody:{col:45,line:40},endBody:{col:1,line:47}}}}},title:"Components/Icons",component:t,argTypes:{onClick:{defaultValue:()=>alert("Icon clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"40px",height:"40px",padding:"0.2rem"}}}},u=r(n=>o(c,{children:[o(i,{...n},void 0,!1,{fileName:e,lineNumber:38,columnNumber:5},void 0),o(t,{...n},void 0,!1,{fileName:e,lineNumber:39,columnNumber:5},void 0),o(l,{...n},void 0,!1,{fileName:e,lineNumber:40,columnNumber:5},void 0),o(s,{...n},void 0,!1,{fileName:e,lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:e,lineNumber:37,columnNumber:3},void 0),"Default"),p=u.bind({});p.args={};const d=r(n=>o(c,{children:[o(i,{...n},void 0,!1,{fileName:e,lineNumber:50,columnNumber:5},void 0),o(t,{...n},void 0,!1,{fileName:e,lineNumber:51,columnNumber:5},void 0),o(l,{...n},void 0,!1,{fileName:e,lineNumber:52,columnNumber:5},void 0),o(s,{...n},void 0,!1,{fileName:e,lineNumber:53,columnNumber:5},void 0)]},void 0,!0,{fileName:e,lineNumber:49,columnNumber:3},void 0),"Custom"),f=d.bind({});f.args={size:"100px"};const h=["DefaultIcons","CustomIcons"];export{f as CustomIcons,p as DefaultIcons,h as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-9232f953.js.map
