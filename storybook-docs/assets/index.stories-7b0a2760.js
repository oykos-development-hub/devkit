var q=Object.defineProperty;var i=(e,t)=>q(e,"name",{value:t,configurable:!0});import{C as W,T as l,s as w,S as j}from"./story-wrapper-f5aa86ab.js";import{H as u,a as p,b,c as h,d as f,e as g,S as T,f as $,B as v,g as S,h as C,C as x,O as k,E as B,T as c,i as d}from"./index-302a02c1.js";import{j as r}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";const L=W`
  align-items: center;
  border-radius: ${e=>{var t,n,o;return((t=e.style)==null?void 0:t.borderRadius)||((o=(n=e.theme)==null?void 0:n.borderRadius)==null?void 0:o.lg)||l.borderRadius.lg||"1em"}};
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
`,P=i(e=>{var t,n,o;return((t=e.style)==null?void 0:t.backgroundColor)||((o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.primary500)||l.palette.primary500},"backgroundColor$2"),A=i(e=>{var t,n,o,O;return((t=e.style)==null?void 0:t.borderColor)||((n=e.style)==null?void 0:n.backgroundColor)||((O=(o=e.theme)==null?void 0:o.palette)==null?void 0:O.primary500)||l.palette.primary500},"borderColor"),E=i(e=>{var t,n,o;return((t=e.style)==null?void 0:t.color)||((o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.white)||l.palette.white},"color$2"),H=w.button`
  ${L};
  background-color: ${e=>P(e)};
  border-color: ${e=>A(e)};
  color: ${e=>E(e)};

  &:hover:not([disabled]) {
    background-color: transparent !important;
    color: ${e=>P(e)};

    ${u}, ${p}, ${b}, ${h}, ${f}, ${g}, ${T}, ${$}, ${v}, ${S}, ${C}, ${x}, ${k}, ${B} {
      color: ${e=>P(e)};
    }
  }

  ${u}, ${p}, ${b}, ${h}, ${f}, ${g}, ${T}, ${$}, ${v}, ${S}, ${C}, ${x}, ${k}, ${B} {
    color: ${e=>E(e)};
  }
`,N=i(e=>{var t,n,o;return((t=e.style)==null?void 0:t.backgroundColor)||((o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.secondary500)||l.palette.secondary500},"backgroundColor$1"),D=i(e=>{var t,n,o;return((t=e.style)==null?void 0:t.color)||((o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.gray700)||l.palette.gray700},"color$1"),M=w.button`
  ${L};
  background-color: ${e=>N(e)};
  border-color: ${e=>D(e)};
  color: ${e=>D(e)};

  &:hover:not([disabled]) {
    border-color: ${e=>N(e)+" !important"};
    background-color: transparent;
    color: ${e=>N(e)+" !important"};

    ${u}, ${p}, ${b}, ${h}, ${f}, ${g}, ${T}, ${$}, ${v}, ${S}, ${C}, ${x}, ${k}, ${B} {
      color: ${e=>N(e)+" !important"};
    }
  }

  ${u}, ${p}, ${b}, ${h}, ${f}, ${g}, ${T}, ${$}, ${v}, ${S}, ${C}, ${x}, ${k}, ${B} {
    color: ${e=>D(e)};
  }
`,I=i(e=>{var t,n,o;return((t=e.style)==null?void 0:t.backgroundColor)||((o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.error500)||l.palette.error500},"backgroundColor"),R=i(e=>{var t,n,o;return((t=e.style)==null?void 0:t.color)||((o=(n=e.theme)==null?void 0:n.palette)==null?void 0:o.white)||l.palette.white},"color"),K=w.button`
  ${L};
  background-color: ${e=>I(e)};
  color: ${e=>R(e)};
  padding: 0;

  &:hover:not([disabled]) {
    text-decoration: underline;
  }

  ${u}, ${p}, ${b}, ${h}, ${f}, ${g}, ${T}, ${$}, ${v}, ${S}, ${C}, ${x}, ${k}, ${B} {
    color: ${e=>R(e)};
  }
