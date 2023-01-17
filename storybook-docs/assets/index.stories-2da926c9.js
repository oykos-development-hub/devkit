var q=Object.defineProperty;var l=(t,e)=>q(t,"name",{value:e,configurable:!0});import{C as W,s as D,T as i,S as A}from"./story-wrapper-07e05087.js";import{H as u,a as p,b as h,c as b,d as f,e as g,S as T,f as $,B as S,g as C,h as x,C as k,O as v,E as B,T as c,i as d}from"./index-3cea5ae0.js";import{j as a}from"./jsx-runtime-82e0d3de.js";import"./index-4cb24bae.js";import"./index-d84d9d3b.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const w=W`
  align-items: center;
  border-radius: ${t=>{var e,n,o;return((e=t.style)==null?void 0:e.borderRadius)||((o=(n=t.theme)==null?void 0:n.borderRadius)==null?void 0:o.lg)||"1em"}};
  border: ${t=>{var e,n,o;return((e=t.style)==null?void 0:e.borderWidth)||((o=(n=t.theme)==null?void 0:n.borderWidth)==null?void 0:o.xs)||"1px"}} solid;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  height: ${t=>{var e;return((e=t.style)==null?void 0:e.height)||"fit-content"}};
  justify-content: center;
  gap: ${t=>{var e;return((e=t.style)==null?void 0:e.gap)||"0.5em"}};
  margin: ${t=>{var e;return((e=t.style)==null?void 0:e.margin)||"0em"}};
  min-width: fit-content;
  padding: ${t=>{var e;return((e=t.style)==null?void 0:e.padding)||"1em 2em"}};
  width: ${t=>{var e;return((e=t.style)==null?void 0:e.width)||"fit-content"}};

  &:hover {
    transition: all 0.3s;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.4;
  }
`,P=l(t=>{var e,n,o,r;return((e=t.style)==null?void 0:e.backgroundColor)||((r=(o=(n=t.theme)==null?void 0:n.palette)==null?void 0:o.info)==null?void 0:r.one)||i.palette.info.one},"backgroundColor$1"),H=l(t=>{var e,n,o,r,L;return((e=t.style)==null?void 0:e.borderColor)||((n=t.style)==null?void 0:n.backgroundColor)||((L=(r=(o=t.theme)==null?void 0:o.palette)==null?void 0:r.info)==null?void 0:L.one)||i.palette.info.one},"borderColor"),O=l(t=>{var e,n,o,r;return((e=t.style)==null?void 0:e.color)||((r=(o=(n=t.theme)==null?void 0:n.palette)==null?void 0:o.light)==null?void 0:r.one)||i.palette.light.one},"color$2"),M=D.button`
  ${w};
  background-color: ${t=>P(t)};
  border-color: ${t=>H(t)};
  color: ${t=>O(t)};

  &:hover:not([disabled]) {
    background-color: transparent !important;
    color: ${t=>P(t)};

    ${u}, ${p}, ${h}, ${b}, ${f}, ${g}, ${T}, ${$}, ${S}, ${C}, ${x}, ${k}, ${v}, ${B} {
      color: ${t=>P(t)};
    }
  }

  ${u}, ${p}, ${h}, ${b}, ${f}, ${g}, ${T}, ${$}, ${S}, ${C}, ${x}, ${k}, ${v}, ${B} {
    color: ${t=>O(t)};
  }
`,E=l(t=>{var e,n,o,r;return((e=t.style)==null?void 0:e.backgroundColor)||((r=(o=(n=t.theme)==null?void 0:n.palette)==null?void 0:o.light)==null?void 0:r.one)||i.palette.light.one},"backgroundColor"),V=l(t=>{var e,n,o,r;return((e=t.style)==null?void 0:e.color)||((r=(o=(n=t.theme)==null?void 0:n.palette)==null?void 0:o.main)==null?void 0:r.one)||i.palette.main.one},"color$1"),j=D.button`
  ${w};
  background-color: transparent;
  border-color: ${t=>V(t)};
  color: ${t=>V(t)};

  &:hover:not([disabled]) {
    background-color: ${t=>V(t)+" !important"};
    color: ${t=>E(t)+" !important"};

    ${u}, ${p}, ${h}, ${b}, ${f}, ${g}, ${T}, ${$}, ${S}, ${C}, ${x}, ${k}, ${v}, ${B} {
      color: ${t=>E(t)+" !important"};
    }
  }

  ${u}, ${p}, ${h}, ${b}, ${f}, ${g}, ${T}, ${$}, ${S}, ${C}, ${x}, ${k}, ${v}, ${B} {
    color: ${t=>V(t)};
  }
`,R=l(t=>{var e,n,o,r;return((e=t.style)==null?void 0:e.color)||((r=(o=(n=t.theme)==null?void 0:n.palette)==null?void 0:o.dark)==null?void 0:r.two)||i.palette.dark.two},"color"),I=D.button`
  ${w};
  background-color: transparent;
  border-color: transparent;
  color: ${t=>R(t)};
  padding: 0;

  &:hover:not([disabled]) {
    text-decoration: underline;
  }

  ${u}, ${p}, ${h}, ${b}, ${f}, ${g}, ${T}, ${$}, ${S}, ${C}, ${x}, ${k}, ${v}, ${B} {
    color: ${t=>R(t)};
  }
