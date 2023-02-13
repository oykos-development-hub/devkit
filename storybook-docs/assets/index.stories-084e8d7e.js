var m=Object.defineProperty;var t=(n,a)=>m(n,"name",{value:a,configurable:!0});import{S as c}from"./index-b018fede.js";import{X as r,A as i,D as l,C as s}from"./CircleCheckIcon-63b7cf1f.js";import{j as o}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var e="C:\\Development\\Oykos\\devkit\\src\\components\\icon\\index.stories.tsx";const x={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AssignIcon, XIcon, DangerIcon, CircleCheckIcon } from "./";

export default {
  title: "Components/Icons",
  component: XIcon,
  argTypes: {
    onClick: {
      defaultValue: () => alert("Icon clicked!"),
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        width: "40px",
        height: "40px",
        padding: "0.2rem",
      },
    },
  },
} as ComponentMeta<typeof XIcon>;

const Default: ComponentStory<typeof XIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
  </StoryWrapper>
);

export const DefaultIcons = Default.bind({});
DefaultIcons.args = {};

const Custom: ComponentStory<typeof XIcon> = (args) => (
  <StoryWrapper>
    <AssignIcon {...args} />
    <XIcon {...args} />
    <DangerIcon {...args} />
    <CircleCheckIcon {...args} />
  </StoryWrapper>
);

export const CustomIcons = Custom.bind({});
CustomIcons.args = {
  size: "100px",
};
`,locationsMap:{"default-icons":{startLoc:{col:46,line:28},endLoc:{col:1,line:35},startBody:{col:46,line:28},endBody:{col:1,line:35}},"custom-icons":{startLoc:{col:45,line:40},endLoc:{col:1,line:47},startBody:{col:45,line:40},endBody:{col:1,line:47}}}}},title:"Components/Icons",component:r,argTypes:{onClick:{defaultValue:()=>alert("Icon clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"40px",height:"40px",padding:"0.2rem"}}}},u=t(n=>o(c,{children:[o(i,{...n},void 0,!1,{fileName:e,lineNumber:38,columnNumber:5},void 0),o(r,{...n},void 0,!1,{fileName:e,lineNumber:39,columnNumber:5},void 0),o(l,{...n},void 0,!1,{fileName:e,lineNumber:40,columnNumber:5},void 0),o(s,{...n},void 0,!1,{fileName:e,lineNumber:41,columnNumber:5},void 0)]},void 0,!0,{fileName:e,lineNumber:37,columnNumber:3},void 0),"Default"),p=u.bind({});p.args={};const d=t(n=>o(c,{children:[o(i,{...n},void 0,!1,{fileName:e,lineNumber:50,columnNumber:5},void 0),o(r,{...n},void 0,!1,{fileName:e,lineNumber:51,columnNumber:5},void 0),o(l,{...n},void 0,!1,{fileName:e,lineNumber:52,columnNumber:5},void 0),o(s,{...n},void 0,!1,{fileName:e,lineNumber:53,columnNumber:5},void 0)]},void 0,!0,{fileName:e,lineNumber:49,columnNumber:3},void 0),"Custom"),f=d.bind({});f.args={size:"100px"};const h=["DefaultIcons","CustomIcons"];export{f as CustomIcons,p as DefaultIcons,h as __namedExportsOrder,x as default};
//# sourceMappingURL=index.stories-084e8d7e.js.map
