var b=Object.defineProperty;var d=(a,i)=>b(a,"name",{value:i,configurable:!0});import{r as p,R as x}from"./index-d84d9d3b.js";import{I as T,b as c}from"./index-973ac81a.js";import{s as v,S as _}from"./story-wrapper-07e05087.js";import{j as y}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const O=v.div`
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
`,l={},I="pinRef-",g=/^(\d*\.)?\d+$/,u=d(({handleInput:a,length:i=4,type:N=c.number,variant:w})=>{const[t,m]=p.useState([]);t.forEach((e,n)=>{l[`${I}${n}`]=x.createRef()});const P=p.useCallback(e=>{const{key:n,keyCode:r}=e;if(r===8||r===46){const o=t.filter(s=>!!s);o.pop();for(let s=o.length;s<i;s++)o.push("");m(o)}},[t]),S=d((e,n)=>{if(g.test(e)&&m(r=>r.map((o,s)=>s!==n?o:e)),(e==null?void 0:e.length)>1&&(e=e[e.length-1]),(e==null?void 0:e.length)===i&&g.test(e))return m(e.split(""))},"handleOnChange"),h=d(()=>{var n,r;const e=t.filter(o=>!!o);e.length&&l[`pinRef-${e.length}`]?(n=l[`pinRef-${e.length}`].current)==null||n.focus():(r=l["pinRef-0"].current)==null||r.focus()},"handleFocus");return p.useEffect(()=>(window.addEventListener("keydown",P),()=>{window.removeEventListener("keydown",P)}),[P]),p.useEffect(()=>{a&&a(t.join("")),setTimeout(()=>{h()},100)},[t]),p.useEffect(()=>{const e=[];if(i){for(let n=0;n<i;n+=1)e.push("");m(e)}},[]),y(O,{children:t.map((e,n)=>y(T,{variant:w,type:N,id:`${n}`,value:e,onChange:r=>S(r.target.value,n),disabled:!!n&&!t[n-1]||!!t[n+1],maxLength:i,inputRef:l[`${I}${n}`],pattern:"[0-9]*"},n))})},"Pin");try{u.displayName="Pin",u.__docgenInfo={description:"",displayName:"Pin",props:{handleInput:{defaultValue:null,description:"",name:"handleInput",required:!0,type:{name:"(value: string) => void"}},type:{defaultValue:{value:'InputTypes["number"]'},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"number"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"color"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},length:{defaultValue:{value:"4"},description:"",name:"length",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/pin/index.tsx#Pin"]={docgenInfo:u.__docgenInfo,name:"Pin",path:"src/components/pin/index.tsx#Pin"})}catch{}const M={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { InputTypes } from "../input/types";

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
  type: InputTypes.password,
  variant: "standard",
};
export const PINPasswordOutlined = Template.bind({});
PINPasswordOutlined.args = {
  type: InputTypes.password,
  variant: "outlined",
};

export const PINNumericStandard = Template.bind({});
PINNumericStandard.args = {
  type: InputTypes.number,
  variant: "standard",
};
export const PINNumericOutlined = Template.bind({});
PINNumericOutlined.args = {
  type: InputTypes.number,
  variant: "outlined",
};
`,locationsMap:{"pin-password-standard":{startLoc:{col:45,line:26},endLoc:{col:1,line:30},startBody:{col:45,line:26},endBody:{col:1,line:30}},"pin-password-outlined":{startLoc:{col:45,line:26},endLoc:{col:1,line:30},startBody:{col:45,line:26},endBody:{col:1,line:30}},"pin-numeric-standard":{startLoc:{col:45,line:26},endLoc:{col:1,line:30},startBody:{col:45,line:26},endBody:{col:1,line:30}},"pin-numeric-outlined":{startLoc:{col:45,line:26},endLoc:{col:1,line:30},startBody:{col:45,line:26},endBody:{col:1,line:30}}}}},title:"Components/PIN input",component:u,argTypes:{variant:{control:{type:"radio",options:["standard","outlined"]}},type:{control:{type:"radio",options:["password","numeric"]}}}},f=d(a=>y(_,{children:y(u,{...a})}),"Template"),C=f.bind({});C.args={type:c.password,variant:"standard"};const R=f.bind({});R.args={type:c.password,variant:"outlined"};const L=f.bind({});L.args={type:c.number,variant:"standard"};const E=f.bind({});E.args={type:c.number,variant:"outlined"};const j=["PINPasswordStandard","PINPasswordOutlined","PINNumericStandard","PINNumericOutlined"];export{E as PINNumericOutlined,L as PINNumericStandard,R as PINPasswordOutlined,C as PINPasswordStandard,j as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-76dea79a.js.map
