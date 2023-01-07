var $=Object.defineProperty;var i=(e,a)=>$(e,"name",{value:a,configurable:!0});import{C as S,s as R}from"./story-wrapper-eaf3a593.js";import{j as l,a as C}from"./jsx-runtime-82e0d3de.js";const o=i(e=>{var a,n,r;return e.borderColor||((r=(n=(a=e.theme)==null?void 0:a.palette)==null?void 0:n.light)==null?void 0:r.four)||"lightgrey"},"basicColor"),d=i(e=>{var a,n,r;return e.errorColor||((r=(n=(a=e.theme)==null?void 0:a.palette)==null?void 0:n.important)==null?void 0:r.two)||"red"},"errorColor"),_=i(e=>{var a,n,r;return((r=(n=(a=e.theme)==null?void 0:a.palette)==null?void 0:n.main)==null?void 0:r.two)||"dodgerblue"},"focusColor"),x=i(e=>{var a,n,r;return((r=(n=(a=e.theme)==null?void 0:a.palette)==null?void 0:n.dark)==null?void 0:r.one)||"black"},"hoverColor"),O={standard:"2.5em",outlined:"3em"},L={standard:e=>e.textarea?"0em":e.iconLeft?"2.25em":"0em",outlined:e=>e.textarea?"1em":e.iconLeft?"3em":"1em"},I={standard:e=>e.textarea?"0em":e.iconRight?"2.25em":"0em",outlined:e=>e.textarea?"1em":e.iconRight?"3em":"1em"},E={standard:e=>{var a,n;return`0 0 ${((n=(a=e.theme)==null?void 0:a.borderWidth)==null?void 0:n.xs)||"1px"} 0`},outlined:e=>{var a,n;return((n=(a=e.theme)==null?void 0:a.borderWidth)==null?void 0:n.xs)||"1px"}},T={standard:E.standard,outlined:e=>{var a,n;return((n=(a=e.theme)==null?void 0:a.borderWidth)==null?void 0:n.sm)||"2px"}},B={standard:e=>e.error?d(e):x(e),outlined:e=>e.error?d(e):_(e)},W={standard:0,outlined:e=>{var a,n;return e.borderRadius||((n=(a=e.theme)==null?void 0:a.borderRadius)==null?void 0:n.md)||"0.5em"}},z=S`
  width: 100%;
  height: ${e=>e.height||(e.textarea?"6em":O[e.variant])};
  min-height: 2em;
  display: flex;
  box-sizing: border-box;
  padding: 0.5em 0em;
  padding-left: ${e=>L[e.variant]};
  padding-right: ${e=>I[e.variant]};
  border-style: solid;
  border-color: ${e=>e.error?d(e):o(e)};
  border-width: ${e=>E[e.variant]};
  border-radius: ${e=>W[e.variant]};
  outline: none;

  &:hover {
    border-color: ${e=>e.error?d(e):x(e)};
  }
  &:focus {
    border-color: ${e=>B[e.variant]};
    border-width: ${e=>T[e.variant]};
  }
  &:disabled {
    border-color: ${e=>o(e)};
    color: ${e=>o(e)};
    background-color: transparent;

    &::placeholder {
      color: ${e=>o(e)};
    }
  }
`,w=S`
  width: ${e=>e.fullWidth?"100%":e.width||"400px"};
  min-width: ${e=>e.label?"200px":"3em"};
  padding: ${e=>`${e.label?"1.75em":0} 0 ${e.error?"1.25em":0} 0`};
  margin: ${e=>e.margin||"0em"};
  font-size: ${e=>e.fontSize||"16px"};

  & * {
    font-size: 1em;
    line-height: 1;
  }

  & #input-content-wrapper {
    position: relative;
    display: flex;
  }

  & #input-left-icon-wrapper,
  & #input-right-icon-wrapper {
    width: 1.5em;
    height: 1.5em;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    border: 1px solid lightgrey;
  }

  & #input-left-icon-wrapper {
    left: ${e=>e.variant==="standard"?0:"0.75em"};
  }
  & #input-right-icon-wrapper {
    right: ${e=>e.variant==="standard"?0:"0.75em"};
  }

  & label {
    position: absolute;
    top: -1.75em;
    left: 0;
    color: ${e=>e.disabled?o(e):x(e)};
  }

  & input,
  & textarea {
    ${z}
  }

  & textarea {
    resize: none;
  }

  & p {
    font-size: 0.75em;
    position: absolute;
    left: 0;
    bottom: -1.5em;
    margin: 0;
    color: ${e=>d(e)};
  }
`,A=R.div`
  ${w}
`,s=i(({variant:e,type:a="text",onChange:n,onBlur:r,onFocus:f,placeholder:c="",name:p,id:g,value:y,pattern:h,maxLength:V,inputMode:v,inputRef:b,...t})=>{const u={onChange:n,onBlur:r,onFocus:f,placeholder:c,name:p,disabled:t.disabled,id:g,value:y,maxLength:V};return l(A,{...t,variant:"outlined",children:C("div",{id:"input-content-wrapper",children:[l("label",{children:t.label}),t.iconLeft&&!t.textarea&&l("div",{id:"input-left-icon-wrapper"}),t.iconRight&&!t.textarea&&l("div",{id:"input-right-icon-wrapper"}),t.textarea?l("textarea",{...u}):l("input",{type:a,...u,ref:b,inputMode:v,pattern:h}),t.error&&!t.disabled&&l("p",{children:t.error})]})})},"Outlined");try{s.displayName="Outlined",s.__docgenInfo={description:"",displayName:"Outlined",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"any"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"numeric"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"decimal"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/variants/outlined.tsx#Outlined"]={docgenInfo:s.__docgenInfo,name:"Outlined",path:"src/components/input/variants/outlined.tsx#Outlined"})}catch{}const M=R.div`
  ${w}

  & #input-content-wrapper:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${e=>e.error?d(e):_(e)};
    transform: scale(0, 1);
    transition: transform 0.3s;
  }

  & #input-content-wrapper:focus-within:after {
    transform: scale(1, 1);
    transition: all 0.3s;
  }
