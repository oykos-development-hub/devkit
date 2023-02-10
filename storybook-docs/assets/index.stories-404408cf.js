var k=Object.defineProperty;var p=(n,r)=>k(n,"name",{value:r,configurable:!0});import{r as C}from"./index-d84d9d3b.js";import{s,C as b,T as d,S}from"./index-6d3d827b.js";import{a as v,j as a}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";var c=(n=>(n.sm="sm",n.md="md",n))(c||{});const T=s.div`
  display: inline-block;
  vertical-align: middle;
`,f=s.svg(({disabled:n,theme:r})=>{const t=r||d,{gray300:o,white:e}=t.palette;return b`
    fill: none;
    stroke: ${n?o:e};
    stroke-width: 0.25rem;
    border-radius: 50%;
  `}),g=s.input.attrs({type:"checkbox"})`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  width: 0.063rem;
  height: 0.063rem;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
`,_=s.div(({checked:n,disabled:r,theme:t,size:o,style:e})=>{const i=t||d,{primary500:l,gray50:h,gray300:y}=i.palette,u={sm:"0.25rem",md:"0.375rem"},x={sm:"1rem",md:"1.25rem"};return b`
    display: inline-block;
    width: ${(e==null?void 0:e.width)||x[o]};
    height: ${(e==null?void 0:e.height)||x[o]};
    background: ${n?l:h};
    border: 1px solid ${l};
    border-radius: ${(e==null?void 0:e.borderRadius)||u[o]};
    cursor: ${r?"auto":"pointer"};

    ${g}:focus + & {
      box-shadow: ${r?"none":"0 0 0 0.063rem #f4ebff"};
    }

    &:hover {
      border: ${r?"1px solid #e0e0e0":"1px solid "+l};
      box-shadow: ${r?"none":"0 0 0 0.25rem #f4ebff"};
    }

    &[disabled] {
      background: ${h};
      border: 1px solid ${y};
      border-radius: ${(e==null?void 0:e.borderRadius)||u[o]};
    }

    ${f} {
      visibility: ${n?"visible":"hidden"};
    }

    ${{...e}}
  `}),m=p(({checked:n=!1,size:r=c.sm,onClick:t,style:o,theme:e=d,disabled:i=!1})=>v(T,{children:[a(g,{checked:n}),a(_,{checked:n,onClick:t,size:r,style:o,theme:e,disabled:i,children:a(f,{viewBox:"0 0 24 24",theme:e,disabled:i,children:a("polyline",{points:"20 6 9 17 4 12"})})})]}),"Checkbox");try{m.displayName="Checkbox",m.__docgenInfo={description:"",displayName:"Checkbox",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},size:{defaultValue:{value:"CheckboxSize.sm"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'}]}},disabled:{defaultValue:{value:"false"},description:"",name:"disabled",required:!1,type:{name:"boolean"}},indeterminate:{defaultValue:null,description:"",name:"indeterminate",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>) => void"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},theme:{defaultValue:{value:`{
  mediaScreenBreakpoints: {
    xs: "480px",
    sm: "576px",
    md: "767px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
  borderRadius: {
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "16px",
    full: "50%",
  },
  borderWidth: {
    xs: "1px",
    sm: "2px",
    md: "3px",
    lg: "4px",
  },
  fontSize: {
    xs: "0.6rem",
    sm: "1rem",
    md: "1.6rem",
    lg: "2.8rem",
    xl: "4rem",
    xxl: "7rem",
  },
  fontWeight: {
    regular: "400",
    semiBold: "600",
    bold: "700",
  },
  typographyFontSize: {
    h1: "3.375rem",
    h2: "2.625rem",
    h3: "2rem",
    h4: "1.75rem",
    h5: "1.25rem",
    h6: "1.125rem",
    body: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    link: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    caption: "0.75rem",
    helperText: "0.75rem",
    code: "0.875rem",
  },
  typographyLineHeight: {
    h1: "4rem",
    h2: "3.125rem",
    h3: "2.5rem",
    h4: "2.25rem",
    h5: "1.75rem",
    h6: "1.625rem",
    body: {
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.625rem",
    },
    link: {
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.625rem",
    },
    caption: "1rem",
    helperText: "1rem",
    code: "1.25rem",
  },
  lineHeight: {
    xs: "0.85rem",
    sm: "1.2rem",
    md: "2rem",
    lg: "3.4rem",
    xl: "5rem",
    xxl: "8.5rem",
  },
  fontFamily: {
    one: "Rubik, sans-serif",
    two: "Inter, sans-serif",
    three: "JetBrains Mono",
  },
  palette: {
    ...colors,
  },
}`},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/checkbox/index.tsx#Checkbox"]={docgenInfo:m.__docgenInfo,name:"Checkbox",path:"src/components/checkbox/index.tsx#Checkbox"})}catch{}const z={parameters:{storySource:{source:`import React, { useState } from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Checkbox } from "./";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { CheckboxSize } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
  argTypes: {
    size: {
      control: {
        type: "radio",
        options: ["sm", "md"],
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    style: {
      control: {
        type: "object",
      },
    },
    theme: {
      control: {
        type: "object",
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => {
  const [value, setValue] = useState(false);
  return (
    <StoryWrapper>
      <Checkbox
        {...args}
        checked={value}
        onClick={() => {
          if (args.disabled) return;

          setValue(!value);
        }}
      />
    </StoryWrapper>
  );
};

export const Default = Template.bind({});
Default.args = {
  size: CheckboxSize.sm,
  disabled: false,
  theme: Theme,
};
`,locationsMap:{default:{startLoc:{col:50,line:36},endLoc:{col:1,line:51},startBody:{col:50,line:36},endBody:{col:1,line:51}}}}},title:"Components/Checkbox",component:m,argTypes:{size:{control:{type:"radio",options:["sm","md"]}},disabled:{control:{type:"boolean"}},style:{control:{type:"object"}},theme:{control:{type:"object"}}}},$=p(n=>{const[r,t]=C.useState(!1);return a(S,{children:a(m,{...n,checked:r,onClick:()=>{n.disabled||t(!r)}})})},"Template"),w=$.bind({});w.args={size:c.sm,disabled:!1,theme:d};const M=["Default"];export{w as Default,M as __namedExportsOrder,z as default};
//# sourceMappingURL=index.stories-404408cf.js.map
