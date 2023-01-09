var H=Object.defineProperty;var i=(e,n)=>H(e,"name",{value:n,configurable:!0});import{r as w}from"./index-d84d9d3b.js";import{C as $,s as L}from"./story-wrapper-eaf3a593.js";import{j as l,a as O}from"./jsx-runtime-82e0d3de.js";const m=i(e=>{var n,t,r;return e.borderColor||((r=(t=(n=e.theme)==null?void 0:n.palette)==null?void 0:t.light)==null?void 0:r.four)||"lightgrey"},"basicColor"),d=i(e=>{var n,t,r;return e.errorColor||((r=(t=(n=e.theme)==null?void 0:n.palette)==null?void 0:t.important)==null?void 0:r.two)||"red"},"errorColor"),I=i(e=>{var n,t,r;return((r=(t=(n=e.theme)==null?void 0:n.palette)==null?void 0:t.main)==null?void 0:r.two)||"dodgerblue"},"focusColor"),_=i(e=>{var n,t,r;return((r=(t=(n=e.theme)==null?void 0:n.palette)==null?void 0:t.dark)==null?void 0:r.one)||"black"},"hoverColor"),c=i(e=>{var n,t,r;return((r=(t=(n=e.theme)==null?void 0:n.palette)==null?void 0:t.info)==null?void 0:r.one)||"#7CFC00"},"confirmedColor"),W={standard:"2.5em",outlined:"3em"},z={standard:e=>e.textarea?"0em":e.iconLeft?"2.25em":"0em",outlined:e=>e.textarea?"1em":e.iconLeft?"3em":"1em"},F={standard:e=>e.textarea?"0em":e.iconRight?"2.25em":"0em",outlined:e=>e.textarea?"1em":e.iconRight?"3em":"1em"},B={standard:e=>{var n,t;return`0 0 ${((t=(n=e.theme)==null?void 0:n.borderWidth)==null?void 0:t.xs)||"1px"} 0`},outlined:e=>{var n,t;return((t=(n=e.theme)==null?void 0:n.borderWidth)==null?void 0:t.xs)||"1px"}},A={standard:B.standard,outlined:e=>{var n,t;return((t=(n=e.theme)==null?void 0:n.borderWidth)==null?void 0:t.sm)||"2px"}},M={standard:e=>e.error?d(e):e.confirmed?c(e):_(e),outlined:e=>e.error?d(e):e.confirmed?c(e):I(e)},Y={standard:0,outlined:e=>{var n,t;return e.borderRadius||((t=(n=e.theme)==null?void 0:n.borderRadius)==null?void 0:t.md)||"0.5em"}},k=$`
  width: 100%;
  height: ${e=>e.height||(e.textarea?"6em":W[e.variant])};
  min-height: 2em;
  display: flex;
  box-sizing: border-box;
  padding: 0.5em 0em;
  padding-left: ${e=>z[e.variant]};
  padding-right: ${e=>F[e.variant]};
  border-style: solid;
  border-color: ${e=>e.error?d(e):e.confirmed?c(e):m(e)};
  border-width: ${e=>B[e.variant]};
  border-radius: ${e=>Y[e.variant]};
  outline: none;

  &:hover {
    border-color: ${e=>e.error?d(e):e.confirmed?c(e):_(e)};
  }
  &:focus {
    border-color: ${e=>M[e.variant]};
    border-width: ${e=>A[e.variant]};
  }
  &:disabled {
    border-color: ${e=>m(e)};
    color: ${e=>m(e)};
    background-color: transparent;

    &::placeholder {
      color: ${e=>m(e)};
    }
  }
`,T=$`
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
    color: ${e=>e.disabled?m(e):_(e)};
  }

  & input,
  & textarea {
    ${k}
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
`,G=L.div`
  ${T}
`,s=i(({variant:e,type:n="text",onChange:t,onBlur:r,onFocus:p,placeholder:h="",name:g,id:y,value:V,pattern:v,maxLength:b,inputMode:q,inputRef:x,...a})=>{const[R,S]=w.useState(!1),C=i(o=>{a.search&&S(!!o.target.value.length),t&&t(o)},"changeHandler"),u={onBlur:r,onFocus:p,placeholder:h,name:g,disabled:a.disabled,id:y,value:V,maxLength:b};return l(G,{...a,variant:"outlined",children:O("div",{id:"input-content-wrapper",children:[l("label",{children:a.label}),a.textarea?l("textarea",{...u,onChange:t}):l("input",{type:n,ref:x,inputMode:q,pattern:v,onChange:C,...u}),a.iconLeft&&!a.textarea&&l("div",{id:"input-left-icon-wrapper",children:a.iconLeft}),a.search&&R&&a.iconRight&&!a.textarea&&!a.disabled&&l("div",{id:"input-right-icon-wrapper",onClick:a.clear,children:a.iconRight}),a.confirmed&&a.iconRight&&!a.textarea&&!a.error&&l("div",{id:"input-right-icon-wrapper",children:a.iconRight}),a.error&&a.iconRight&&!a.textarea&&!a.disabled&&l("div",{id:"input-right-icon-wrapper",children:a.iconRight}),a.error&&!a.disabled&&l("p",{children:a.error})]})})},"Outlined");try{s.displayName="Outlined",s.__docgenInfo={description:"",displayName:"Outlined",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"numeric"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"decimal"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"(() => void)"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},confirmed:{defaultValue:null,description:"",name:"confirmed",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/variants/outlined.tsx#Outlined"]={docgenInfo:s.__docgenInfo,name:"Outlined",path:"src/components/input/variants/outlined.tsx#Outlined"})}catch{}const J=L.div`
  ${T}

  & #input-content-wrapper:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${e=>e.error?d(e):e.confirmed?c(e):I(e)};
    transform: scale(0, 1);
    transition: transform 0.3s;
  }

  & #input-content-wrapper:focus-within:after {
    transform: scale(1, 1);
    transition: all 0.3s;
  }
