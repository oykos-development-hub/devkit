var F=Object.defineProperty;var v=(n,e)=>F(n,"name",{value:e,configurable:!0});import{r as p}from"./index-8457a19c.js";import{s as c,C as y,T as N}from"./index-5b3ad76a.js";import{B as q,T as E}from"./index-ffc48dc1.js";import{j as t}from"./jsx-dev-runtime-21a8a8df.js";const O=c.div(({label:n,error:e,theme:r,hint:a})=>{const{error500:i,gray700:m}=r.palette;return y`
    width: 100%;
    min-width: ${n?"200px":"3em"};
    padding: ${n?"1.75em":0} 0 ${e||a?"1.75em":0} 0;
    font-size: 14px;

    & * {
      font-size: 1em;
    }

    & > div {
      position: relative;
    }

    ${q}:first-child {
      position: absolute;
      top: -1.75em;
      left: 0;
    }

    ${q}:last-child {
      position: absolute;
      bottom: -1.75em;
      left: 0;
      color: ${e?i:m};
    }
  `}),R=v(({style:n,theme:e,error:r})=>{var s,x;const{gray200:a,gray300:i,gray700:m,error200:h,error50:o,primary100:u,white:d}=e.palette;return y`
    width: 100%;
    border-radius: ${((s=e.borderRadius)==null?void 0:s.lg)||"0.5em"};
    border: ${`${((x=e.borderWidth)==null?void 0:x.xs)||"1px"} solid ${r?h:i}`};
    box-sizing: border-box;
    outline: none;

    &:focus {
      border-color: ${r?h:u};
      outline: 3px solid ${r?o:a};
    }

    &[disabled] {
      color: ${i};
      background-color: ${d};
    }

    &::placeholder {
      color: ${m};
    }

    ${{...n}}
  `},"shared"),z=c.input(({style:n,theme:e,error:r,maxLength:a})=>y`
    ${R({style:n,theme:e,error:r,maxLength:a})}
    text-align: ${a===1?"center":"left"};
    height: 3em;
  `),H=c.textarea(({style:n,theme:e,error:r})=>y`
    ${R({style:n,theme:e,error:r})}
    resize: none;
    height: 6em;
  `),w=c.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
