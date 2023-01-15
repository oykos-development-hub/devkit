var I=Object.defineProperty;var t=(e,o)=>I(e,"name",{value:o,configurable:!0});import{R as h}from"./index-d84d9d3b.js";import{D as T,C as _,X as v}from"./CircleCheckIcon-7eb48684.js";import{s as m,T as c,S as N}from"./index-d650410b.js";import{j as n,a as b}from"./jsx-runtime-82e0d3de.js";import"./es.object.get-own-property-descriptor-ca06259f.js";import"./index-4cb24bae.js";const q=m.span`
  &.left {
    margin-right: 2.375rem;
    position: relative;
    align-self: flex-start;
  }

  &.right {
    margin-left: 2.375rem;
    position: relative;
  }
`,d=t(({children:e,className:o,color:a})=>n(q,{color:a,className:o,children:e}),"IconWrapper");try{d.displayName="IconWrapper",d.__docgenInfo={description:"",displayName:"IconWrapper",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/notification/elements/icon-wraper/index.tsx#IconWrapper"]={docgenInfo:d.__docgenInfo,name:"IconWrapper",path:"src/components/notification/elements/icon-wraper/index.tsx#IconWrapper"})}catch{}const C=t(e=>{var o,a,r,i;switch(e.variant){case"error":return e.color||((o=e.theme)==null?void 0:o.palette.light.one)||"#D9D9D9FF";case"success":return e.color||((a=e.theme)==null?void 0:a.palette.light.one)||"#D9D9D9FF";case"neutral":return e.color||((r=e.theme)==null?void 0:r.palette.light.one)||"#D9D9D9FF";case"info":return e.color||((i=e.theme)==null?void 0:i.palette.light.one)||"#D9D9D9FF";default:return"#D9D9D9FF"}},"getColor"),V=t(e=>{var o,a,r,i;switch(e.variant){case"error":return e.backgroundColor||((o=e.theme)==null?void 0:o.palette.important.two)||"#f44336";case"success":return e.backgroundColor||((a=e.theme)==null?void 0:a.palette.info.three)||"#00b300";case"neutral":return e.backgroundColor||((r=e.theme)==null?void 0:r.palette.info.four)||"#598d82";case"info":return e.backgroundColor||((i=e.theme)==null?void 0:i.palette.info.four)||"#598d82";default:return"#6C757D"}},"getBgColor"),l="0 0.0625rem 0.125rem rgba(97, 97, 97, 0.2), 0 0.125rem 0.25rem rgba(97, 97, 97, 0.2)",w=m.p`
  display: flex;
  align-content: center;
  align-items: center;
  text-align: justify;
`,f=t(({additionalText:e})=>n(w,{children:e}),"AdditionalText");try{f.displayName="AdditionalText",f.__docgenInfo={description:"",displayName:"AdditionalText",props:{}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/notification/elements/additional-text/index.tsx#AdditionalText"]={docgenInfo:f.__docgenInfo,name:"AdditionalText",path:"src/components/notification/elements/additional-text/index.tsx#AdditionalText"})}catch{}const B=m.div`
  font-family: ${e=>{var o,a;return e.fontFamily||((a=(o=e.theme)==null?void 0:o.fontFamily)==null?void 0:a.one)||"sans-serif"}};
  background-color: ${V};
  color: ${C};
  box-shadow: ${e=>e.isSnackBar?e.boxShadow||l:""};
  display: flex;
  align-content: center;
  align-items: center;
  border-radius: ${e=>e.borderRadius+"rem"||e.theme.borderRadius.md||"0.5rem"};
  padding: 0.75rem 1rem;
  min-height: 3rem;
  z-index: 999;
`,p=t(e=>n(B,{...e,children:e.children}),"NotificationBoard");try{p.displayName="NotificationBoard",p.__docgenInfo={description:"",displayName:"NotificationBoard",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string | Element"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},leftIconColor:{defaultValue:null,description:"",name:"leftIconColor",required:!1,type:{name:"string"}},closeIconColor:{defaultValue:null,description:"",name:"closeIconColor",required:!1,type:{name:"string"}},iconWidth:{defaultValue:null,description:"",name:"iconWidth",required:!1,type:{name:"number"}},iconTop:{defaultValue:null,description:"",name:"iconTop",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"Element"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},isSnackBar:{defaultValue:null,description:"",name:"isSnackBar",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/notification/elements/notification-board/index.tsx#NotificationBoard"]={docgenInfo:p.__docgenInfo,name:"NotificationBoard",path:"src/components/notification/elements/notification-board/index.tsx#NotificationBoard"})}catch{}const k=m.div`
  display: flex;
  flex-direction: column;
`,y=t(e=>n(k,{...e,children:e.children}),"ColumnWrapper");try{y.displayName="ColumnWrapper",y.__docgenInfo={description:"",displayName:"ColumnWrapper",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string | Element"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},leftIconColor:{defaultValue:null,description:"",name:"leftIconColor",required:!1,type:{name:"string"}},closeIconColor:{defaultValue:null,description:"",name:"closeIconColor",required:!1,type:{name:"string"}},iconWidth:{defaultValue:null,description:"",name:"iconWidth",required:!1,type:{name:"number"}},iconTop:{defaultValue:null,description:"",name:"iconTop",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"Element"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},isSnackBar:{defaultValue:null,description:"",name:"isSnackBar",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/notification/elements/column-wrapper/index.tsx#ColumnWrapper"]={docgenInfo:y.__docgenInfo,name:"ColumnWrapper",path:"src/components/notification/elements/column-wrapper/index.tsx#ColumnWrapper"})}catch{}const R=m.div`
  display: flex;
  justify-content: space-between;
`,g=t(e=>n(R,{...e,children:e.children}),"ContentWrapper");try{g.displayName="ContentWrapper",g.__docgenInfo={description:"",displayName:"ContentWrapper",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string | Element"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},leftIconColor:{defaultValue:null,description:"",name:"leftIconColor",required:!1,type:{name:"string"}},closeIconColor:{defaultValue:null,description:"",name:"closeIconColor",required:!1,type:{name:"string"}},iconWidth:{defaultValue:null,description:"",name:"iconWidth",required:!1,type:{name:"number"}},iconTop:{defaultValue:null,description:"",name:"iconTop",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"Element"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},isSnackBar:{defaultValue:null,description:"",name:"isSnackBar",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/notification/elements/content-wrapper/index.tsx#ContentWrapper"]={docgenInfo:g.__docgenInfo,name:"ContentWrapper",path:"src/components/notification/elements/content-wrapper/index.tsx#ContentWrapper"})}catch{}const u=t(e=>{const o=e.variant,a=C(e),r=t(()=>{switch(o){case"success":return n(_,{color:e.leftIconColor||e.color,top:e.iconTop+"rem"||"1rem"});case"info":case"neutral":case"error":return n(T,{width:e.iconWidth||20,color:e.leftIconColor||e.color,top:e.iconTop+"rem"||"1rem"});default:return null}},"renderIcon"),i=t(()=>b(h.Fragment,{children:[n("p",{className:e.className,children:e.message}),e.closeIcon&&n(d,{className:"right",color:a,children:n(v,{width:e.iconWidth||20,top:e.iconTop+"rem",color:e.closeIconColor||e.color,onClick:e.onClose,position:"relative"})})]}),"content"),x=t(()=>b(h.Fragment,{children:[n(g,{...e,children:i()}),e.additionalText&&n(f,{additionalText:e.additionalText}),e.button&&n("div",{className:"m-t-14 m-b-4",children:e.button})]}),"renderContent");return n(p,{...e,children:t(()=>b(h.Fragment,{children:[n(d,{className:"left",children:r()}),n(y,{...e,children:x()})]}),"renderChildren")()})},"Notification");try{u.displayName="Notification",u.__docgenInfo={description:"",displayName:"Notification",props:{variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'},{value:'"error"'},{value:'"success"'},{value:'"info"'},{value:'"neutral"'}]}},message:{defaultValue:null,description:"",name:"message",required:!0,type:{name:"string | Element"}},color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}},backgroundColor:{defaultValue:null,description:"",name:"backgroundColor",required:!1,type:{name:"string"}},leftIconColor:{defaultValue:null,description:"",name:"leftIconColor",required:!1,type:{name:"string"}},closeIconColor:{defaultValue:null,description:"",name:"closeIconColor",required:!1,type:{name:"string"}},iconWidth:{defaultValue:null,description:"",name:"iconWidth",required:!1,type:{name:"number"}},iconTop:{defaultValue:null,description:"",name:"iconTop",required:!1,type:{name:"number"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},closeIcon:{defaultValue:null,description:"",name:"closeIcon",required:!1,type:{name:"boolean"}},additionalText:{defaultValue:null,description:"",name:"additionalText",required:!1,type:{name:"string"}},boxShadow:{defaultValue:null,description:"",name:"boxShadow",required:!1,type:{name:"string"}},borderRadius:{defaultValue:null,description:"",name:"borderRadius",required:!1,type:{name:"string | number"}},button:{defaultValue:null,description:"",name:"button",required:!1,type:{name:"Element"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},isSnackBar:{defaultValue:null,description:"",name:"isSnackBar",required:!1,type:{name:"boolean"}},fontFamily:{defaultValue:null,description:"",name:"fontFamily",required:!1,type:{name:"string"}},theme:{defaultValue:null,description:"",name:"theme",required:!1,type:{name:"DefaultTheme"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/notification/index.tsx#Notification"]={docgenInfo:u.__docgenInfo,name:"Notification",path:"src/components/notification/index.tsx#Notification"})}catch{}var S=(e=>(e.error="error",e.success="success",e.info="info",e.neutral="neutral",e))(S||{});const X={parameters:{storySource:{source:`import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Notification } from "./";
import { NotificationVariants as Variants } from "./types";
import { Theme } from "../../shared/theme";
import { StoryWrapper } from "../../shared/components/story-wrapper";
import { initialShadow } from "./elements/shared";

export default {
  title: "Example/Notification",
  component: Notification,
  argTypes: {
    variant: {
      control: {
        type: "select",
        options: Object.keys(Variants).map((key: string) => key.toLowerCase()),
      },
    },
    boxShadow: {
      control: {
        type: "text",
      },
    },
    message: {
      control: {
        type: "text",
      },
    },
    iconWidth: {
      control: {
        type: "range",
        min: 5,
        max: 100,
        step: 1,
      },
    },
    iconTop: {
      control: {
        type: "range",
        min: 0,
        max: 50,
        step: 0.01,
      },
    },
    borderRadius: {
      control: {
        type: "range",
        min: 0,
        max: 2.5,
        step: 0.05,
      },
    },
    fontFamily: {
      control: {
        type: "text",
      },
    },
    className: {
      control: {
        type: "text",
      },
    },
    onClose: {
      control: {
        type: "boolean",
      },
    },
    additionalText: {
      control: {
        type: "text",
      },
    },
    isSnackBar: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => (
  <StoryWrapper>
    <Notification {...args} />
  </StoryWrapper>
);

export const FailureNotification = Template.bind({});
FailureNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "error",
  message: "There was an error!",
  closeIcon: true,
  theme: Theme,
};

export const SuccessNotification = Template.bind({});
SuccessNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "success",
  message: "Profile successfully updated!",
  closeIcon: true,
  theme: Theme,
};

export const InfoNotification = Template.bind({});
InfoNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "info",
  message: "You have successfully added this journey to My Journeys.",
  closeIcon: false,
  theme: Theme,
};

