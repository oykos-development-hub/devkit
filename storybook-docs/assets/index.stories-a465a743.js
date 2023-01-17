var S=Object.defineProperty;var a=(e,t)=>S(e,"name",{value:t,configurable:!0});import{C as b,s as u,T as l,S as C}from"./story-wrapper-07e05087.js";import{j as d}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const p=b`
  align-items: center;
  border-radius: ${e=>{var t,n,o;return((t=e.style)==null?void 0:t.borderRadius)||((o=(n=e.theme)==null?void 0:n.borderRadius)==null?void 0:o.lg)||"1em"}};
  border: ${e=>{var t,n,o;return((t=e.style)==null?void 0:t.borderWidth)||((o=(n=e.theme)==null?void 0:n.borderWidth)==null?void 0:o.xs)||"1px"}} solid;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: ${e=>{var t;return((t=e.style)==null?void 0:t.height)||"fit-content"}};
  justify-content: center;
  gap: ${e=>{var t;return((t=e.style)==null?void 0:t.gap)||"0.5em"}};
  margin: ${e=>{var t;return((t=e.style)==null?void 0:t.margin)||"0em"}};
  min-width: fit-content;
  padding: ${e=>{var t;return((t=e.style)==null?void 0:t.padding)||"1em 2em"}};
  width: ${e=>{var t;return((t=e.style)==null?void 0:t.width)||"fit-content"}};

  &:hover {
    transition: all 0.3s;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,f=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.backgroundColor)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.info)==null?void 0:r.one)||l.palette.info.one},"backgroundColor$1"),T=a(e=>{var t,n,o,r,h;return((t=e.style)==null?void 0:t.borderColor)||((n=e.style)==null?void 0:n.backgroundColor)||((h=(r=(o=e.theme)==null?void 0:o.palette)==null?void 0:r.info)==null?void 0:h.one)||l.palette.info.one},"borderColor"),g=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.color)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.light)==null?void 0:r.one)||l.palette.light.one},"color$2"),x=u.button`
  ${p};
  background-color: ${e=>f(e)};
  border-color: ${e=>T(e)};
  color: ${e=>g(e)};

  &:hover:not([disabled]) {
    background-color: transparent !important;
    color: ${e=>f(e)};
  }
`,k=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.backgroundColor)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.light)==null?void 0:r.one)||l.palette.light.one},"backgroundColor"),m=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.color)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.main)==null?void 0:r.one)||l.palette.main.one},"color$1"),B=u.button`
  ${p};
  background-color: transparent;
  border-color: ${e=>m(e)};
  color: ${e=>m(e)};

  &:hover:not([disabled]) {
    background-color: ${e=>m(e)+" !important"};
    color: ${e=>k(e)+" !important"};
  }
`,v=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.color)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.dark)==null?void 0:r.two)||l.palette.dark.two},"color"),_=u.button`
  ${p};
  background-color: transparent;
  border-color: transparent;
  color: ${e=>v(e)};
  padding: 0;

  &:hover:not([disabled]) {
    text-decoration: underline;
  }
