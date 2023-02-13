var x=Object.defineProperty;var a=(s,i)=>x(s,"name",{value:i,configurable:!0});import{r as c,R as S}from"./index-d84d9d3b.js";import{I}from"./index-acf91d85.js";import{s as N,S as C}from"./index-6d3d827b.js";import{j as l}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4e3d2c5e.js";import"./index-4cb24bae.js";const R=N.div`
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
`,d={},y="pinRef-",P=/^(\d*\.)?\d+$/,m=a(({handleInput:s,length:i=4,type:h="password"})=>{const[t,u]=c.useState([]);t.forEach((e,n)=>{d[`${y}${n}`]=S.createRef()});const f=c.useCallback(e=>{const{key:n,keyCode:o}=e;if(o===8||o===46){const r=t.filter(p=>!!p);r.pop();for(let p=r.length;p<i;p++)r.push("");u(r)}},[t]),w=a((e,n)=>{if(P.test(e)&&u(o=>o.map((r,p)=>p!==n?r:e)),(e==null?void 0:e.length)>1&&(e=e[e.length-1]),(e==null?void 0:e.length)===i&&P.test(e))return u(e.split(""))},"handleOnChange"),_=a(()=>{var n,o;const e=t.filter(r=>!!r);e.length&&d[`pinRef-${e.length}`]?(n=d[`pinRef-${e.length}`].current)==null||n.focus():(o=d["pinRef-0"].current)==null||o.focus()},"handleFocus");return c.useEffect(()=>(window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}),[f]),c.useEffect(()=>{s&&s(t.join("")),setTimeout(()=>{_()},100)},[t]),c.useEffect(()=>{const e=[];if(i){for(let n=0;n<i;n+=1)e.push("");u(e)}},[]),l(R,{children:t.map((e,n)=>l(I,{type:h,id:`${n}`,value:e,onChange:o=>w(o.target.value,n),disabled:!!n&&!t[n-1]||!!t[n+1],maxLength:i,inputRef:d[`${y}${n}`],inputMode:"numeric",pattern:"[0-9]*"},n))})},"Pin");try{m.displayName="Pin",m.__docgenInfo={description:"",displayName:"Pin",props:{handleInput:{defaultValue:null,description:"",name:"handleInput",required:!0,type:{name:"(value: string) => void"}},type:{defaultValue:{value:"password"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"numeric"'},{value:'"password"'}]}},length:{defaultValue:{value:"4"},description:"",name:"length",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/pin/index.tsx#Pin"]={docgenInfo:m.__docgenInfo,name:"Pin",path:"src/components/pin/index.tsx#Pin"})}catch{}const M={parameters:{storySource:{source:`import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Pin } from "./index";
import { StoryWrapper } from "../../shared/components/story-wrapper";

export default {
  title: "Components/PIN input",
  component: Pin,
  argTypes: {
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

export const PINPassword = Template.bind({});
PINPassword.args = {
  type: "password",
};

export const PINNumeric = Template.bind({});
PINNumeric.args = {
  type: "numeric",
};
`,locationsMap:{"pin-password":{startLoc:{col:45,line:19},endLoc:{col:1,line:23},startBody:{col:45,line:19},endBody:{col:1,line:23}},"pin-numeric":{startLoc:{col:45,line:19},endLoc:{col:1,line:23},startBody:{col:45,line:19},endBody:{col:1,line:23}}}}},title:"Components/PIN input",component:m,argTypes:{type:{control:{type:"radio",options:["password","numeric"]}}}},g=a(s=>l(C,{children:l(m,{...s})}),"Template"),E=g.bind({});E.args={type:"password"};const T=g.bind({});T.args={type:"numeric"};const W=["PINPassword","PINNumeric"];export{T as PINNumeric,E as PINPassword,W as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-4ff780d9.js.map
