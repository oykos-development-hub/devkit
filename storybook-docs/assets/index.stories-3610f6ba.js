var x=Object.defineProperty;var a=(e,l)=>x(e,"name",{value:l,configurable:!0});import{r}from"./index-d84d9d3b.js";import{C as R,s as y,T as w,S as b}from"./index-63a12349.js";import{a as i,j as t}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const S=a(e=>{var l,o,n;return e.backgroundColor||((n=(o=(l=e.theme)==null?void 0:l.palette)==null?void 0:o.light)==null?void 0:n.one)||"#f9f9f9"},"basicColor"),v=a(e=>{var l,o,n;return e.collapsedColor||((n=(o=(l=e.theme)==null?void 0:l.palette)==null?void 0:o.main)==null?void 0:n.four)||"#00bfff"},"collapsedColor"),E=a(e=>{var l,o,n;return e.hoverBackground||((n=(o=(l=e.theme)==null?void 0:l.palette)==null?void 0:o.light)==null?void 0:n.two)||"#ededed"},"hoverColor"),C=R`
  overflow: hidden;
  width: ${e=>e.width||"300px"};

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
    border-bottom: 1px solid lightgrey;

    &:hover {
      cursor: pointer;
    }

    & > div:first-child {
      justify-content: flex-start;
      gap: 0.5em;
    }

    & #arrow-wrapper {
      & svg {
        transform: ${e=>`rotate(${e.collapsed?"-180deg":"0"})`};
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
`,T=y.div`
  ${C}

  #accordion-header {
    background-color: ${e=>e.collapsed?v(e):S(e)};
    border: none;
    border-radius: ${e=>{var l,o;return e.borderRadius||((o=(l=e.theme)==null?void 0:l.borderRadius)==null?void 0:o.md)||"0em"}};

    &:hover {
      background-color: ${e=>e.collapsed?v(e):E(e)};
    }
  }
`,f=a(({variant:e,collapsed:l,scrollHeight:o,...n})=>{const[c,h]=r.useState(!1),[p,g]=r.useState(0),s=r.useRef(null);return i(T,{variant:"filled",collapsed:c||l,scrollHeight:p,...n,children:[i("div",{id:"accordion-header",onClick:()=>{g(s.current.scrollHeight),h(!c)},children:[i("div",{children:[n.iconLeft&&t("div",{id:"accordion-icon-wrapper",children:n.iconLeft}),t("p",{children:n.title})]}),n.iconRight&&t("div",{id:"arrow-wrapper",children:n.iconRight})]}),(n.contentText||n.contentElement)&&t("div",{id:"accordion-content",ref:s,children:n.contentElement?n.contentElement:t("p",{children:n.contentText})})]})},"Filled");try{f.displayName="Filled",f.__docgenInfo={description:"",displayName:"Filled",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'}]}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},contentText:{defaultValue:null,description:"",name:"contentText",required:!1,type:{name:"string"}},contentElement:{defaultValue:null,description:"",name:"contentElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},scrollHeight:{defaultValue:null,description:"",name:"scrollHeight",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},hoverBackground:{defaultValue:null,description:"",name:"hoverBackground",required:!1,type:{name:"string"}},collapsedColor:{defaultValue:null,description:"",name:"collapsedColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/variants/filled.tsx#Filled"]={docgenInfo:f.__docgenInfo,name:"Filled",path:"src/components/accordion/variants/filled.tsx#Filled"})}catch{}const V=y.div`
  ${C}

  & #accordion-header:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    top: 100%;
    height: 2px;
    width: 100%;
    background-color: ${e=>v(e)};
    transform: ${e=>`scale(${e.collapsed?"1":"0"}, 1)`};
    transition: transform 0.3s ease-out;
  }
`,u=a(({variant:e,collapsed:l,scrollHeight:o,...n})=>{const[c,h]=r.useState(!1),[p,g]=r.useState(0),s=r.useRef(null);return i(V,{variant:"standard",collapsed:c||l,scrollHeight:p,...n,children:[i("div",{id:"accordion-header",onClick:()=>{g(s.current.scrollHeight),h(!c)},children:[i("div",{children:[n.iconLeft&&t("div",{id:"accordion-icon-wrapper",children:n.iconLeft}),t("p",{children:n.title})]}),n.iconRight&&t("div",{id:"arrow-wrapper",children:n.iconRight})]}),(n.contentText||n.contentElement)&&t("div",{id:"accordion-content",ref:s,children:n.contentElement?n.contentElement:t("p",{children:n.contentText})})]})},"Standard");try{u.displayName="Standard",u.__docgenInfo={description:"",displayName:"Standard",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'}]}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},contentText:{defaultValue:null,description:"",name:"contentText",required:!1,type:{name:"string"}},contentElement:{defaultValue:null,description:"",name:"contentElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},scrollHeight:{defaultValue:null,description:"",name:"scrollHeight",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},hoverBackground:{defaultValue:null,description:"",name:"hoverBackground",required:!1,type:{name:"string"}},collapsedColor:{defaultValue:null,description:"",name:"collapsedColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/variants/standard.tsx#Standard"]={docgenInfo:u.__docgenInfo,name:"Standard",path:"src/components/accordion/variants/standard.tsx#Standard"})}catch{}const m=a(e=>{const l=e.variant??"standard";return l==="standard"?t(u,{...e}):l==="filled"?t(f,{...e}):t(u,{...e})},"Accordion");try{m.displayName="Accordion",m.__docgenInfo={description:"",displayName:"Accordion",props:{width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"filled"'}]}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"string"}},contentText:{defaultValue:null,description:"",name:"contentText",required:!1,type:{name:"string"}},contentElement:{defaultValue:null,description:"",name:"contentElement",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},scrollHeight:{defaultValue:null,description:"",name:"scrollHeight",required:!1,type:{name:"number"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},hoverBackground:{defaultValue:null,description:"",name:"hoverBackground",required:!1,type:{name:"string"}},collapsedColor:{defaultValue:null,description:"",name:"collapsedColor",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/accordion/index.tsx#Accordion"]={docgenInfo:m.__docgenInfo,name:"Accordion",path:"src/components/accordion/index.tsx#Accordion"})}catch{}const F={parameters:{storySource:{source:`import React from "react";
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
`,locationsMap:{"standard-default":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"standard-theme":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"filled-default":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"filled-themed":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"with-content-element":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}},"with-icon-left":{startLoc:{col:51,line:14},endLoc:{col:1,line:18},startBody:{col:51,line:14},endBody:{col:1,line:18}}}}},title:"Components/Accordion",component:m,argTypes:{}},d=a(e=>t(b,{children:t(m,{...e})}),"Template"),L=d.bind({});L.args={title:"Accordion",variant:"standard",iconRight:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice."};const B=d.bind({});B.args={title:"Accordion",variant:"standard",iconRight:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",theme:w};const _=d.bind({});_.args={title:"Accordion",variant:"filled",iconRight:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice."};const q=d.bind({});q.args={title:"Accordion",variant:"filled",iconRight:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice.",theme:w};const A=d.bind({});A.args={title:"Accordion",variant:"filled",iconRight:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),contentElement:i("div",{children:[t("h3",{children:"Hello"}),t("p",{children:"World!"})]})};const H=d.bind({});H.args={title:"Accordion",variant:"standard",iconRight:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"black",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"})}),iconLeft:t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"grey",viewBox:"0 0 16 16",children:t("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M13.4418 1.3335L11.5085 10.5418C11.2585 12.1918 9.80016 13.4335 8.11683 13.4335H1.3335V14.6668H8.1085C10.4335 14.6668 12.3835 13.0085 12.7502 10.7085L14.6668 1.3335H13.4418ZM3.12518 11.7168H9.05851C9.84184 11.7168 10.5085 11.1752 10.6752 10.4168L12.0002 3.63351C12.0502 3.39184 12.0002 3.00013 11.6669 2.66676C11.0002 2.00012 9.98351 1.45017 9.01684 3.63351C9.01684 3.63351 8.10851 5.15851 9.01684 8.35851C9.01684 8.35851 9.47518 10.0502 7.07518 9.61684C7.07518 9.61684 3.43351 8.13351 2.86684 11.4168C2.84184 11.5752 2.96684 11.7168 3.12518 11.7168ZM4.14183 12.1835H8.72516C8.84022 12.1835 8.93349 12.2768 8.93349 12.3918V12.8085C8.93349 12.9236 8.84022 13.0168 8.72516 13.0168H4.14183C4.02677 13.0168 3.93349 12.9236 3.93349 12.8085V12.3918C3.93349 12.2768 4.02677 12.1835 4.14183 12.1835Z",fill:"grey"})}),contentText:"Below, you can see some colors close to #d3d3d3. Having a set of related colors can be useful if you need an inspirational alternative to your original color choice."};const $=["StandardDefault","StandardTheme","FilledDefault","FilledThemed","WithContentElement","WithIconLeft"];export{_ as FilledDefault,q as FilledThemed,L as StandardDefault,B as StandardTheme,A as WithContentElement,H as WithIconLeft,$ as __namedExportsOrder,F as default};
//# sourceMappingURL=index.stories-3610f6ba.js.map