`,y=a(e=>{const t=e.variant??"primary";return t==="secondary"?d(B,{...e,type:"button"}):t==="tertiary"?d(_,{...e,type:"button"}):d(x,{...e,type:"submit"})},"StyledButton"),s=a(e=>d(y,{...e,children:e.content}),"Button");try{y.displayName="StyledButton",y.__docgenInfo={description:"",displayName:"StyledButton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#StyledButton"]={docgenInfo:y.__docgenInfo,name:"StyledButton",path:"src/components/button/index.tsx#StyledButton"})}catch{}try{s.displayName="Button",s.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:s.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}var c=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(c||{});Object.keys(c).map(e=>e);const N={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./index";
import { ButtonProps, ButtonVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";

export default {
  component: Button,
  title: "Components/Button",
  argTypes: {
    content: {
      defaultValue: () => <span>Button</span>,
    },
    variant: {
      control: {
        type: "radio",
        options: ["primary", "secondary", "tertiary"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    onClick: {
      defaultValue: () => alert("Button clicked!"),
    },
    theme: {
      control: {
        type: "object",
      },
    },
    style: {
      defaultValue: {
        width: "fit-content",
        height: "fit-content",
        padding: "1em 2em",
        margin: "0em",
        borderRadius: "1em",
        borderWidth: "1px",
        gap: "0.5em",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <StoryWrapper>
    <Button {...args} />
  </StoryWrapper>
);

// Primary
export const PrimaryDefault = Template.bind({});
PrimaryDefault.args = {
  content: "Primary Default",
  onClick: () => alert("PrimaryDefault clicked!"),
};

export const PrimaryCustomStyle = Template.bind({});
PrimaryCustomStyle.args = {
  content: "Primary Custom Style",
  style: {
    width: "150px",
    boxShadow: "5px 5px 2px #333",
    backgroundColor: "green",
    fontWeight: 900,
  },
  onClick: () => alert("PrimaryCustomStyle clicked!"),
};

export const PrimaryThemed = Template.bind({});
PrimaryThemed.args = {
  content: "Primary Themed",
  theme: Theme,
  onClick: () => alert("PrimaryThemed clicked!"),
};

// Secondary
export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  content: "Secondary Default",
  variant: ButtonVariants.secondary,
  onClick: () => alert("SecondaryDefault clicked!"),
};

export const SecondaryCustomStyle = Template.bind({});
SecondaryCustomStyle.args = {
  content: "Secondary Custom Style",
  variant: ButtonVariants.secondary,
  style: {
    width: "150px",
    boxShadow: "5px 5px 2px #333",
    backgroundColor: "white",
    color: "blue",
    fontWeight: 900,
  },
  onClick: () => alert("SecondaryCustomStyle clicked!"),
};

export const SecondaryThemed = Template.bind({});
SecondaryThemed.args = {
  content: "Secondary Themed",
  variant: ButtonVariants.secondary,
  theme: Theme,
  onClick: () => alert("SecondaryThemed clicked!"),
};

// Tertiary
export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  content: "Tertiary Default",
  variant: ButtonVariants.tertiary,
  onClick: () => alert("TertiaryDefault clicked!"),
};

export const TertiaryCustomStyle = Template.bind({});
TertiaryCustomStyle.args = {
  content: "Tertiary Custom Style",
  variant: ButtonVariants.tertiary,
  style: {
    width: "150px",
    boxShadow: "0px 0px 4px #333",
    backgroundColor: "white",
    color: "#333",
    padding: "4px 8px",
  },
  onClick: () => alert("TertiaryCustomStyle clicked!"),
};

export const TertiaryThemed = Template.bind({});
TertiaryThemed.args = {
  content: "Tertiary Themed",
  variant: ButtonVariants.tertiary,
  theme: Theme,
  onClick: () => alert("TertiaryThemed clicked!"),
};
`,locationsMap:{"primary-default":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"primary-custom-style":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"primary-themed":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"secondary-default":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"secondary-custom-style":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"secondary-themed":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"tertiary-default":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"tertiary-custom-style":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"tertiary-themed":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}}}}},component:s,title:"Components/Button",argTypes:{content:{defaultValue:()=>d("span",{children:"Button"})},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",padding:"1em 2em",margin:"0em",borderRadius:"1em",borderWidth:"1px",gap:"0.5em"}}}},i=a(e=>d(C,{children:d(s,{...e})}),"Template"),P=i.bind({});P.args={content:"Primary Default",onClick:()=>alert("PrimaryDefault clicked!")};const D=i.bind({});D.args={content:"Primary Custom Style",style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"green",fontWeight:900},onClick:()=>alert("PrimaryCustomStyle clicked!")};const w=i.bind({});w.args={content:"Primary Themed",theme:l,onClick:()=>alert("PrimaryThemed clicked!")};const V=i.bind({});V.args={content:"Secondary Default",variant:c.secondary,onClick:()=>alert("SecondaryDefault clicked!")};const L=i.bind({});L.args={content:"Secondary Custom Style",variant:c.secondary,style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"white",color:"blue",fontWeight:900},onClick:()=>alert("SecondaryCustomStyle clicked!")};const $=i.bind({});$.args={content:"Secondary Themed",variant:c.secondary,theme:l,onClick:()=>alert("SecondaryThemed clicked!")};const R=i.bind({});R.args={content:"Tertiary Default",variant:c.tertiary,onClick:()=>alert("TertiaryDefault clicked!")};const O=i.bind({});O.args={content:"Tertiary Custom Style",variant:c.tertiary,style:{width:"150px",boxShadow:"0px 0px 4px #333",backgroundColor:"white",color:"#333",padding:"4px 8px"},onClick:()=>alert("TertiaryCustomStyle clicked!")};const E=i.bind({});E.args={content:"Tertiary Themed",variant:c.tertiary,theme:l,onClick:()=>alert("TertiaryThemed clicked!")};const K=["PrimaryDefault","PrimaryCustomStyle","PrimaryThemed","SecondaryDefault","SecondaryCustomStyle","SecondaryThemed","TertiaryDefault","TertiaryCustomStyle","TertiaryThemed"];export{D as PrimaryCustomStyle,P as PrimaryDefault,w as PrimaryThemed,L as SecondaryCustomStyle,V as SecondaryDefault,$ as SecondaryThemed,O as TertiaryCustomStyle,R as TertiaryDefault,E as TertiaryThemed,K as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-a465a743.js.map