export const InfoNotificationTwoIcons = Template.bind({});
InfoNotificationTwoIcons.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  variant: "info",
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  message: "Traveller info will become visible after adding the journey to your list.",
  closeIcon: true,
  theme: Theme,
};

export const NeutralNotification = Template.bind({});
NeutralNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  isSnackBar: false,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "neutral",
  message: "Neutral informative message.",
  closeIcon: true,
  theme: Theme,
};

export const ButtonNotification = Template.bind({});
ButtonNotification.args = {
  color: "",
  backgroundColor: "",
  leftIconColor: "",
  closeIconColor: "",
  iconWidth: 20,
  iconTop: 1,
  boxShadow: initialShadow,
  borderRadius: 0.5,
  variant: "neutral",
  message: "Neutral informative message.",
  additionalText: "Are you sure you want to proceed? Because if you click this button, absolutely nothing will happen.",
  button: <button type="button">Confirm</button>,
  closeIcon: true,
  theme: Theme,
};
`,locationsMap:{"failure-notification":{startLoc:{col:54,line:81},endLoc:{col:1,line:85},startBody:{col:54,line:81},endBody:{col:1,line:85}},"success-notification":{startLoc:{col:54,line:81},endLoc:{col:1,line:85},startBody:{col:54,line:81},endBody:{col:1,line:85}},"info-notification":{startLoc:{col:54,line:81},endLoc:{col:1,line:85},startBody:{col:54,line:81},endBody:{col:1,line:85}},"info-notification-two-icons":{startLoc:{col:54,line:81},endLoc:{col:1,line:85},startBody:{col:54,line:81},endBody:{col:1,line:85}},"neutral-notification":{startLoc:{col:54,line:81},endLoc:{col:1,line:85},startBody:{col:54,line:81},endBody:{col:1,line:85}},"button-notification":{startLoc:{col:54,line:81},endLoc:{col:1,line:85},startBody:{col:54,line:81},endBody:{col:1,line:85}}}}},title:"Example/Notification",component:u,argTypes:{variant:{control:{type:"select",options:Object.keys(S).map(e=>e.toLowerCase())}},boxShadow:{control:{type:"text"}},message:{control:{type:"text"}},iconWidth:{control:{type:"range",min:5,max:100,step:1}},iconTop:{control:{type:"range",min:0,max:50,step:.01}},borderRadius:{control:{type:"range",min:0,max:2.5,step:.05}},fontFamily:{control:{type:"text"}},className:{control:{type:"text"}},onClose:{control:{type:"boolean"}},additionalText:{control:{type:"text"}},isSnackBar:{control:{type:"boolean"}}}},s=t(e=>n(N,{children:n(u,{...e})}),"Template"),W=s.bind({});W.args={color:"",backgroundColor:"",leftIconColor:"",closeIconColor:"",iconWidth:20,iconTop:1,isSnackBar:!1,boxShadow:l,borderRadius:.5,variant:"error",message:"There was an error!",closeIcon:!0,theme:c};const O=s.bind({});O.args={color:"",backgroundColor:"",leftIconColor:"",closeIconColor:"",iconWidth:20,iconTop:1,isSnackBar:!1,boxShadow:l,borderRadius:.5,variant:"success",message:"Profile successfully updated!",closeIcon:!0,theme:c};const E=s.bind({});E.args={color:"",backgroundColor:"",leftIconColor:"",closeIconColor:"",iconWidth:20,iconTop:1,isSnackBar:!1,boxShadow:l,borderRadius:.5,variant:"info",message:"You have successfully added this journey to My Journeys.",closeIcon:!1,theme:c};const A=s.bind({});A.args={color:"",backgroundColor:"",leftIconColor:"",closeIconColor:"",iconWidth:20,iconTop:1,variant:"info",isSnackBar:!1,boxShadow:l,borderRadius:.5,message:"Traveller info will become visible after adding the journey to your list.",closeIcon:!0,theme:c};const F=s.bind({});F.args={color:"",backgroundColor:"",leftIconColor:"",closeIconColor:"",iconWidth:20,iconTop:1,isSnackBar:!1,boxShadow:l,borderRadius:.5,variant:"neutral",message:"Neutral informative message.",closeIcon:!0,theme:c};const L=s.bind({});L.args={color:"",backgroundColor:"",leftIconColor:"",closeIconColor:"",iconWidth:20,iconTop:1,boxShadow:l,borderRadius:.5,variant:"neutral",message:"Neutral informative message.",additionalText:"Are you sure you want to proceed? Because if you click this button, absolutely nothing will happen.",button:n("button",{type:"button",children:"Confirm"}),closeIcon:!0,theme:c};const z=["FailureNotification","SuccessNotification","InfoNotification","InfoNotificationTwoIcons","NeutralNotification","ButtonNotification"];export{L as ButtonNotification,W as FailureNotification,E as InfoNotification,A as InfoNotificationTwoIcons,F as NeutralNotification,O as SuccessNotification,z as __namedExportsOrder,X as default};
//# sourceMappingURL=index.stories-977ade1b.js.map