`,f=i(({variant:e,type:n="text",onChange:t,onBlur:r,onFocus:p,placeholder:h="",name:g,id:y,value:V,pattern:v,inputMode:b,maxLength:q,inputRef:x,...a})=>{const[R,S]=w.useState(!1),C=i(o=>{a.search&&S(!!o.target.value.length),t&&t(o)},"changeHandler"),u={onBlur:r,onFocus:p,placeholder:h,name:g,disabled:a.disabled,id:y,value:V,maxLength:q};return l(J,{...a,variant:"standard",children:O("div",{id:"input-content-wrapper",children:[l("label",{children:a.label}),a.textarea?l("textarea",{...u,onChange:t}):l("input",{type:n,ref:x,inputMode:b,pattern:v,onChange:C,...u}),a.iconLeft&&!a.textarea&&l("div",{id:"input-left-icon-wrapper",children:a.iconLeft}),a.search&&R&&a.iconRight&&!a.textarea&&!a.disabled&&l("div",{id:"input-right-icon-wrapper",onClick:a.clear,children:a.iconRight}),a.confirmed&&a.iconRight&&!a.textarea&&!a.error&&l("div",{id:"input-right-icon-wrapper",children:a.iconRight}),a.error&&a.iconRight&&!a.textarea&&!a.disabled&&l("div",{id:"input-right-icon-wrapper",children:a.iconRight}),a.error&&!a.disabled&&l("p",{children:a.error})]})})},"Standard");try{f.displayName="Standard",f.__docgenInfo={description:"",displayName:"Standard",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},type:{defaultValue:{value:"text"},description:"",name:"type",required:!1,type:{name:"string"}},placeholder:{defaultValue:{value:""},description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"numeric"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"decimal"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"(() => void)"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},confirmed:{defaultValue:null,description:"",name:"confirmed",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/variants/standard.tsx#Standard"]={docgenInfo:f.__docgenInfo,name:"Standard",path:"src/components/input/variants/standard.tsx#Standard"})}catch{}const E=i(e=>{const n=e.variant??"outlined";return n==="outlined"?l(s,{...e}):n==="standard"?l(f,{...e}):l(s,{...e})},"Input");try{E.displayName="Input",E.__docgenInfo={description:"",displayName:"Input",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'}]}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},fontSize:{defaultValue:null,description:"",name:"fontSize",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},height:{defaultValue:null,description:"",name:"height",required:!1,type:{name:"string"}},margin:{defaultValue:null,description:"",name:"margin",required:!1,type:{name:"string"}},borderColor:{defaultValue:null,description:"",name:"borderColor",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>> | ReactSVGElement"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"numeric"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"decimal"'}]}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"(() => void)"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},confirmed:{defaultValue:null,description:"",name:"confirmed",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/index.tsx#Input"]={docgenInfo:E.__docgenInfo,name:"Input",path:"src/components/input/index.tsx#Input"})}catch{}export{E as I};
//# sourceMappingURL=index-c0fc444b.js.map
