var O=Object.defineProperty;var f=(e,r)=>O(e,"name",{value:r,configurable:!0});import{s as b,C,T as u,S as w}from"./index-5b3ad76a.js";import{j as c}from"./jsx-dev-runtime-21a8a8df.js";import"./index-f4c43bdd.js";import"./index-8457a19c.js";import"./es.object.get-own-property-descriptor-ca06259f.js";var p=(e=>(e.primary="primary",e.secondary="secondary",e.tertiary="tertiary",e))(p||{}),y=(e=>(e.xs="xs",e.sm="sm",e.md="md",e.lg="lg",e.xl="xl",e))(y||{});const E=b.button(()=>({theme:e,disabled:r,variant:n,size:l,style:t})=>{const{gray50:o,white:a,primary500:s,secondary500:d,gray200:i,error500:B,error100:v,primary800:k,secondary800:N,error800:T}=e.palette,_={primary:r?i:s,secondary:r?i:d,tertiary:r?v:B},S={primary:k,secondary:N,tertiary:T},V={primary:r?i:s,secondary:r?i:d,tertiary:r?v:B},z={xs:"0.5rem 0.875rem",sm:"0.625rem 1rem",md:"0.625rem 1.125rem",lg:"0.75rem 1.25rem",xl:"1rem 1.75rem"},$={primary:a,secondary:o,tertiary:a};return C`
    align-items: center;
    justify-content: center;
    background-color: ${_[n]};
    border: 1px solid ${V[n]};
    border-radius: ${e.borderRadius.lg||"0.5rem"};
    padding: ${z[l]};
    box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
    &:hover {
      background-color: ${S[n]};
      div {
        color: ${$[n]};
      }
    }
    ${{...t}}
  `}),j=b.div(({disabled:e,theme:r,size:n,variant:l,customStyle:t})=>{const{gray300:o,gray700:a,white:s}=r.palette,d={xs:"0.875rem",sm:"0.875rem",md:"1rem",lg:"1rem",xl:"1.125rem"},i={primary:e?o:s,secondary:e?o:a,tertiary:s};return C`
    color: ${(t==null?void 0:t.color)||i[l]};
    font-size: ${(t==null?void 0:t.fontSize)||d[n]};
  `});var x="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.tsx";const m=f(({onClick:e,content:r,disabled:n=!1,variant:l=p.primary,size:t=y.lg,style:o,theme:a})=>c(E,{style:o,disabled:n,variant:l,size:t,onClick:e,theme:a||u,children:c(j,{size:t,disabled:n,variant:l,theme:a,customStyle:o,children:r},void 0,!1,{fileName:x,lineNumber:18,columnNumber:7},void 0)},void 0,!1,{fileName:x,lineNumber:17,columnNumber:5},void 0),"Button");try{m.displayName="Button",m.__docgenInfo={description:"",displayName:"Button",props:{content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},variant:{defaultValue:{value:"ButtonVariants.primary"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((e?: MouseEvent<any, MouseEvent>) => any)"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},size:{defaultValue:{value:"ButtonSizes.lg"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"xs"'},{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/button/index.tsx#Button"]={docgenInfo:m.__docgenInfo,name:"Button",path:"src/components/button/index.tsx#Button"})}catch{}var g="C:\\Development\\Oykos\\devkit\\src\\components\\button\\index.stories.tsx";const P={parameters:{storySource:{source:`import React from "react";\r
import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { ButtonProps, ButtonSizes, ButtonVariants } from "./types";\r
import { StoryWrapper } from "../../shared/components/story-wrapper";\r
import { Theme } from "../../shared/theme";\r
import { Button } from "./index";\r
\r
export default {\r
  component: Button,\r
  title: "Components/Button",\r
  argTypes: {\r
    content: {\r
      defaultValue: () => <span>Button</span>,\r
    },\r
    variant: {\r
      control: {\r
        type: "radio",\r
        options: ["primary", "secondary", "tertiary"],\r
      },\r
    },\r
    disabled: {\r
      control: {\r
        type: "boolean",\r
      },\r
    },\r
    onClick: {\r
      defaultValue: () => alert("Button clicked!"),\r
    },\r
    theme: {\r
      control: {\r
        type: "object",\r
      },\r
      defaultValue: Theme,\r
    },\r
    style: {\r
      defaultValue: {\r
        width: "fit-content",\r
        height: "fit-content",\r
        margin: "0em",\r
        borderWidth: "1px",\r
        gap: "0.5em",\r
      },\r
    },\r
    size: {\r
      control: {\r
        type: "radio",\r
        options: ["xs", "sm", "md", "lg", "xl"],\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Button>;\r
\r
const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (\r
  <StoryWrapper>\r
    <Button {...args} />\r
  </StoryWrapper>\r
);\r
\r
export const CustomButton = Template.bind({});\r
CustomButton.args = {\r
  content: "Button CTA",\r
  onClick: () => alert("Button clicked!"),\r
  variant: ButtonVariants.primary,\r
  size: ButtonSizes.lg,\r
};\r
\r
export const StyledButton = Template.bind({});\r
StyledButton.args = {\r
  content: "Styled Button",\r
  onClick: () => alert("Button clicked!"),\r
  variant: ButtonVariants.primary,\r
  size: ButtonSizes.lg,\r
  style: {\r
    backgroundColor: Theme.palette.success500,\r
    color: Theme.palette.white,\r
  },\r
};\r
`,locationsMap:{"custom-button":{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}},"styled-button":{startLoc:{col:48,line:53},endLoc:{col:1,line:57},startBody:{col:48,line:53},endBody:{col:1,line:57}}}}},component:m,title:"Components/Button",argTypes:{content:{defaultValue:()=>c("span",{children:"Button"},void 0,!1,{fileName:g,lineNumber:21,columnNumber:27},void 0)},variant:{control:{type:"radio",options:["primary","secondary","tertiary"]}},disabled:{control:{type:"boolean"}},onClick:{defaultValue:()=>alert("Button clicked!")},theme:{control:{type:"object"},defaultValue:u},style:{defaultValue:{width:"fit-content",height:"fit-content",margin:"0em",borderWidth:"1px",gap:"0.5em"}},size:{control:{type:"radio",options:["xs","sm","md","lg","xl"]}}}},h=f(e=>c(w,{children:c(m,{...e},void 0,!1,{fileName:g,lineNumber:63,columnNumber:5},void 0)},void 0,!1,{fileName:g,lineNumber:62,columnNumber:3},void 0),"Template"),q=h.bind({});q.args={content:"Button CTA",onClick:()=>alert("Button clicked!"),variant:p.primary,size:y.lg};const R=h.bind({});R.args={content:"Styled Button",onClick:()=>alert("Button clicked!"),variant:p.primary,size:y.lg,style:{backgroundColor:u.palette.success500,color:u.palette.white}};const F=["CustomButton","StyledButton"];export{q as CustomButton,R as StyledButton,F as __namedExportsOrder,P as default};
//# sourceMappingURL=index.stories-0c46aba9.js.map
