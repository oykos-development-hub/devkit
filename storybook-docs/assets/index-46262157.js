var w=Object.defineProperty;var N=(n,e)=>w(n,"name",{value:e,configurable:!0});import{r as p}from"./index-8457a19c.js";import{s as c,C as b,T as x}from"./index-b018fede.js";import{T as E}from"./index-e2e3fe9f.js";import{j as l}from"./jsx-dev-runtime-21a8a8df.js";const z=c.div(()=>({label:n,error:e,theme:t,hint:i})=>{const{error500:r,gray700:u}=t.palette;return b`
    width: 100%;
    min-width: ${n?"200px":"3em"};
    padding: ${n?"1.75em":0} 0 ${e||i?"1.75em":0} 0;
    font-size: 14px;

    & * {
      font-size: 1em;
    }

    & > div {
      position: relative;
    }

    & p:first-child {
      position: absolute;
      top: -1.75em;
      left: 0;
    }

    & p:last-child {
      position: absolute;
      bottom: -1.75em;
      left: 0;
      color: ${e?r:u};
    }
  `}),$=N(({style:n,theme:e,error:t})=>{var m,v;const{gray200:i,gray300:r,gray700:u,error200:y,error50:o,primary100:d,white:s}=e.palette;return b`
    width: 100%;
    border-radius: ${((m=e.borderRadius)==null?void 0:m.lg)||"0.5em"};
    border: ${`${((v=e.borderWidth)==null?void 0:v.xs)||"1px"} solid ${t?y:r}`};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${t?y:d};
      outline: 3px solid ${t?o:i};
    }

    &[disabled] {
      color: ${r};
      background-color: ${s};
    }

    &::placeholder {
      color: ${u};
    }

    ${{...n}}
  `},"shared"),A=c.input(()=>({style:n,theme:e,error:t,maxLength:i})=>b`
    ${$({style:n,theme:e,error:t,maxLength:i})}
    text-align: ${i===1?"center":"left"};
    height: 3em;
  `),B=c.textarea(()=>({style:n,theme:e,error:t})=>b`
    ${$({style:n,theme:e,error:t})}
    resize: none;
    height: 6em;
  `),H=c.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`,Y=c.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;var a="C:\\Development\\Oykos\\devkit\\src\\components\\input\\index.tsx";const V=N(({name:n,value:e,theme:t,style:i,disabled:r,label:u,textarea:y,leftContent:o,rightContent:d,error:s,hint:m,placeholder:v,onChange:R,onBlur:S,onFocus:_,id:I,inputRef:T,...C})=>{const[L,O]=p.useState(0),[W,F]=p.useState(0),h=p.useRef(null),g=p.useRef(null);p.useEffect(()=>{var f;o&&h.current&&O((f=h.current)==null?void 0:f.offsetWidth)},[o]),p.useEffect(()=>{var f;d&&g.current&&F((f=g.current)==null?void 0:f.offsetWidth)},[d]);const q={onChange:R,onBlur:S,onFocus:_,name:n,id:I,disabled:r,placeholder:v,value:e,error:s,style:{paddingLeft:`${o?`${L}px`:"1em"}`,paddingRight:`${d?`${W}px`:"1em"}`,...i}};return l(z,{theme:t||x,label:u,error:s,hint:m,children:l("div",{children:[u&&l(E,{variant:"label",content:u},void 0,!1,{fileName:a,lineNumber:65,columnNumber:19},void 0),y?l(B,{...q,theme:t||x},void 0,!1,{fileName:a,lineNumber:68,columnNumber:11},void 0):l(A,{...q,...C,theme:t||x,ref:T},void 0,!1,{fileName:a,lineNumber:70,columnNumber:11},void 0),o&&l(H,{ref:h,children:o},void 0,!1,{fileName:a,lineNumber:73,columnNumber:25},void 0),d&&l(Y,{ref:g,children:d},void 0,!1,{fileName:a,lineNumber:75,columnNumber:26},void 0),s&&!r&&l(E,{variant:"body1",content:s},void 0,!1,{fileName:a,lineNumber:77,columnNumber:32},void 0),m&&!s&&l(E,{variant:"body1",content:m},void 0,!1,{fileName:a,lineNumber:79,columnNumber:28},void 0)]},void 0,!0,{fileName:a,lineNumber:64,columnNumber:7},void 0)},void 0,!1,{fileName:a,lineNumber:63,columnNumber:5},void 0)},"Input");try{V.displayName="Input",V.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},leftContent:{defaultValue:null,description:"",name:"leftContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<any>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/index.tsx#Input"]={docgenInfo:V.__docgenInfo,name:"Input",path:"src/components/input/index.tsx#Input"})}catch{}export{V as I};
//# sourceMappingURL=index-46262157.js.map
