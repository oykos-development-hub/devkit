var f=Object.defineProperty;var a=(e,t)=>f(e,"name",{value:t,configurable:!0});import{C as S,s as m,T as l,S as b}from"./story-wrapper-c199591b.js";import{j as c}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const u=S`
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
`,h=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.backgroundColor)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.info)==null?void 0:r.one)||l.palette.info.one},"backgroundColor$1"),C=a(e=>{var t,n,o,r,p;return((t=e.style)==null?void 0:t.borderColor)||((n=e.style)==null?void 0:n.backgroundColor)||((p=(r=(o=e.theme)==null?void 0:o.palette)==null?void 0:r.info)==null?void 0:p.one)||l.palette.info.one},"borderColor"),T=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.color)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.light)==null?void 0:r.one)||l.palette.light.one},"color$2"),g=m.button`
  ${u};
  background-color: ${e=>h(e)};
  border-color: ${e=>C(e)};
  color: ${e=>T(e)};

  &:hover:not([disabled]) {
    background-color: transparent !important;
    color: ${e=>h(e)};
  }
`,x=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.backgroundColor)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.light)==null?void 0:r.one)||l.palette.light.one},"backgroundColor"),y=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.color)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.main)==null?void 0:r.one)||l.palette.main.one},"color$1"),k=m.button`
  ${u};
  background-color: transparent;
  border-color: ${e=>y(e)};
  color: ${e=>y(e)};

  &:hover:not([disabled]) {
    background-color: ${e=>y(e)+" !important"};
    color: ${e=>x(e)+" !important"};
  }
`,B=a(e=>{var t,n,o,r;return((t=e.style)==null?void 0:t.color)||((r=(o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.dark)==null?void 0:r.two)||l.palette.dark.two},"color"),v=m.button`
  ${u};
  background-color: transparent;
  border-color: transparent;
  color: ${e=>B(e)};
  padding: 0;

  &:hover:not([disabled]) {
    text-decoration: underline;
  }
`,s=a(e=>{const t=e.variant??"primary";return t==="secondary"?c(k,{...e,type:"button"}):t==="tertiary"?c(v,{...e,type:"button"}):c(g,{...e,type:"submit"})},"StyledButton"),d=a(e=>c(s,{...e,children:e.content}),"Button");try{s.displayName="StyledButton",s.__docgenInfo={description:"",displayName:"StyledButton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#StyledButton"]={docgenInfo:s.__docgenInfo,name:"StyledButton",path:"src/components/button/index.tsx#StyledButton"})}catch{}try{d.displayName="Button",d.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:d.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}const N={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./index";
import { ButtonProps } from "./types";
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
  variant: "secondary",
  onClick: () => alert("SecondaryDefault clicked!"),
};

export const SecondaryCustomStyle = Template.bind({});
SecondaryCustomStyle.args = {
  content: "Secondary Custom Style",
  variant: "secondary",
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
  variant: "secondary",
  theme: Theme,
  onClick: () => alert("SecondaryThemed clicked!"),
};

// Tertiary
export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  content: "Tertiary Default",
  variant: "tertiary",
  onClick: () => alert("TertiaryDefault clicked!"),
};

export const TertiaryCustomStyle = Template.bind({});
TertiaryCustomStyle.args = {
  content: "Tertiary Custom Style",
  variant: "tertiary",
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
  variant: "tertiary",
  theme: Theme,
  onClick: () => alert("TertiaryThemed clicked!"),
};
`,locationsMap:{"primary-default":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"primary-custom-style":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"primary-themed":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"secondary-default":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"secondary-custom-style":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"secondary-themed":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"tertiary-default":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"tertiary-custom-style":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}},"tertiary-themed":{startLoc:{col:48,line:48},endLoc:{col:1,line:52},startBody:{col:48,line:48},endBody:{col:1,line:52}}}}},component:d,title:"Components/Button",argTypes:{content:{defaultValue:()=>c("span",{children:"Button"})},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",padding:"1em 2em",margin:"0em",borderRadius:"1em",borderWidth:"1px",gap:"0.5em"}}}},i=a(e=>c(b,{children:c(d,{...e})}),"Template"),_=i.bind({});_.args={content:"Primary Default",onClick:()=>alert("PrimaryDefault clicked!")};const P=i.bind({});P.args={content:"Primary Custom Style",style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"green",fontWeight:900},onClick:()=>alert("PrimaryCustomStyle clicked!")};const D=i.bind({});D.args={content:"Primary Themed",theme:l,onClick:()=>alert("PrimaryThemed clicked!")};const w=i.bind({});w.args={content:"Secondary Default",variant:"secondary",onClick:()=>alert("SecondaryDefault clicked!")};const L=i.bind({});L.args={content:"Secondary Custom Style",variant:"secondary",style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"white",color:"blue",fontWeight:900},onClick:()=>alert("SecondaryCustomStyle clicked!")};const $=i.bind({});$.args={content:"Secondary Themed",variant:"secondary",theme:l,onClick:()=>alert("SecondaryThemed clicked!")};const V=i.bind({});V.args={content:"Tertiary Default",variant:"tertiary",onClick:()=>alert("TertiaryDefault clicked!")};const R=i.bind({});R.args={content:"Tertiary Custom Style",variant:"tertiary",style:{width:"150px",boxShadow:"0px 0px 4px #333",backgroundColor:"white",color:"#333",padding:"4px 8px"},onClick:()=>alert("TertiaryCustomStyle clicked!")};const E=i.bind({});E.args={content:"Tertiary Themed",variant:"tertiary",theme:l,onClick:()=>alert("TertiaryThemed clicked!")};const j=["PrimaryDefault","PrimaryCustomStyle","PrimaryThemed","SecondaryDefault","SecondaryCustomStyle","SecondaryThemed","TertiaryDefault","TertiaryCustomStyle","TertiaryThemed"];export{P as PrimaryCustomStyle,_ as PrimaryDefault,D as PrimaryThemed,L as SecondaryCustomStyle,w as SecondaryDefault,$ as SecondaryThemed,R as TertiaryCustomStyle,V as TertiaryDefault,E as TertiaryThemed,j as __namedExportsOrder,N as default};
//# sourceMappingURL=index.stories-65be5eac.js.map