`,A=c.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
`;var l="C:\\Development\\Oykos\\devkit\\src\\components\\input\\index.tsx";const $=v(({name:n,value:e,theme:r=N,style:a,disabled:i,label:m,textarea:h,leftContent:o,rightContent:u,error:d,hint:s,placeholder:x,onChange:S,onBlur:_,onFocus:I,id:T,inputRef:C,...B})=>{const[W,L]=p.useState(0),[M,k]=p.useState(0),g=p.useRef(null),b=p.useRef(null);p.useEffect(()=>{var f;o&&g.current&&L((f=g.current)==null?void 0:f.offsetWidth)},[o]),p.useEffect(()=>{var f;u&&b.current&&k((f=b.current)==null?void 0:f.offsetWidth)},[u]);const V={onChange:S,onBlur:_,onFocus:I,name:n,id:T,disabled:i,placeholder:x,value:e,error:d,style:{paddingLeft:`${o?`${W}px`:"1em"}`,paddingRight:`${u?`${M}px`:"1em"}`,...a}};return t(O,{theme:r,label:m,error:d,hint:s,children:t("div",{children:[m&&t(E,{variant:"bodyMedium",content:m},void 0,!1,{fileName:l,lineNumber:65,columnNumber:19},void 0),h?t(H,{...V,theme:r||N},void 0,!1,{fileName:l,lineNumber:68,columnNumber:11},void 0):t(z,{...V,...B,theme:r||N,ref:C},void 0,!1,{fileName:l,lineNumber:70,columnNumber:11},void 0),o&&t(w,{ref:g,children:o},void 0,!1,{fileName:l,lineNumber:73,columnNumber:25},void 0),u&&t(A,{ref:b,children:u},void 0,!1,{fileName:l,lineNumber:75,columnNumber:26},void 0),d&&!i&&t(E,{variant:"bodyMedium",content:d},void 0,!1,{fileName:l,lineNumber:77,columnNumber:32},void 0),s&&!d&&t(E,{variant:"bodyMedium",content:s},void 0,!1,{fileName:l,lineNumber:79,columnNumber:28},void 0)]},void 0,!0,{fileName:l,lineNumber:64,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:63,columnNumber:5},void 0)},"Input");try{$.displayName="Input",$.__docgenInfo={description:"",displayName:"Input",props:{name:{defaultValue:null,description:"",name:"name",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},theme:{defaultValue:{value:`{\r
  mediaScreenBreakpoints: {\r
    xs: "480px",\r
    sm: "576px",\r
    md: "767px",\r
    lg: "992px",\r
    xl: "1200px",\r
    xxl: "1600px",\r
  },\r
  borderRadius: {\r
    xs: "1px",\r
    sm: "2px",\r
    md: "4px",\r
    lg: "8px",\r
    xl: "16px",\r
    full: "50%",\r
  },\r
  borderWidth: {\r
    xs: "1px",\r
    sm: "2px",\r
    md: "3px",\r
    lg: "4px",\r
  },\r
  fontSize: {\r
    xs: "0.6rem",\r
    sm: "1rem",\r
    md: "1.6rem",\r
    lg: "2.8rem",\r
    xl: "4rem",\r
    xxl: "7rem",\r
  },\r
  fontWeight: {\r
    regular: "400",\r
    semiBold: "600",\r
    bold: "700",\r
  },\r
  typographyFontSize: {\r
    h1: "3.375rem",\r
    h2: "2.625rem",\r
    h3: "2rem",\r
    h4: "1.75rem",\r
    h5: "1.25rem",\r
    h6: "1.125rem",\r
    body: {\r
      sm: "0.875rem",\r
      md: "1rem",\r
      lg: "1.125rem",\r
    },\r
    link: {\r
      sm: "0.875rem",\r
      md: "1rem",\r
      lg: "1.125rem",\r
    },\r
    caption: "0.75rem",\r
    helperText: "0.75rem",\r
    code: "0.875rem",\r
  },\r
  typographyLineHeight: {\r
    h1: "4rem",\r
    h2: "3.125rem",\r
    h3: "2.5rem",\r
    h4: "2.25rem",\r
    h5: "1.75rem",\r
    h6: "1.625rem",\r
    body: {\r
      sm: "1.25rem",\r
      md: "1.5rem",\r
      lg: "1.625rem",\r
    },\r
    link: {\r
      sm: "1.25rem",\r
      md: "1.5rem",\r
      lg: "1.625rem",\r
    },\r
    caption: "1rem",\r
    helperText: "1rem",\r
    code: "1.25rem",\r
  },\r
  lineHeight: {\r
    xs: "0.85rem",\r
    sm: "1.2rem",\r
    md: "2rem",\r
    lg: "3.4rem",\r
    xl: "5rem",\r
    xxl: "8.5rem",\r
  },\r
  fontFamily: {\r
    one: "Rubik, sans-serif",\r
    two: "Inter, sans-serif",\r
    three: "JetBrains Mono",\r
  },\r
  palette: {\r
    ...colors,\r
  },\r
}`},description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}},style:{defaultValue:null,description:"",name:"style",required:!1,type:{name:"CSSProperties"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},textarea:{defaultValue:null,description:"",name:"textarea",required:!1,type:{name:"boolean"}},leftContent:{defaultValue:null,description:"",name:"leftContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},rightContent:{defaultValue:null,description:"",name:"rightContent",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},error:{defaultValue:null,description:"",name:"error",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"",name:"hint",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"ChangeEventHandler<any>"}},onFocus:{defaultValue:null,description:"",name:"onFocus",required:!1,type:{name:"FocusEventHandler<Element>"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"FocusEventHandler<Element>"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},type:{defaultValue:null,description:"",name:"type",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"Ref<HTMLInputElement>"}},inputMode:{defaultValue:null,description:"",name:"inputMode",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"none"'},{value:'"tel"'},{value:'"url"'},{value:'"email"'},{value:'"numeric"'},{value:'"decimal"'}]}},maxLength:{defaultValue:null,description:"",name:"maxLength",required:!1,type:{name:"number"}},pattern:{defaultValue:null,description:"",name:"pattern",required:!1,type:{name:"string"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/input/index.tsx#Input"]={docgenInfo:$.__docgenInfo,name:"Input",path:"src/components/input/index.tsx#Input"})}catch{}export{$ as I};
//# sourceMappingURL=index-4d8d9e4d.js.map
