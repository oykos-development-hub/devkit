var q=Object.defineProperty;var o=(e,a)=>q(e,"name",{value:a,configurable:!0});import{r as V}from"./index-d84d9d3b.js";import{T as f,C as x,s as v}from"./story-wrapper-07e05087.js";import{j as d,a as R}from"./jsx-runtime-82e0d3de.js";var $=(e=>(e.text="text",e.number="number",e.password="password",e.tel="tel",e.url="url",e.email="email",e.color="color",e))($||{}),s=(e=>(e.standard="standard",e.outlined="outlined",e))(s||{});const m=o(e=>{var a,t,n,l,i,r,h;return((a=e.style)==null?void 0:a.borderColor)||((l=(n=(t=e.theme)==null?void 0:t.palette)==null?void 0:n.light)==null?void 0:l.four)||((h=(r=(i=f)==null?void 0:i.palette)==null?void 0:r.light)==null?void 0:h.four)},"basicColor"),u=o(e=>{var a,t,n,l,i,r;return e.errorColor||((n=(t=(a=e.theme)==null?void 0:a.palette)==null?void 0:t.important)==null?void 0:n.two)||((r=(i=(l=f)==null?void 0:l.palette)==null?void 0:i.important)==null?void 0:r.two)},"errorColor"),w=o(e=>{var a,t,n,l,i,r;return((n=(t=(a=e.theme)==null?void 0:a.palette)==null?void 0:t.main)==null?void 0:n.two)||((r=(i=(l=f)==null?void 0:l.palette)==null?void 0:i.main)==null?void 0:r.two)},"focusColor"),b=o(e=>{var a,t,n,l,i,r;return((n=(t=(a=e.theme)==null?void 0:a.palette)==null?void 0:t.dark)==null?void 0:n.one)||((r=(i=(l=f)==null?void 0:l.palette)==null?void 0:i.dark)==null?void 0:r.one)},"hoverColor"),c=o(e=>{var a,t,n,l,i,r;return((n=(t=(a=e.theme)==null?void 0:a.palette)==null?void 0:t.info)==null?void 0:n.one)||((r=(i=(l=f)==null?void 0:l.palette)==null?void 0:i.info)==null?void 0:r.one)},"confirmedColor"),S=x`
  width: 100%;
  height: ${e=>{var a;return((a=e.style)==null?void 0:a.height)||(e.textarea?"6em":"2.5em")}};
  min-height: 2em;
  display: flex;
  box-sizing: border-box;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
  padding-left: ${e=>e.textarea?"0em":e.iconLeft?"2.25em":"0em"};
  padding-right: ${e=>e.textarea?"0em":e.iconRight?"2.25em":"0em"};
  border-style: solid;
  border-color: ${e=>e.error?u(e):e.confirmed?c(e):m(e)};
  border-width: ${e=>{var a,t;return`0 0 ${((t=(a=e.theme)==null?void 0:a.borderWidth)==null?void 0:t.xs)||"1px"} 0`}};
  outline: none;
  color: ${e=>e.error?u(e):e.confirmed?c(e):m(e)};

  &:hover {
    border-color: ${e=>e.error?u(e):e.confirmed?c(e):b(e)};
  }

  &:focus {
    border-color: ${e=>e.error?u(e):e.confirmed?c(e):b(e)};
  }

  &:disabled {
    border-color: ${e=>m(e)};
    color: ${e=>m(e)};
    background-color: transparent;

    &::placeholder {
      color: ${e=>m(e)};
    }
  }

  &::placeholder {
    color: ${e=>e.error?u(e):e.confirmed?c(e):m(e)};
  }
`,C=x`
  font-size: ${e=>{var a;return((a=e.style)==null?void 0:a.fontSize)||"16px"}};
  font-family: ${e=>{var a,t,n,l;return((a=e.style)==null?void 0:a.fontFamily)||((n=(t=e.theme)==null?void 0:t.fontFamily)==null?void 0:n.one)||((l=f.fontFamily)==null?void 0:l.one)}};
  margin: ${e=>{var a;return((a=e.style)==null?void 0:a.margin)||"0em"}};
  min-width: ${e=>e.label?"200px":"3em"};
  padding: ${e=>`${e.label?"1.75em":0} 0 ${e.error?"1.25em":0} 0`};
  width: ${e=>{var a;return e.fullWidth?"100%":((a=e.style)==null?void 0:a.width)||"400px"}};
  color: ${e=>e.error?u(e):e.confirmed?c(e):m(e)};

  & * {
    font-size: 1em;
    line-height: 1;
  }

  & .input-content-wrapper {
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
    color: ${e=>e.disabled?m(e):b(e)};
  }

  & input,
  & textarea {
    ${S}
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
    color: ${e=>u(e)};
  }
`,_=v.div`
  ${C}

  & input, & textarea {
    height: ${e=>{var a;return((a=e.style)==null?void 0:a.height)||(e.textarea?"6em":"3em")}};
    padding-left: ${e=>e.textarea?"1em":e.iconLeft?"3em":"1em"};
    padding-right: ${e=>e.textarea?"1em":e.iconLeft?"3em":"1em"};
    border-width: ${e=>{var a,t;return((t=(a=e.theme)==null?void 0:a.borderWidth)==null?void 0:t.xs)||"1px"}};
    border-radius: ${e=>{var a,t,n;return((a=e.style)==null?void 0:a.borderRadius)||((n=(t=e.theme)==null?void 0:t.borderRadius)==null?void 0:n.md)||"0.5em"}};

    &:focus {
      border-width: ${e=>{var a,t;return((t=(a=e.theme)==null?void 0:a.borderWidth)==null?void 0:t.sm)||"2px"}};
      border-color: ${e=>e.error?u(e):e.confirmed?c(e):w(e)};
    }
  }
`,E=v.div`
  ${C}
  & .input-content-wrapper:after {
    content: "";
    box-sizing: border-box;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: ${e=>e.error?u(e):e.confirmed?c(e):w(e)};
    transform: scale(0, 1);
    transition: transform 0.3s;
  }

  & .input-content-wrapper:focus-within:after {
    transform: scale(1, 1);
    transition: all 0.3s;
  }
`,L=o(e=>{const a=e.variant??s.standard,t={variant:e.variant,type:e.type,error:e.error,errorColor:e.errorColor,fullWidth:e.fullWidth,disabled:e.disabled,textarea:e.textarea,search:e.search,confirmed:e.confirmed,iconLeft:e.iconLeft,iconRight:e.iconRight,theme:e.theme,style:e.style,children:e.children};return a===s.outlined?d(_,{...t}):d(E,{...t})},"Wrapper"),g=o(({variant:e=s.standard,type:a=$.text,...t})=>{const[n,l]=V.useState(!1),i=o(r=>{var h,y;t!=null&&t.search&&l(!!((y=(h=r==null?void 0:r.target)==null?void 0:h.value)!=null&&y.length)),t!=null&&t.onChange&&t.onChange(r)},"changeHandler");return d(L,{...t,variant:e,children:R("div",{className:"input-content-wrapper",children:[d("label",{children:t.label}),t!=null&&t.textarea?d("textarea",{...t,ref:t.inputRef,onChange:i}):d("input",{...t,ref:t.inputRef,onChange:i}),t.iconLeft&&!t.textarea&&d("div",{id:"input-left-icon-wrapper",children:t.iconLeft}),t.search&&n&&t.iconRight&&!t.textarea&&!t.disabled&&d("div",{id:"input-right-icon-wrapper",onClick:t.clear,children:t.iconRight}),t.confirmed&&t.iconRight&&!t.textarea&&!t.error&&d("div",{id:"input-right-icon-wrapper",children:t.iconRight}),t.error&&t.iconRight&&!t.textarea&&!t.disabled&&d("div",{id:"input-right-icon-wrapper",children:t.iconRight}),t.error&&!t.disabled&&d("p",{children:t.error})]})})},"Input");try{g.displayName="Input",g.__docgenInfo={description:"",displayName:"Input",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string | number"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<any>"}},clear:{defaultValue:null,description:"",name:"clear",required:!1,type:{name:"((e?: any) => any)"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<Element> | FormEventHandler<Element>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},variant:{defaultValue:{value:"InputVariants.standard"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"standard"'},{value:'"outlined"'},{value:'"standard"'},{value:'"outlined"'}]}},type:{defaultValue:{value:"InputTypes.text"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"number"'},{value:'"text"'},{value:'"color"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"text"'},{value:'"number"'},{value:'"password"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"color"'},{value:'"password"'}]}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},errorColor:{defaultValue:null,description:"",name:"errorColor",required:!1,type:{name:"string"}},fullWidth:{defaultValue:null,description:"",name:"fullWidth",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},search:{defaultValue:null,description:"",name:"search",required:!1,type:{name:"boolean"}},confirmed:{defaultValue:null,description:"",name:"confirmed",required:!1,type:{name:"boolean"}},iconLeft:{defaultValue:null,description:"",name:"iconLeft",required:!1,type:{name:"ReactNode"}},iconRight:{defaultValue:null,description:"",name:"iconRight",required:!1,type:{name:"ReactNode"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/index.tsx#Input"]={docgenInfo:g.__docgenInfo,name:"Input",path:"src/components/input/index.tsx#Input"})}catch{}export{g as I,s as a,$ as b};
//# sourceMappingURL=index-973ac81a.js.map
