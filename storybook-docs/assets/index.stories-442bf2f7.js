var i=Object.defineProperty;var t=(n,l)=>i(n,"name",{value:l,configurable:!0});import{S as r}from"./index-6d3d827b.js";import{X as e,A as c,D as s,C as a}from"./CircleCheckIcon-1504ab73.js";import{a as p,j as o}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const S={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"default-icons":{startLoc:{col:46,line:28},endLoc:{col:1,line:35},startBody:{col:46,line:28},endBody:{col:1,line:35}},"custom-icons":{startLoc:{col:45,line:40},endLoc:{col:1,line:47},startBody:{col:45,line:40},endBody:{col:1,line:47}}}}},title:"Components/Icons",component:e,argTypes:{onClick:{defaultValue:()=>alert("Icon clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"40px",height:"40px",padding:"0.2rem"}}}},m=t(n=>p(r,{children:[o(c,{...n}),o(e,{...n}),o(s,{...n}),o(a,{...n})]}),"Default"),d=m.bind({});d.args={};const I=t(n=>p(r,{children:[o(c,{...n}),o(e,{...n}),o(s,{...n}),o(a,{...n})]}),"Custom"),u=I.bind({});u.args={size:"100px"};const k=["DefaultIcons","CustomIcons"];export{u as CustomIcons,d as DefaultIcons,k as __namedExportsOrder,S as default};
//# sourceMappingURL=index.stories-442bf2f7.js.map
