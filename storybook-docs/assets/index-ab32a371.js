var F=Object.defineProperty;var b=(n,e)=>F(n,"name",{value:e,configurable:!0});import{r as u}from"./index-d84d9d3b.js";import{s as f,C as x,T as E}from"./index-25fcb85b.js";import{B as V,T as v}from"./index-c42abb34.js";import{j as a,a as H}from"./jsx-runtime-82e0d3de.js";const O=f.div(({label:n,error:e,theme:t,hint:r})=>{const{error500:l,gray700:i}=t.palette;return x`
    width: 100%;
    min-width: ${n?"200px":"3em"};
    padding: ${n?"1.75em":0} 0 ${e||r?"1.75em":0} 0;
    font-size: 14px;

    & * {
      font-size: 1em;
    }

    & > div {
      position: relative;
    }

    ${V}:first-child {
      position: absolute;
      top: -1.75em;
      left: 0;
    }

    ${V}:last-child {
      position: absolute;
      bottom: -1.75em;
      left: 0;
      color: ${e?l:i};
    }
  `}),R=b(({style:n,theme:e,error:t})=>{var d,h;const{gray200:r,gray300:l,gray700:i,error200:c,error50:s,primary100:o,white:m}=e.palette;return x`
    width: 100%;
    border-radius: ${((d=e.borderRadius)==null?void 0:d.lg)||"0.5em"};
    border: ${`${((h=e.borderWidth)==null?void 0:h.xs)||"1px"} solid ${t?c:l}`};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${t?c:o};
      outline: 3px solid ${t?s:r};
    }

    &[disabled] {
      color: ${l};
      background-color: ${m};
    }

    &::placeholder {
      color: ${i};
    }

    ${{...n}}
  `},"shared"),k=f.input(({style:n,theme:e,error:t,maxLength:r})=>x`
    ${R({style:n,theme:e,error:t,maxLength:r})}
    text-align: ${r===1?"center":"left"};
    height: 3em;
  `),w=f.textarea(({style:n,theme:e,error:t})=>x`
    ${R({style:n,theme:e,error:t})}
    resize: none;
    height: 6em;
  `),A=f.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`,Y=f.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`,$=b(({name:n,value:e,theme:t=E,style:r,disabled:l,label:i,textarea:c,leftContent:s,rightContent:o,error:m,hint:d,placeholder:h,onChange:S,onBlur:_,onFocus:I,id:T,inputRef:B,...C})=>{const[W,L]=u.useState(0),[M,z]=u.useState(0),y=u.useRef(null),g=u.useRef(null);u.useEffect(()=>{var p;s&&y.current&&L((p=y.current)==null?void 0:p.offsetWidth)},[s]),u.useEffect(()=>{var p;o&&g.current&&z((p=g.current)==null?void 0:p.offsetWidth)},[o]);const q={onChange:S,onBlur:_,onFocus:I,name:n,id:T,disabled:l,placeholder:h,value:e,error:m,style:{paddingLeft:`${s?`${W}px`:"1em"}`,paddingRight:`${o?`${M}px`:"1em"}`,...r}};return a(O,{theme:t,label:i,error:m,hint:d,children:H("div",{children:[i&&a(v,{variant:"bodyMedium",content:i}),c?a(w,{...q,theme:t||E}):a(k,{...q,...C,theme:t||E,ref:B}),s&&a(A,{ref:y,children:s}),o&&a(Y,{ref:g,children:o}),m&&!l&&a(v,{variant:"bodyMedium",content:m}),d&&!m&&a(v,{variant:"bodyMedium",content:d})]})})},"Input");try{$.displayName="Input",$.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},theme:{defaultValue:{value:`{
  mediaScreenBreakpoints: {
    xs: "480px",
    sm: "576px",
    md: "767px",
    lg: "992px",
    xl: "1200px",
    xxl: "1600px",
  },
  borderRadius: {
    xs: "1px",
    sm: "2px",
    md: "4px",
    lg: "8px",
    xl: "16px",
    full: "50%",
  },
  borderWidth: {
    xs: "1px",
    sm: "2px",
    md: "3px",
    lg: "4px",
  },
  fontSize: {
    xs: "0.6rem",
    sm: "1rem",
    md: "1.6rem",
    lg: "2.8rem",
    xl: "4rem",
    xxl: "7rem",
  },
  fontWeight: {
    regular: "400",
    semiBold: "600",
    bold: "700",
  },
  typographyFontSize: {
    h1: "3.375rem",
    h2: "2.625rem",
    h3: "2rem",
    h4: "1.75rem",
    h5: "1.25rem",
    h6: "1.125rem",
    body: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    link: {
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
    },
    caption: "0.75rem",
    helperText: "0.75rem",
    code: "0.875rem",
  },
  typographyLineHeight: {
    h1: "4rem",
    h2: "3.125rem",
    h3: "2.5rem",
    h4: "2.25rem",
    h5: "1.75rem",
    h6: "1.625rem",
    body: {
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.625rem",
    },
    link: {
      sm: "1.25rem",
      md: "1.5rem",
      lg: "1.625rem",
    },
    caption: "1rem",
    helperText: "1rem",
    code: "1.25rem",
  },
  lineHeight: {
    xs: "0.85rem",
    sm: "1.2rem",
    md: "2rem",
    lg: "3.4rem",
    xl: "5rem",
    xxl: "8.5rem",
  },
  fontFamily: {
    one: "Rubik, sans-serif",
    two: "Inter, sans-serif",
    three: "JetBrains Mono",
  },
  palette: {
    ...colors,
  },
}`},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},leftContent:{defaultValue:null,description:"",name:"leftContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<any>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/index.tsx#Input"]={docgenInfo:$.__docgenInfo,name:"Input",path:"src/components/input/index.tsx#Input"})}catch{}export{$ as I};
//# sourceMappingURL=index-ab32a371.js.map
