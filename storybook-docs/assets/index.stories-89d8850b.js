var b=Object.defineProperty;var a=(e,o)=>b(e,"name",{value:o,configurable:!0});import{r as s}from"./index-d84d9d3b.js";import{C,s as m,T as f,S as R}from"./index-63a12349.js";import{a as d,j as n}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const T=a(e=>{var o,l,t;return e.backgroundColor||((t=(l=(o=e.theme)==null?void 0:o.palette)==null?void 0:l.light)==null?void 0:t.one)||"#f9f9f9"},"basicColor"),u=a(e=>{var o,l,t;return e.collapsedColor||((t=(l=(o=e.theme)==null?void 0:o.palette)==null?void 0:l.main)==null?void 0:t.four)||"#00bfff"},"collapsedColor"),g=a(e=>{var o,l,t;return e.hoverBackground||((t=(l=(o=e.theme)==null?void 0:o.palette)==null?void 0:l.light)==null?void 0:t.two)||"#ededed"},"hoverColor"),v=C`
  overflow: hidden;
  width: ${e=>e.width||"100%"};

  & p {
    margin: 0;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.75em;
  }

  #accordion-icon-wrapper,
  #arrow-wrapper {
    width: 1.5em;
    height: 1.5em;
  }

  & #accordion-header {
    position: relative;
    justify-content: space-between;
    padding: 0.75em;
    border-bottom: ${e=>`1px solid ${g(e)}`};

    &:hover {
      cursor: pointer;
    }

    & > div:first-child {
      justify-content: flex-start;
      gap: 0.5em;
    }

    & #arrow-wrapper {
      & svg {
        transform: ${e=>`rotate(${e.collapsed?"-180deg":0})`};
        transition: transform 0.3s ease-out;
      }
    }
  }

  & #accordion-content {
    display: block;

    height: ${e=>e.collapsed?`${e.scrollHeight}px`:0};
    transition: all 0.3s ease-out;

    & > * {
      padding: 0.5em 0;
      box-sizing: border-box;
    }
  }
`,S=m.div`
  ${v}

  #accordion-header {
    background-color: ${e=>e.collapsed?u(e):T(e)};
    border: none;
    border-radius: ${e=>{var o,l;return e.borderRadius||((l=(o=e.theme)==null?void 0:o.borderRadius)==null?void 0:l.md)||0}};

    &:hover {
      background-color: ${e=>e.collapsed?u(e):g(e)};
    }
  }
`,L=m.div`
  ${v}

  & #accordion-header:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 100%;
    height: 2px;
    width: 100%;
    background-color: ${e=>u(e)};
    transform: ${e=>`scale(${e.collapsed?"1":"0"}, 1)`};
    transition: transform 0.3s ease-out;
  }
`,c=a(e=>(e.variant??"standard")==="filled"?n(S,{...e}):n(L,{...e}),"Wrapper"),r=a(({variant:e,collapsed:o,scrollHeight:l,...t})=>{const[h,w]=s.useState(!1),[y,x]=s.useState(0),p=s.useRef(null);return d(c,{variant:e,collapsed:h||o,scrollHeight:y,...t,children:[d("div",{id:"accordion-header",onClick:()=>{x(p.current.scrollHeight),w(!h)},children:[d("div",{children:[t.iconLeft&&n("div",{id:"accordion-icon-wrapper",children:t.iconLeft}),n("p",{children:t.title})]}),t.iconRight&&n("div",{id:"arrow-wrapper",children:t.iconRight})]}),(t.contentText||t.contentElement)&&n("div",{id:"accordion-content",ref:p,children:t.contentElement?t.contentElement:n("p",{children:t.contentText})})]})},"Accordion");try{c.displayName="Wrapper",c.__docgenInfo={description:"",displayName:"Wrapper",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'}]}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},contentText:{defaultValue:null,description:"",name:"contentText",required:!1,type:{name:"string"}},contentElement:{defaultValue:null,description:"",name:"contentElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},scrollHeight:{defaultValue:null,description:"",name:"scrollHeight",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},hoverBackground:{defaultValue:null,description:"",name:"hoverBackground",required:!1,type:{name:"string"}},collapsedColor:{defaultValue:null,description:"",name:"collapsedColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/index.tsx#Wrapper"]={docgenInfo:c.__docgenInfo,name:"Wrapper",path:"src/components/accordion/index.tsx#Wrapper"})}catch{}try{r.displayName="Accordion",r.__docgenInfo={description:"",displayName:"Accordion",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'}]}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},contentText:{defaultValue:null,description:"",name:"contentText",required:!1,type:{name:"string"}},contentElement:{defaultValue:null,description:"",name:"contentElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},scrollHeight:{defaultValue:null,description:"",name:"scrollHeight",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},hoverBackground:{defaultValue:null,description:"",name:"hoverBackground",required:!1,type:{name:"string"}},collapsedColor:{defaultValue:null,description:"",name:"collapsedColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/index.tsx#Accordion"]={docgenInfo:r.__docgenInfo,name:"Accordion",path:"src/components/accordion/index.tsx#Accordion"})}catch{}const O={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Accordion } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { AccordionProps } from "./types";
import { Theme } from "../../shared/theme";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args: AccordionProps) => (
  <StoryWrapper>
    <Accordion {...args} />
  </StoryWrapper>
);