`,_=l(t=>{const e=t.variant??"primary";return e==="secondary"?a(j,{...t,type:"button"}):e==="tertiary"?a(I,{...t,type:"button"}):a(M,{...t,type:"submit"})},"StyledButton"),m=l(t=>a(_,{...t,children:t.content}),"Button");try{_.displayName="StyledButton",_.__docgenInfo={description:"",displayName:"StyledButton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#StyledButton"]={docgenInfo:_.__docgenInfo,name:"StyledButton",path:"src/components/button/index.tsx#StyledButton"})}catch{}try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}var s=(t=>(t.primary="primary",t.secondary="secondary",t.tertiary="tertiary",t))(s||{});Object.keys(s).map(t=>t);const at={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button } from "./index";
import { ButtonProps, ButtonVariants } from "./types";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { Theme } from "../../shared/theme";
import { Typography } from "../typography";
import { TypographyVariants } from "../typography/variants";

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
  content: <Typography content="Primary Default" variant={TypographyVariants.button} theme={Theme} />,
  onClick: () => alert("PrimaryDefault clicked!"),
};

export const PrimaryCustomStyle = Template.bind({});
PrimaryCustomStyle.args = {
  content: <Typography content="Primary Custom Style" variant={TypographyVariants.button} />,
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
  content: <Typography content="Primary Themed" variant={TypographyVariants.button} />,
  theme: Theme,
  onClick: () => alert("PrimaryThemed clicked!"),
};

// Secondary
export const SecondaryDefault = Template.bind({});
SecondaryDefault.args = {
  content: <Typography content="Secondary Default" variant={TypographyVariants.button} />,
  variant: ButtonVariants.secondary,
  onClick: () => alert("SecondaryDefault clicked!"),
};

export const SecondaryCustomStyle = Template.bind({});
SecondaryCustomStyle.args = {
  content: <Typography content="Secondary Custom Style" variant={TypographyVariants.button} />,
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
  content: <Typography content="Secondary Themed" variant={TypographyVariants.button} />,
  variant: ButtonVariants.secondary,
  theme: Theme,
  onClick: () => alert("SecondaryThemed clicked!"),
};

// Tertiary
export const TertiaryDefault = Template.bind({});
TertiaryDefault.args = {
  content: <Typography content="Tertiary Default" variant={TypographyVariants.button} />,
  variant: ButtonVariants.tertiary,
  onClick: () => alert("TertiaryDefault clicked!"),
};

export const TertiaryCustomStyle = Template.bind({});
TertiaryCustomStyle.args = {
  content: <Typography content="Tertiary Custom Style" variant={TypographyVariants.button} />,
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
  content: <Typography content="Tertiary Themed" variant={TypographyVariants.button} />,
  variant: ButtonVariants.tertiary,
  theme: Theme,
  onClick: () => alert("TertiaryThemed clicked!"),
};
`,locationsMap:{"primary-default":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"primary-custom-style":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"primary-themed":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"secondary-default":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"secondary-custom-style":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"secondary-themed":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"tertiary-default":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"tertiary-custom-style":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}},"tertiary-themed":{startLoc:{col:48,line:50},endLoc:{col:1,line:54},startBody:{col:48,line:50},endBody:{col:1,line:54}}}}},component:m,title:"Components/Button",argTypes:{content:{defaultValue:()=>a("span",{children:"Button"})},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",padding:"1em 2em",margin:"0em",borderRadius:"1em",borderWidth:"1px",gap:"0.5em"}}}},y=l(t=>a(A,{children:a(m,{...t})}),"Template"),N=y.bind({});N.args={content:a(c,{content:"Primary Default",variant:d.button,theme:i}),onClick:()=>alert("PrimaryDefault clicked!")};const K=y.bind({});K.args={content:a(c,{content:"Primary Custom Style",variant:d.button}),style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"green",fontWeight:900},onClick:()=>alert("PrimaryCustomStyle clicked!")};const Y=y.bind({});Y.args={content:a(c,{content:"Primary Themed",variant:d.button}),theme:i,onClick:()=>alert("PrimaryThemed clicked!")};const z=y.bind({});z.args={content:a(c,{content:"Secondary Default",variant:d.button}),variant:s.secondary,onClick:()=>alert("SecondaryDefault clicked!")};const F=y.bind({});F.args={content:a(c,{content:"Secondary Custom Style",variant:d.button}),variant:s.secondary,style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"white",color:"blue",fontWeight:900},onClick:()=>alert("SecondaryCustomStyle clicked!")};const G=y.bind({});G.args={content:a(c,{content:"Secondary Themed",variant:d.button}),variant:s.secondary,theme:i,onClick:()=>alert("SecondaryThemed clicked!")};const J=y.bind({});J.args={content:a(c,{content:"Tertiary Default",variant:d.button}),variant:s.tertiary,onClick:()=>alert("TertiaryDefault clicked!")};const Q=y.bind({});Q.args={content:a(c,{content:"Tertiary Custom Style",variant:d.button}),variant:s.tertiary,style:{width:"150px",boxShadow:"0px 0px 4px #333",backgroundColor:"white",color:"#333",padding:"4px 8px"},onClick:()=>alert("TertiaryCustomStyle clicked!")};const U=y.bind({});U.args={content:a(c,{content:"Tertiary Themed",variant:d.button}),variant:s.tertiary,theme:i,onClick:()=>alert("TertiaryThemed clicked!")};const lt=["PrimaryDefault","PrimaryCustomStyle","PrimaryThemed","SecondaryDefault","SecondaryCustomStyle","SecondaryThemed","TertiaryDefault","TertiaryCustomStyle","TertiaryThemed"];export{K as PrimaryCustomStyle,N as PrimaryDefault,Y as PrimaryThemed,F as SecondaryCustomStyle,z as SecondaryDefault,G as SecondaryThemed,Q as TertiaryCustomStyle,J as TertiaryDefault,U as TertiaryThemed,lt as __namedExportsOrder,at as default};
//# sourceMappingURL=index.stories-2da926c9.js.map