`,m=i(({variant:e,type:a="text",onChange:n,onBlur:r,onFocus:f,placeholder:c,name:p,id:g,value:y,pattern:h,inputMode:V,maxLength:v,inputRef:b,...t})=>{const u={onChange:n,onBlur:r,onFocus:f,placeholder:c,name:p,disabled:t.disabled,id:g,value:y,maxLength:v};return l(M,{...t,variant:"standard",children:C("div",{id:"input-content-wrapper",children:[l("label",{children:t.label}),t.iconLeft&&!t.textarea&&l("div",{id:"input-left-icon-wrapper"}),t.iconRight&&!t.textarea&&l("div",{id:"input-right-icon-wrapper"}),t.textarea?l("textarea",{...u}):l("input",{type:a,...u,ref:b,inputMode:V,pattern:h}),t.error&&t.error&&!t.disabled&&l("p",{children:t.error})]})})},"Standard");try{m.displayName="Standard",m.__docgenInfo={description:"",displayName:"Standard",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"any"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"numeric"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"decimal"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/variants/standard.tsx#Standard"]={docgenInfo:m.__docgenInfo,name:"Standard",path:"src/components/input/variants/standard.tsx#Standard"})}catch{}const q=i(e=>{const a=e.variant??"outlined";return a==="outlined"?l(s,{...e}):a==="standard"?l(m,{...e}):l(s,{...e})},"Input");try{q.displayName="Input",q.__docgenInfo={description:"",displayName:"Input",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"(() => void)"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(() => void)"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"any"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"numeric"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"decimal"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/index.tsx#Input"]={docgenInfo:q.__docgenInfo,name:"Input",path:"src/components/input/index.tsx#Input"})}catch{}export{q as I};
//# sourceMappingURL=index-34d4c49a.js.map