export const StandardDefault = Template.bind({});

StandardDefault.args = {
  title: "Accordion",
  variant: "standard",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
};

export const StandardTheme = Template.bind({});

StandardTheme.args = {
  title: "Accordion",
  variant: "standard",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
  theme: Theme,
};

export const FilledDefault = Template.bind({});

FilledDefault.args = {
  title: "Accordion",
  variant: "filled",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
};

export const FilledThemed = Template.bind({});

FilledThemed.args = {
  title: "Accordion",
  variant: "filled",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
  theme: Theme,
};

export const WithContentElement = Template.bind({});

WithContentElement.args = {
  title: "Accordion",
  variant: "filled",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  contentElement: (
    <div>
      <h3>Hello</h3>
      <p>World!</p>
    </div>
  ),
};

export const WithIconLeft = Template.bind({});

WithIconLeft.args = {
  title: "Accordion",
  variant: "standard",
  width: "300px",
  iconRight: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
      />
    </svg>
  ),
  iconLeft: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="grey" viewBox="0 0 16 16">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.4418 1.3335L11.5085 10.5418C11.2585 12.1918 9.80016 13.4335 8.11683 13.4335H1.3335V14.6668H8.1085C10.4335 14.6668 12.3835 13.0085 12.7502 10.7085L14.6668 1.3335H13.4418ZM3.12518 11.7168H9.05851C9.84184 11.7168 10.5085 11.1752 10.6752 10.4168L12.0002 3.63351C12.0502 3.39184 12.0002 3.00013 11.6669 2.66676C11.0002 2.00012 9.98351 1.45017 9.01684 3.63351C9.01684 3.63351 8.10851 5.15851 9.01684 8.35851C9.01684 8.35851 9.47518 10.0502 7.07518 9.61684C7.07518 9.61684 3.43351 8.13351 2.86684 11.4168C2.84184 11.5752 2.96684 11.7168 3.12518 11.7168ZM4.14183 12.1835H8.72516C8.84022 12.1835 8.93349 12.2768 8.93349 12.3918V12.8085C8.93349 12.9236 8.84022 13.0168 8.72516 13.0168H4.14183C4.02677 13.0168 3.93349 12.9236 3.93349 12.8085V12.3918C3.93349 12.2768 4.02677 12.1835 4.14183 12.1835Z"
        fill="grey"
      />
    </svg>
  ),
  contentText:
    "Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",
};
`,locationsMap:{"standard-default":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"standard-theme":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"filled-default":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"filled-themed":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"with-content-element":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"with-icon-left":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}}}}},title:"Components/Accordion",component:r,argTypes:{}},i=a(e=>n(R,{children:n(r,{...e})}),"Template"),B=i.bind({});B.args={title:"Accordion",variant:"standard",width:"300px",iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice."};const E=i.bind({});E.args={title:"Accordion",variant:"standard",width:"300px",iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",theme:f};const V=i.bind({});V.args={title:"Accordion",variant:"filled",width:"300px",iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice."};const A=i.bind({});A.args={title:"Accordion",variant:"filled",width:"300px",iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",theme:f};const H=i.bind({});H.args={title:"Accordion",variant:"filled",width:"300px",iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentElement:d("div",{children:[n("h3",{children:"Hello"}),n("p",{children:"World!"})]})};const _=i.bind({});_.args={title:"Accordion",variant:"standard",width:"300px",iconRight:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),iconLeft:n("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"grey",viewBox:"0 0 16 16",children:n("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.4418 1.3335L11.5085 10.5418C11.2585 12.1918 9.80016 13.4335 8.11683 13.4335H1.3335V14.6668H8.1085C10.4335 14.6668 12.3835 13.0085 12.7502 10.7085L14.6668 1.3335H13.4418ZM3.12518 11.7168H9.05851C9.84184 11.7168 10.5085 11.1752 10.6752 10.4168L12.0002 3.63351C12.0502 3.39184 12.0002 3.00013 11.6669 2.66676C11.0002 2.00012 9.98351 1.45017 9.01684 3.63351C9.01684 3.63351 8.10851 5.15851 9.01684 8.35851C9.01684 8.35851 9.47518 10.0502 7.07518 9.61684C7.07518 9.61684 3.43351 8.13351 2.86684 11.4168C2.84184 11.5752 2.96684 11.7168 3.12518 11.7168ZM4.14183 12.1835H8.72516C8.84022 12.1835 8.93349 12.2768 8.93349 12.3918V12.8085C8.93349 12.9236 8.84022 13.0168 8.72516 13.0168H4.14183C4.02677 13.0168 3.93349 12.9236 3.93349 12.8085V12.3918C3.93349 12.2768 4.02677 12.1835 4.14183 12.1835Z",fill:"grey"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice."};const I=["StandardDefault","StandardTheme","FilledDefault","FilledThemed","WithContentElement","WithIconLeft"];export{V as FilledDefault,A as FilledThemed,B as StandardDefault,E as StandardTheme,H as WithContentElement,_ as WithIconLeft,I as __namedExportsOrder,O as default};
//# sourceMappingURL=index.stories-89d8850b.js.map
