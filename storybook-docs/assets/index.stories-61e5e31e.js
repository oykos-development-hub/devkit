var C=Object.defineProperty;var a=(s,i)=>C(s,"name",{value:i,configurable:!0});import{r as c,R as S}from"./index-8457a19c.js";import{I as b}from"./index-4d8d9e4d.js";import{s as I,S as R}from"./index-5b3ad76a.js";import{j as u}from"./jsx-dev-runtime-21a8a8df.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-ffc48dc1.js";import"./index-f4c43bdd.js";const E=I.div`
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
`;var y="C:\\Development\\Oykos\\devkit\\src\\components\\pin\\index.tsx";const d={},N="pinRef-",P=/^(\d*\.)?\d+$/,m=a(({handleInput:s,length:i=4,type:x="password"})=>{const[r,l]=c.useState([]);r.forEach((e,n)=>{d[`${N}${n}`]=S.createRef()});const f=c.useCallback(e=>{const{key:n,keyCode:t}=e;if(t===8||t===46){const o=r.filter(p=>!!p);o.pop();for(let p=o.length;p<i;p++)o.push("");l(o)}},[r]),w=a((e,n)=>{if(P.test(e)&&l(t=>t.map((o,p)=>p!==n?o:e)),(e==null?void 0:e.length)>1&&(e=e[e.length-1]),(e==null?void 0:e.length)===i&&P.test(e))return l(e.split(""))},"handleOnChange"),_=a(()=>{var n,t;const e=r.filter(o=>!!o);e.length&&d[`pinRef-${e.length}`]?(n=d[`pinRef-${e.length}`].current)==null||n.focus():(t=d["pinRef-0"].current)==null||t.focus()},"handleFocus");return c.useEffect(()=>(window.addEventListener("keydown",f),()=>{window.removeEventListener("keydown",f)}),[f]),c.useEffect(()=>{s&&s(r.join("")),setTimeout(()=>{_()},100)},[r]),c.useEffect(()=>{const e=[];if(i){for(let n=0;n<i;n+=1)e.push("");l(e)}},[]),u(E,{children:r.map((e,n)=>u(b,{type:x,id:`${n}`,value:e,onChange:t=>w(t.target.value,n),disabled:!!n&&!r[n-1]||!!r[n+1],maxLength:i,inputRef:d[`${N}${n}`],inputMode:"numeric",pattern:"[0-9]*"},n,!1,{fileName:y,lineNumber:94,columnNumber:9},void 0))},void 0,!1,{fileName:y,lineNumber:92,columnNumber:5},void 0)},"Pin");try{m.displayName="Pin",m.__docgenInfo={description:"",displayName:"Pin",props:{handleInput:{defaultValue:null,description:"",name:"handleInput",required:!0,type:{name:"(value: string) => void"}},type:{defaultValue:{value:"password"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"numeric"'},{value:'"password"'}]}},length:{defaultValue:{value:"4"},description:"",name:"length",required:!1,type:{name:"number"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/pin/index.tsx#Pin"]={docgenInfo:m.__docgenInfo,name:"Pin",path:"src/components/pin/index.tsx#Pin"})}catch{}var g="C:\\Development\\Oykos\\devkit\\src\\components\\pin\\index.stories.tsx";const M={parameters:{storySource:{source:`import React from "react";\r
import { ComponentMeta, ComponentStory } from "@storybook/react";\r
import { Pin } from "./index";\r
import { StoryWrapper } from "../../shared/components/story-wrapper";\r
\r
export default {\r
  title: "Components/PIN input",\r
  component: Pin,\r
  argTypes: {\r
    type: {\r
      control: {\r
        type: "radio",\r
        options: ["password", "numeric"],\r
      },\r
    },\r
  },\r
} as ComponentMeta<typeof Pin>;\r
\r
const Template: ComponentStory<typeof Pin> = (args) => (\r
  <StoryWrapper>\r
    <Pin {...args} />\r
  </StoryWrapper>\r
);\r
\r
export const PINPassword = Template.bind({});\r
PINPassword.args = {\r
  type: "password",\r
};\r
\r
export const PINNumeric = Template.bind({});\r
PINNumeric.args = {\r
  type: "numeric",\r
};\r
`,locationsMap:{"pin-password":{startLoc:{col:45,line:19},endLoc:{col:1,line:23},startBody:{col:45,line:19},endBody:{col:1,line:23}},"pin-numeric":{startLoc:{col:45,line:19},endLoc:{col:1,line:23},startBody:{col:45,line:19},endBody:{col:1,line:23}}}}},title:"Components/PIN input",component:m,argTypes:{type:{control:{type:"radio",options:["password","numeric"]}}}},h=a(s=>u(R,{children:u(m,{...s},void 0,!1,{fileName:g,lineNumber:29,columnNumber:5},void 0)},void 0,!1,{fileName:g,lineNumber:28,columnNumber:3},void 0),"Template"),v=h.bind({});v.args={type:"password"};const k=h.bind({});k.args={type:"numeric"};const W=["PINPassword","PINNumeric"];export{k as PINNumeric,v as PINPassword,W as __namedExportsOrder,M as default};
//# sourceMappingURL=index.stories-61e5e31e.js.map
