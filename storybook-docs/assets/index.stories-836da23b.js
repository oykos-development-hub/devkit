var h=Object.defineProperty;var d=(a,i)=>h(a,"name",{value:i,configurable:!0});import{r as p,R as v}from"./index-d84d9d3b.js";import{I as x}from"./index-34d4c49a.js";import{s as _,S as O}from"./story-wrapper-eaf3a593.js";import{j as m}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const C=_.div`
  display: flex;
  width: fit-content;
  gap: 1em;

  & > div {
    width: 3em;
    & input {
      text-align: center;
      height: 3em;
    }
  }
`,c={},P="pinRef-",w=/^(\d*\.)?\d+$/,l=d(({handleInput:a,length:i=4,type:N="password",variant:g})=>{const[t,u]=p.useState([]);t.forEach((n,e)=>{c[`${P}${e}`]=v.createRef()});const y=p.useCallback(n=>{const{key:e,keyCode:r}=n;if(r===8||r===46){const o=t.filter(s=>!!s);o.pop();for(let s=o.length;s<i;s++)o.push("");u(o)}},[t]),S=d((n,e)=>{if(w.test(n)&&u(r=>r.map((o,s)=>s!==e?o:n)),(n==null?void 0:n.length)===i&&w.test(n))return u(n.split(""))},"handleOnChange"),I=d(()=>{var e,r;const n=t.filter(o=>!!o);n.length&&c[`pinRef-${n.length}`]?(e=c[`pinRef-${n.length}`].current)==null||e.focus():(r=c["pinRef-0"].current)==null||r.focus()},"handleFocus");return p.useEffect(()=>(window.addEventListener("keydown",y),()=>{window.removeEventListener("keydown",y)}),[y]),p.useEffect(()=>{a&&a(t.join("")),setTimeout(()=>{I()},100)},[t]),p.useEffect(()=>{const n=[];if(i){for(let e=0;e<i;e+=1)n.push("");u(n)}},[]),m(C,{children:t.map((n,e)=>m(x,{variant:g,type:N,id:`${e}`,value:n,onChange:r=>S(r.target.value,e),disabled:!!e&&!t[e-1]||!!t[e],maxLength:i,inputRef:c[`${P}${e}`],inputMode:"numeric",pattern:"[0-9]*"},e))})},"Pin");try{l.displayName="Pin",l.__docgenInfo={description:"",displayName:"Pin",props:{handleInput:{defaultValue:null,description:"",name:"handleInput",required:!0,type:{name:"(value: string) => void"}},type:{defaultValue:{value:"password"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"numeric"'},{value:'"password"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},length:{defaultValue:{value:"4"},description:"",name:"length",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/pin/index.tsx#Pin"]={docgenInfo:l.__docgenInfo,name:"Pin",path:"src/components/pin/index.tsx#Pin"})}catch{}const q={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  title: "Components/PIN input",
  component: Pin,
  argTypes: {
    variant: {
      control: {
        type: "radio",
        options: ["standard", "outlined"],
      },
    },
    type: {
      control: {
        type: "radio",
        options: ["password", "numeric"],
      },
    },
  },
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = (args) => (
  <StoryWrapper>
    <Pin {...args} />
  </StoryWrapper>
);

export const PINPasswordStandard = Template.bind({});
PINPasswordStandard.args = {
  type: "password",
  variant: "standard",
};
export const PINPasswordOutlined = Template.bind({});
PINPasswordOutlined.args = {
  type: "password",
  variant: "outlined",
};

export const PINNumericStandard = Template.bind({});
PINNumericStandard.args = {
  type: "numeric",
  variant: "standard",
};
export const PINNumericOutlined = Template.bind({});
PINNumericOutlined.args = {
  type: "numeric",
  variant: "outlined",
};
`,locationsMap:{"pin-password-standard":{startLoc:{col:45,line:25},endLoc:{col:1,line:29},startBody:{col:45,line:25},endBody:{col:1,line:29}},"pin-password-outlined":{startLoc:{col:45,line:25},endLoc:{col:1,line:29},startBody:{col:45,line:25},endBody:{col:1,line:29}},"pin-numeric-standard":{startLoc:{col:45,line:25},endLoc:{col:1,line:29},startBody:{col:45,line:25},endBody:{col:1,line:29}},"pin-numeric-outlined":{startLoc:{col:45,line:25},endLoc:{col:1,line:29},startBody:{col:45,line:25},endBody:{col:1,line:29}}}}},title:"Components/PIN input",component:l,argTypes:{variant:{control:{type:"radio",options:["standard","outlined"]}},type:{control:{type:"radio",options:["password","numeric"]}}}},f=d(a=>m(O,{children:m(l,{...a})}),"Template"),R=f.bind({});R.args={type:"password",variant:"standard"};const L=f.bind({});L.args={type:"password",variant:"outlined"};const T=f.bind({});T.args={type:"numeric",variant:"standard"};const b=f.bind({});b.args={type:"numeric",variant:"outlined"};const A=["PINPasswordStandard","PINPasswordOutlined","PINNumericStandard","PINNumericOutlined"];export{b as PINNumericOutlined,T as PINNumericStandard,L as PINPasswordOutlined,R as PINPasswordStandard,A as __namedExportsOrder,q as default};
//# sourceMappingURL=index.stories-836da23b.js.map