`;var V="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.tsx";const _=i(e=>{const t=e.variant??"primary";return t==="secondary"?r(M,{...e,type:"button"},void 0,!1,{fileName:V,lineNumber:10,columnNumber:39},void 0):t==="tertiary"?r(K,{...e,type:"button"},void 0,!1,{fileName:V,lineNumber:11,columnNumber:38},void 0):r(H,{...e,type:"submit"},void 0,!1,{fileName:V,lineNumber:13,columnNumber:10},void 0)},"StyledButton"),m=i(e=>r(_,{...e,children:e.content},void 0,!1,{fileName:V,lineNumber:17,columnNumber:10},void 0),"Button");try{_.displayName="StyledButton",_.__docgenInfo={description:"",displayName:"StyledButton",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#StyledButton"]={docgenInfo:_.__docgenInfo,name:"StyledButton",path:"src/components/button/index.tsx#StyledButton"})}catch{}try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}var s=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(s||{});Object.keys(s).map(e=>e);var a="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.stories.tsx";const ie={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"primary-default":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"primary-custom-style":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"primary-themed":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"secondary-default":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"secondary-custom-style":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"secondary-themed":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"tertiary-default":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"tertiary-custom-style":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}},"tertiary-themed":{startLoc:{col:48,line:49},endLoc:{col:1,line:53},startBody:{col:48,line:49},endBody:{col:1,line:53}}}}},component:m,title:"Components/Button",argTypes:{content:{defaultValue:()=>r("span",{children:"Button"},void 0,!1,{fileName:a,lineNumber:23,columnNumber:27},void 0)},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"}},style:{defaultValue:{width:"fit-content",height:"fit-content",padding:"1em 2em",margin:"0em",borderWidth:"1px",gap:"0.5em"}}}},y=i(e=>r(j,{children:r(m,{...e},void 0,!1,{fileName:a,lineNumber:59,columnNumber:5},void 0)},void 0,!1,{fileName:a,lineNumber:58,columnNumber:3},void 0),"Template"),Y=y.bind({});Y.args={content:r(c,{content:"Primary Default",variant:d.button,theme:l},void 0,!1,{fileName:a,lineNumber:66,columnNumber:12},void 0),onClick:()=>alert("PrimaryDefault clicked!")};const F=y.bind({});F.args={content:r(c,{content:"Primary Custom Style",variant:d.button},void 0,!1,{fileName:a,lineNumber:72,columnNumber:12},void 0),style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"green",fontWeight:900},onClick:()=>alert("PrimaryCustomStyle clicked!")};const z=y.bind({});z.args={content:r(c,{content:"Primary Themed",variant:d.button},void 0,!1,{fileName:a,lineNumber:84,columnNumber:12},void 0),theme:l,onClick:()=>alert("PrimaryThemed clicked!")};const G=y.bind({});G.args={content:r(c,{content:"Secondary Default",variant:d.button},void 0,!1,{fileName:a,lineNumber:92,columnNumber:12},void 0),variant:s.secondary,onClick:()=>alert("SecondaryDefault clicked!")};const J=y.bind({});J.args={content:r(c,{content:"Secondary Custom Style",variant:d.button},void 0,!1,{fileName:a,lineNumber:99,columnNumber:12},void 0),variant:s.secondary,style:{width:"150px",boxShadow:"5px 5px 2px #333",backgroundColor:"white",color:"blue",fontWeight:900},onClick:()=>alert("SecondaryCustomStyle clicked!")};const Q=y.bind({});Q.args={content:r(c,{content:"Secondary Themed",variant:d.button},void 0,!1,{fileName:a,lineNumber:113,columnNumber:12},void 0),variant:s.secondary,theme:l,onClick:()=>alert("SecondaryThemed clicked!")};const U=y.bind({});U.args={content:r(c,{content:"Tertiary Default",variant:d.button},void 0,!1,{fileName:a,lineNumber:122,columnNumber:12},void 0),variant:s.tertiary,onClick:()=>alert("TertiaryDefault clicked!")};const X=y.bind({});X.args={content:r(c,{content:"Tertiary Custom Style",variant:d.button},void 0,!1,{fileName:a,lineNumber:129,columnNumber:12},void 0),variant:s.tertiary,style:{width:"150px",boxShadow:"0px 0px 4px #333",backgroundColor:"white",color:"#333",padding:"4px 8px"},onClick:()=>alert("TertiaryCustomStyle clicked!")};const Z=y.bind({});Z.args={content:r(c,{content:"Tertiary Themed",variant:d.button},void 0,!1,{fileName:a,lineNumber:143,columnNumber:12},void 0),variant:s.tertiary,theme:l,onClick:()=>alert("TertiaryThemed clicked!")};const ce=["PrimaryDefault","PrimaryCustomStyle","PrimaryThemed","SecondaryDefault","SecondaryCustomStyle","SecondaryThemed","TertiaryDefault","TertiaryCustomStyle","TertiaryThemed"];export{F as PrimaryCustomStyle,Y as PrimaryDefault,z as PrimaryThemed,J as SecondaryCustomStyle,G as SecondaryDefault,Q as SecondaryThemed,X as TertiaryCustomStyle,U as TertiaryDefault,Z as TertiaryThemed,ce as __namedExportsOrder,ie as default};
//# sourceMappingURL=index.stories-7b0a2760.js.map
